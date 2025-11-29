import { useState, useEffect, useRef } from 'react';
import './Preloader.css';

export function Preloader() {
  const [num, setNum] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const countRef = useRef(null);

  useEffect(() => {
    window.addEventListener('load', startPreload);
    return () => window.removeEventListener('load', startPreload);
  }, []);

  const startPreload = () => {
    let currentNum = 0;
    const preloading = setInterval(() => {
      if (currentNum < 100) {
        headingRef.current.style.transform = 'translateY(0%)';
        headingRef.current.style.skewY = '0%';
        headingRef.current.style.transition = 'all ease 1.2s';
        currentNum++;
        document.documentElement.style.setProperty('--preloader', currentNum + '%');
        setNum(currentNum);
      } else {
        headingRef.current.style.transform = 'translateY(-100%)';
        headingRef.current.style.transition = 'all ease 1s';
        containerRef.current.style.height = '0';
        containerRef.current.style.transition = 'all 2s cubic-bezier(1,0,0,1)';
        containerRef.current.style.transitionDelay = '0.8s';
        countRef.current.style.opacity = '0';
        countRef.current.style.transition = 'all ease 1s';
        setIsLoading(false);
        clearInterval(preloading);
      }
    }, 100);
  };

  if (!isLoading && num >= 100) {
    return null;
  }

  return (
    <div className="container" ref={containerRef}>
      <span className="count" ref={countRef}>
        {num}%
      </span>
      <span className="hide-text">
        <h1 className="loading-heading" ref={headingRef} data-title="loading.">
          loading.
        </h1>
      </span>
    </div>
  );
}
