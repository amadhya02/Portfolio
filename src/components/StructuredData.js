import { useEffect } from 'react';

/**
 * Component to add JSON-LD structured data for SEO
 */
const StructuredData = ({ data }) => {
  useEffect(() => {
    // Remove existing script if any (based on type)
    const existingScript = document.querySelector(
      `script[type="application/ld+json"][data-type="${data['@type']}"]`
    );
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-type', data['@type']);
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector(
        `script[type="application/ld+json"][data-type="${data['@type']}"]`
      );
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [data]);

  return null;
};

export default StructuredData;
