"use client"
import React, { ReactNode, useEffect, useRef } from 'react'

type children = { children: ReactNode; }

const Main: React.FC<children> = ({ children }) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const handleScroll = () => {
      const parallax = parallaxRef.current;
      const offset = window.scrollY;

      if (parallax) {
        const xPos = -offset / 5 + 2;
        const yPos = offset / 5 + 20;
        parallax.style.backgroundPosition = `${xPos}px ${yPos}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, []);

  return (
    <div className=''>
      <div
        ref={parallaxRef}
        style={{
          margin: '0 auto',
          borderImage: 'fill 0 linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1))',
          backgroundImage: 'url(/images/mountain.jpg)',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center 20%',
          transition: 'all 0.1s linear'
        }}
        className='min-w-80 max-w-screen-2xl bg-cover bg-center w-full'
      >
        {children}
      </div>
    </div>
  )
}

export default Main
