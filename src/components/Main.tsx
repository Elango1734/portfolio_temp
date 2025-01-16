"use client"
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import CrossSpinner from './CrossSpinner';
import Header from './Header';
const TIMEOUT: number = 1000;
const BREAKPOINT = 768;

type children = { children: ReactNode; }

const Main: React.FC<children> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [visible, setVisible] = useState<boolean>(false);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const imageUrl: string = '/images/mountain.jpg';

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;

    let loaderTimer: NodeJS.Timeout;
    let fadeTimer: NodeJS.Timeout;
    img.onload = () => {
      loaderTimer = setTimeout(() => {
        setLoading(false);
      }, TIMEOUT);
      fadeTimer = setTimeout(() => {
        setVisible(true);
      }, TIMEOUT + 50)
    };
    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(fadeTimer);
    }
  }, [imageUrl]);

  useEffect(() => {

    const handleScroll = () => {
      console.log(window.innerWidth);
      if (window.innerWidth > BREAKPOINT) {
        const parallax = parallaxRef.current;
        const offset = window.scrollY;

        if (parallax) {
          const xPos = -offset / 5;
          const yPos = offset / 5 + 20;
          parallax.style.backgroundPosition = `${xPos}px ${yPos}%`;
        }
      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);
  console.log(loading);
  return (
    <div className=''>
      {(loading) ?
        <CrossSpinner />
        :
        <>
          <Header />
          <div
            ref={parallaxRef}
            style={{
              margin: '0 auto',
              borderImage: 'fill 0 linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1))',
              backgroundImage: `url(${imageUrl})`,
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center 20%',
              transition: 'all 0.1s linear'
            }}
            className={`min-w-80 max-w-screen-2xl bg-cover bg-repeat bg-center w-full fade-in ${visible ? 'visible' : ''} `}
          >
            {children}
          </div>
        </>

      }
    </div>
  )
}

export default Main
