import { RefObject, useEffect, useState } from 'react';
import useIntersection from 'react-use/lib/useIntersection';

// хук отображения линий
const useLine = (intersectionRef: RefObject<HTMLElement>) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const ROOT_MARGIN = '20px';
  const THRESHOLD = 1;

  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: ROOT_MARGIN,
    threshold: THRESHOLD
  });

  useEffect(() => {
    if (!isEnabled && intersection?.intersectionRatio === 1) {
      setIsEnabled(true);
    }
  }, [intersection, isEnabled]);

  return { isEnabled };
};

export default useLine;
