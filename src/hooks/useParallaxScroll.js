import useMediaQuery from '@mui/material/useMediaQuery';
import { useReducedMotion, useScroll } from 'framer-motion';
import { useRef } from 'react';

import { PARALLAX_DISABLED_QUERY } from '../constants/breakpoints';

const useParallaxScroll = (offset = ['start start', 'end end']) => {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const disableParallax = useMediaQuery(PARALLAX_DISABLED_QUERY);
  const { scrollYProgress } = useScroll({ target: ref, offset });

  return { ref, scrollYProgress, prefersReducedMotion, disableParallax };
};

export default useParallaxScroll;
