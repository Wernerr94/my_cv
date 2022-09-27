import { useState, useEffect } from "react";

export default function useIntersection(element, rootMargin) {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const elementNode = element.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin }
    );

    elementNode && observer.observe(elementNode);

    return () => observer.unobserve(elementNode);
  }, [element, rootMargin]);

  return isVisible;
}
