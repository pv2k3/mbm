import { useEffect, useRef } from 'react';

export const useAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    // Observe all animated elements on the page
    const animatedElements = document.querySelectorAll('[data-animation="true"]');
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    // Initially check if elements are in view
    const checkIfInView = () => {
      animatedElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('is-visible');
        }
      });
    };
    
    checkIfInView();

    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return ref;
};

export default useAnimation;
