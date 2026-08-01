import useMediaQuery from '@mui/material/useMediaQuery';
import { useReducedMotion, useScroll } from 'framer-motion';
import { useRef } from 'react';

// Parallax is disabled below this breakpoint across all hero sections
const PARALLAX_DISABLED_QUERY = '(max-width:899.95px)';

const useParallaxScroll = (offset = ['start start', 'end end']) => {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const disableParallax = useMediaQuery(PARALLAX_DISABLED_QUERY);
  const { scrollYProgress } = useScroll({ target: ref, offset });

  return { ref, scrollYProgress, prefersReducedMotion, disableParallax };
};

export default useParallaxScroll;
