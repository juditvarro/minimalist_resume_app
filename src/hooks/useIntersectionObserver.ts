import { useEffect, useState } from 'react';

const useIntersectionObserver = (
  ref: React.ForwardedRef<HTMLDivElement | null>,
  threshold: number = 0.2,
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref && 'current' in ref ? ref.current : null;

    if (currentRef) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        {
          threshold,
        },
      );

      observer.observe(currentRef);

      return () => {
        observer.unobserve(currentRef);
      };
    }
  }, [ref, threshold]);

  return isVisible;
};

export default useIntersectionObserver;
