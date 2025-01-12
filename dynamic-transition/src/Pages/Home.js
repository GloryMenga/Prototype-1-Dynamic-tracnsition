import React, { useRef } from 'react';
import Aj1 from '../assets/AJ1.png';
import Plimsoll from '../assets/pimsolls.png';
import Convers from '../assets/Convers.png';
import Dassler from '../assets/Dassler.png';
import Waffle from '../assets/waffle.png';
import Jordan from '../assets/jordans.png';
import Nocta from '../assets/Nocta.png';
import Plimsollsvg from '../assets/Plimsollsvg.svg';
import Conversicon from '../assets/Conversicon.svg';
import Jordanicon from '../assets/Jordanicon.svg';
import Jordan5 from '../assets/Jordan5.svg';
import Title  from '../components/Title.js';
import Sneakers from '../components/Sneakers.js';
import Nav from '../components/Nav.js';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade"; 
import Typewriter from 'typewriter-effect';
import Cursor from '../components/Cursor.js';


function Home() {

    const parallaxRef = useRef(null);
  return (
    <>
        <Cursor />
        <Parallax pages={4.8} style={{ top: '0', left: '0' }} ref={parallaxRef}>
            <section className='intro' data-offset="0">
                <ParallaxLayer offset={0.4} speed={0.2} className='background-first-shoe'>
                    <h1>AIR JORDAN 1</h1>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.8}>
                    <Sneakers />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.3}>
                    <Title />
                </ParallaxLayer>
                <ParallaxLayer offset={0.3} speed={0.5}>
                    <Fade bottom duration={1500}>
                        <img src={Aj1} alt="Air Jordan 1" className='aj1' />
                    </Fade>
                </ParallaxLayer>   
            </section>
            <ParallaxLayer offset={1} speed={0.9}>
                <section className='One' data-offset="0.9">
                    <div className='first-shoe'>
                    <h2>
                        <Typewriter
                        options={{
                            autoStart: true,
                            loop: true, 
                        }}
                        onInit={(typewriter) => {
                            typewriter
                              .typeString('1800s') 
                              .pauseFor(3000) 
                              .deleteAll() 
                              .typeString('Plimsoll by Liverpool Company') 
                              .pauseFor(4000) 
                              .start(); 
                          }}
                        />
                    </h2>
                    <motion.img 
                        src={Plimsoll} 
                        alt="plimsoll" 
                        className='plimsoll'
                        whileHover={{ scale: 1.4, transition: { duration: 0.2, type: "spring", stiffness: 500, damping: 12 }}}
                        
                    />
                    <ParallaxLayer speed={0.2} className='plimsoll-txt'>
                        <h1>PLIMSOLL</h1>
                    </ParallaxLayer> 
                    <p>The first "sneaker" originated from the Plimsoll shoe, introduced by the Liverpool Rubber Company. These rubber-soled shoes had a canvas upper and were primarily used for sports and leisure. They were called "plimsolls" because of the horizontal line on the sole, which resembled the Plimsoll line on a ship’s hull.</p>
                    </div>
                </section>
            </ParallaxLayer>
            <ParallaxLayer offset={0.98} speed={0.4} className='plimsvg'>
                <motion.img 
                    src={Plimsollsvg} 
                    alt="plimsoll" 
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                        duration: 1,
                        repeat: Infinity, 
                        ease: [0.42, 0, 0.58, 1], 
                        delay: 0.1
                    }}
                    className='plimsoll'
                />
            </ParallaxLayer>
            <ParallaxLayer offset={1.99} speed={0.9}>
                <section className='Two' data-offset="1.64">
                        <div className='convers'>
                            <h2>1917</h2>
                            <motion.img 
                            src={Convers} 
                            alt="convers" 
                            className='convers-img'
                            whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.4 }}}
                            />
                            <h3>Convers All star</h3>
                            <p>The first basketball shoe, the Converse All-Star, was introduced in 1917. It became widely popular in the 1920s when Chuck Taylor, a basketball player, endorsed it. This shoe marked the beginning of sneakers as both functional and fashionable footwear.</p>
                        </div>
                        <div className='dassler'>
                            <h2>
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true, 
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter
                                        .typeString('1924') 
                                        .pauseFor(3000) 
                                        .deleteAll() 
                                        .typeString('Dassler') 
                                        .pauseFor(4000) 
                                        .start(); 
                                    }}
                                />
                            </h2> 
                            <motion.img 
                                src={Dassler} 
                                alt="dassler" 
                                className='dassler-img'
                                whileHover={{ scale: 1.4, rotate: 360, transition: { duration: 0.4 }}}   
                            />     
                            <p>In Germany, Adolf "Adi" Dassler founded the company that would become Adidas. His goal was to create high-performance athletic shoes, and in 1928, athletes wore Dassler shoes in the Olympics. The brand later became globally recognized for its innovative designs.</p>
                        </div>
                </section>
            </ParallaxLayer>
            <ParallaxLayer offset={1.5} speed={0.7}>
                <motion.img 
                    src={Conversicon} 
                    alt="Convers" 
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                        duration: 1.6,
                        repeat: Infinity, 
                        ease: [0.42, 0, 0.58, 1], 
                        delay: 0.2
                    }}
                    className='conversicon'
                />
            </ParallaxLayer>
            <ParallaxLayer offset={2.8} speed={0.9}>
                <section className='Three' data-offset="2.4">
                    <div className='nike'>
                    <div className='txt'>
                        <h2>1960s</h2>
                        <h3>Nike (Blue Ribbon Sports)</h3>
                        <p>Originally founded as Blue Ribbon Sports in 1964, Nike rebranded in 1971. Nike's introduction of the waffle sole in 1974 revolutionized running shoes, with its lightweight design and improved traction. The "swoosh" logo and the "Just Do It" campaign helped establish Nike as a global icon in sneaker culture.</p>
                    </div>
                    <div className='nike-shoe-img'>
                        <motion.img 
                            src={Waffle} 
                            alt="Waffle nike" 
                            whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.4 }}}   
                        />   
                    </div>
                    </div>
                    <div className='jordan'>
                    <div className='jordan-shoe-img'>
                        <motion.img 
                            src={Jordan} 
                            alt="Air jordan 1" 
                            whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.4 }}}   
                        />   
                    </div> 
                    <div className='txt'>
                        <h2>
                            <Typewriter
                            options={{
                                autoStart: true,
                                loop: true, 
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                .typeString('1985') 
                                .pauseFor(1000) 
                                .deleteAll() 
                                .typeString('Michael Jordan') 
                                .pauseFor(3000) 
                                .start(); 
                            }}
                            />
                        </h2>
                        <h3>Air jordan 1</h3>
                        <p>The launch of the Air Jordan 1 in 1985, endorsed by Michael Jordan, changed the sneaker world. It blurred the line between performance sportswear and street fashion. The Air Jordan line remains one of the most influential sneaker collections to date.</p>
                    </div>
                    </div>
                </section>
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={0.8} className='jordanicon'>
                <motion.img 
                    src={Jordanicon} 
                    alt="Jordan icon" 
                    animate={{ rotate: [0, 12, -12, 0] }}
                    transition={{
                        duration: 1.4,
                        repeat: Infinity, 
                        ease: [0.42, 0, 0.58, 1], 
                        delay: 0.4
                    }}
                />
            </ParallaxLayer>
            <ParallaxLayer offset={3.2} speed={0.9}>
                <section className='Four' data-offset="3.1">
                    <div className='last-shoe'>
                        <h2>2010s</h2>
                        <motion.img 
                            src={Nocta} 
                            alt="Nocta hot step 2" 
                            className='sneaker'
                            whileHover={{ scale: 1.3, transition: { duration: 0.2, type: "spring", stiffness: 500, damping: 12 }}}   
                        />  
                        <p>By the 2010s, sneaker culture exploded globally, fueled by collaborations between brands, designers, and artists. The rise of sneaker resale platforms, where limited-edition shoes could sell for thousands, turned sneakers into highly sought-after collectibles.</p>
                        <ParallaxLayer speed={0.3} className='nocta-txt'>
                            <h1>HOT STEP 2</h1>
                        </ParallaxLayer> 
                    </div>
                </section>
            </ParallaxLayer>
            <ParallaxLayer offset={2.9} speed={0.6} className='jordan5'>
            <motion.img 
                src={Jordan5} 
                alt="Jordan 5" 
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{
                    duration: 2,
                    repeat: Infinity, 
                    ease: [0.42, 0, 0.58, 1], 
                }}
                className='jordan5-svg'
            />
            </ParallaxLayer>
            <ParallaxLayer offset={3.99} speed={0.6}>
                <Nav parallaxRef={parallaxRef}/>
            </ParallaxLayer>
        </Parallax>
    </>
  );
}

export default Home;
