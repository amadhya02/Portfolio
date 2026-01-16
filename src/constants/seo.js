/**
 * SEO Constants
 * 
 * Image Optimization Note:
 * For optimal social media sharing, OG images should be:
 * - Dimensions: 1200x630px (1.91:1 aspect ratio)
 * - Format: PNG or JPG
 * - File size: Under 300KB (ideally under 120KB)
 * 
 * Consider creating an optimized og-image.png file with your branding
 * and updating the OG_IMAGE_URL constant below.
 */

export const SEO_CONFIG = {
  siteUrl: 'https://amadhya-portfolio.web.app',
  siteName: 'Amadhya Anand Portfolio',
  defaultTitle: 'Amadhya Anand | Full-Stack Developer Portfolio',
  defaultDescription:
    'Explore the creative and technical work of Amadhya Anand — a full-stack developer building modern, performant web apps with clean design and thoughtful user experiences.',
  author: 'Amadhya Anand',
  // Using current AA-logo.png (1024x1024 square format)
  // Social platforms will resize as needed. For optimal results, consider creating
  // a 1200x630px rectangular og-image.png in the future for better social card previews
  ogImageUrl: '/AA-logo.png',
  ogImageWidth: '1024', // Actual logo dimensions
  ogImageHeight: '1024', // Actual logo dimensions
};

export const SOCIAL_PROFILES = {
  github: 'https://github.com/amadhya02',
  linkedin: 'https://www.linkedin.com/in/amadhya-anand-1761b8169/',
  email: 'amadhya.anand@gmail.com',
};

// Array format for structured data
export const SOCIAL_PROFILES_ARRAY = [
  SOCIAL_PROFILES.github,
  SOCIAL_PROFILES.linkedin,
];
