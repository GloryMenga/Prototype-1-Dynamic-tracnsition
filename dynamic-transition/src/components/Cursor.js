import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (event) => {
      gsap.to(cursorRef.current, {
        x: event.clientX - 25, 
        y: event.clientY - 25, 
        ease: "power3.out",
        duration: 0.5, 
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '35px',
        height: '35px',
        backgroundColor: '#733C14',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default Cursor;
