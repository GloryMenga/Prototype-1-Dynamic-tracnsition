import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import gsap from 'gsap';

function Nav({ parallaxRef }) {
    const menuItemsRef = useRef([]);

    useEffect(() => {
        menuItemsRef.current.forEach((item) => {
            const magneticEffect = (e) => {
                const rect = item.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                gsap.to(item, {
                    duration: 0.3,
                    x: x * 0.5, 
                    y: y * 0.5,
                    ease: 'power2.out'
                });
            };

            const resetEffect = () => {
                gsap.to(item, {
                    duration: 0.6,
                    x: 0,
                    y: 0,
                    ease: 'power2.out'
                });
            };

            item.addEventListener('mousemove', magneticEffect);
            item.addEventListener('mouseleave', resetEffect);

            return () => {
                item.removeEventListener('mousemove', magneticEffect);
                item.removeEventListener('mouseleave', resetEffect);
            };
        });
    }, []);


    const handleScroll = (className) => {
        if (parallaxRef.current) {
            const section = document.querySelector(`.${className}`);
            if (section) {
                const offset = section.getAttribute('data-offset');
                if (offset) {
                    parallaxRef.current.scrollTo(parseFloat(offset));
                }
            }
        }
    };

    return (
        <div className="nav">
            <div className="end">
                <h2>
                    <Typewriter
                    options={{
                        autoStart: true,
                        loop: true, 
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('END') 
                            .pauseFor(1000) 
                            .deleteAll() 
                            .typeString('Going back?') 
                            .pauseFor(2000) 
                            .start(); 
                        }}
                    />
                </h2>
            </div>
            <div className="menus">
                <li ref={(el) => (menuItemsRef.current[0] = el)} onClick={() => handleScroll('intro')}><a href="#">Home</a></li>
                <li ref={(el) => (menuItemsRef.current[1] = el)} onClick={() => handleScroll('One')}><a href="#">1800s</a></li>
                <li ref={(el) => (menuItemsRef.current[2] = el)} onClick={() => handleScroll('Two')}><a href="#">1917-1924</a></li>
                <li ref={(el) => (menuItemsRef.current[3] = el)} onClick={() => handleScroll('Three')}><a href="#">1960-1985</a></li>
                <li ref={(el) => (menuItemsRef.current[4] = el)} onClick={() => handleScroll('Four')}><a href="#">2010s</a></li>
            </div>
        </div>
    );
}

export default Nav;
