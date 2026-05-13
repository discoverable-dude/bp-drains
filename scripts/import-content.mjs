/**
 * Import BP Drains content from CSV export into Sanity.
 *
 * Usage:
 *   SANITY_TOKEN=<write-token> node scripts/import-content.mjs <path-to-csv>
 *
 * Get a write token from: sanity.io → project → API → Tokens → Add API token (Editor role)
 */

import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
const token     = process.env.SANITY_TOKEN;

if (!projectId) { console.error('Set NEXT_PUBLIC_SANITY_PROJECT_ID'); process.exit(1); }
if (!token)     { console.error('Set SANITY_TOKEN (editor-level token from sanity.io)'); process.exit(1); }

const client = createClient({ projectId, dataset, token, apiVersion: '2024-01-01', useCdn: false });

// ---- CSV parser (handles quoted fields with newlines) ----
function parseCSV(text) {
  const rows = [];
  let row = [], field = '', inQuote = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"') {
      if (inQuote && text[i + 1] === '"') { field += '"'; i++; }
      else { inQuote = !inQuote; }
    } else if (ch === ',' && !inQuote) {
      row.push(field); field = '';
    } else if (ch === '\n' && !inQuote) {
      row.push(field); rows.push(row); row = []; field = '';
    } else {
      field += ch;
    }
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  return rows;
}

function slug(str) {
  return str.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// Extract the first paragraph as intro, rest is body
function splitBody(markdown) {
  const lines = markdown.trim().split('\n');
  const introLines = [];
  let i = 0;
  // Skip blank lines at start
  while (i < lines.length && lines[i].trim() === '') i++;
  // Collect until blank line or heading
  while (i < lines.length && lines[i].trim() !== '' && !lines[i].startsWith('#')) {
    introLines.push(lines[i]); i++;
  }
  const intro = introLines.join(' ').trim();
  const body  = lines.slice(i).join('\n').trim();
  return { intro, body };
}

function areaNameFromH1(h1) {
  // "Blocked Drains in Margate | ..." → "Margate"
  const m = h1.match(/\bin\s+([A-Z][a-z]+(?:\s[A-Z][a-z]+)?)\b/);
  return m ? m[1] : h1;
}

function serviceTitleFromH1(h1) {
  // "Gutter Cleaning in Herne Bay, Faversham..." → "Gutter Cleaning"
  const m = h1.match(/^([^,|]+?)\s+(?:in\s+|–|—|\|)/i);
  return m ? m[1].trim() : h1.split(',')[0].trim();
}

// ---- Main ----
const csvPath = process.argv[2];
if (!csvPath) { console.error('Usage: node scripts/import-content.mjs <path-to-csv>'); process.exit(1); }

const text = readFileSync(resolve(csvPath), 'utf8');
const rows = parseCSV(text);
const headers = rows[0].map(h => h.trim());
const data = rows.slice(1).map(row => {
  const obj = {};
  headers.forEach((h, i) => { obj[h] = (row[i] ?? '').trim(); });
  return obj;
});

const TYPE_COL  = 'Page Type';
const H1_COL    = 'Current H1';
const TITLE_COL = 'Current Title Tag';
const BODY_COL  = 'Body Content (Clean, Markdown)';

let created = 0, skipped = 0;

for (const row of data) {
  const pageType = row[TYPE_COL];
  const h1       = row[H1_COL];
  const seoTitle = row[TITLE_COL];
  const markdown = row[BODY_COL] ?? '';

  if (!pageType || !h1) { skipped++; continue; }

  const { intro, body } = splitBody(markdown);

  if (pageType === 'Area Page') {
    const areaName = areaNameFromH1(h1);
    const doc = {
      _id:      `area-${slug(areaName)}`,
      _type:    'area',
      name:     areaName,
      slug:     { _type: 'slug', current: slug(areaName) },
      seoTitle,
      h1,
      intro,
      body,
      county:   'Kent',
    };
    await client.createOrReplace(doc);
    console.log(`✓ Area: ${areaName}`);
    created++;

  } else if (pageType === 'Services Page') {
    const title = serviceTitleFromH1(h1);
    const doc = {
      _id:      `service-${slug(title)}`,
      _type:    'service',
      title,
      slug:     { _type: 'slug', current: slug(title) },
      seoTitle,
      h1,
      intro,
      body,
    };
    await client.createOrReplace(doc);
    console.log(`✓ Service: ${title}`);
    created++;

  } else {
    console.log(`— Skipped (${pageType}): ${h1.slice(0, 60)}`);
    skipped++;
  }
}

console.log(`\nDone. Created/updated: ${created}  Skipped: ${skipped}`);
