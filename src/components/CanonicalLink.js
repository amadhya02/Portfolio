import { useEffect } from 'react';

/**
 * Component to add canonical link tag for SEO
 * react-head doesn't support link tags, so we manually add them
 */
const CanonicalLink = ({ url }) => {
  useEffect(() => {
    // Remove existing canonical link if any
    const existingLink = document.querySelector('link[rel="canonical"]');
    if (existingLink) {
      existingLink.remove();
    }

    // Add new canonical link
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = url;
    document.head.appendChild(link);

    // Cleanup function
    return () => {
      const linkToRemove = document.querySelector(`link[rel="canonical"][href="${url}"]`);
      if (linkToRemove) {
        linkToRemove.remove();
      }
    };
  }, [url]);

  return null;
};

export default CanonicalLink;
