import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Sneaker from '../assets/Sneakers.svg';

function Sneakers() {
  const sneakersRef = useRef(null);

  useEffect(() => {
    const sneakers = sneakersRef.current;
    if (!sneakers) return;

    // Select all rect elements within the SVG that have "sneakers" in their data-name attribute
    const sneakerOutlines = sneakers.querySelectorAll('rect[data-name*="sneakers"], rect[data-name*="sneaker"]');

    sneakerOutlines.forEach((el) => {
      // Get current transform values
      const currentTransform = el.getAttribute('transform');
      
      // Create floating animation
      gsap.to(el, {
        attr: {
          transform: () => {
            // Extract current translate and rotate values
            const translate = currentTransform.match(/translate\(([-\d.\s]+)\)/);
            const rotate = currentTransform.match(/rotate\(([-\d.]+)\)/);
            
            // Generate small random offsets
            const dx = Math.random() * 20 - 10;
            const dy = Math.random() * 20 - 10;
            const dr = Math.random() * 5 - 2.5;
            
            // Combine current transform with small random changes
            return `${translate ? `translate(${translate[1]})` : ''} ${rotate ? `rotate(${parseFloat(rotate[1]) + dr})` : ''} translate(${dx} ${dy})`;
          }
        },
        duration: () => 4 + Math.random() * 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: () => Math.random() * 2,
      });
    });

    // Clean up function
    return () => {
      sneakerOutlines.forEach((el) => {
        gsap.killTweensOf(el);
      });
    };
  }, []);

  return (
    <div className='sneakers' ref={sneakersRef}>
      <img src={Sneaker} alt="Sneakers" />
    </div>
  );
}

export default Sneakers;