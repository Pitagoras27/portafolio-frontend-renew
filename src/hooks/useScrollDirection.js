import { useEffect, useState } from "react";

export const useScrollDirection = () => {
  const [direction, setDirection] = useState('')

  useEffect(() => {
    
    let lastScrollTop = 0;

    const handleScrollDirection = () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;

      if (st > lastScrollTop){
        setDirection('down');
      } else {
        setDirection('up');
      }

      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }

    window.addEventListener('scroll', handleScrollDirection, false);

    return () => {
      window.removeEventListener('scroll', handleScrollDirection);
    }
  }, []);

  return direction;
  
}