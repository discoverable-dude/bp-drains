import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
export const apiVersion = '2024-01-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
});

const builder = imageUrlBuilder(client);
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// ---- GROQ queries ----

export async function getAllServices() {
  return client.fetch(`*[_type == "service"] | order(order asc) {
    _id, title, slug, seoTitle, h1, intro, heroImage
  }`);
}

export async function getServiceBySlug(slug: string) {
  return client.fetch(`*[_type == "service" && slug.current == $slug][0] {
    _id, title, seoTitle, h1, intro, body, heroImage
  }`, { slug });
}

export async function getAllAreas() {
  return client.fetch(`*[_type == "area"] | order(name asc) {
    _id, name, slug, seoTitle, h1, intro, heroImage
  }`);
}

export async function getAreaBySlug(slug: string) {
  return client.fetch(`*[_type == "area" && slug.current == $slug][0] {
    _id, name, seoTitle, h1, intro, body, heroImage
  }`, { slug });
}

export async function getFeaturedTestimonials(limit = 9) {
  return client.fetch(`*[_type == "testimonial"] | order(publishedAt desc) [0...$limit] {
    _id, reviewerName, area, service, stars, text, source, publishedAt, photo
  }`, { limit });
}

export async function getAllGalleryImages() {
  return client.fetch(`*[_type == "galleryImage"] | order(order asc, _createdAt desc) {
    _id, image, caption, service, area, featured, beforeAfter
  }`);
}

export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]`);
}
