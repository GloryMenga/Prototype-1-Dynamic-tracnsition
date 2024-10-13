import Aj1 from '../assets/AJ1.png';
import Plimsoll from '../assets/pimsolls.png';
import Convers from '../assets/Convers.png';
import Dassler from '../assets/Dassler.png';
import Waffle from '../assets/waffle.png';
import Jordan from '../assets/jordans.png';
import Nocta from '../assets/Nocta.png';
import Plimsollshoe from '../components/Plimsollshoe.js';
import Title  from '../components/Title.js';
import Sneakers from '../components/Sneakers.js';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';


function Home() {

  return (
    <>
        <Parallax pages={5} style={{ top: '0', left: '0' }}>
            <section className='intro'>
                <ParallaxLayer offset={0.4} speed={0.2} className='background-first-shoe'>
                    <h1>AIR JORDAN 1</h1>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.8}>
                    <Sneakers />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.3}>
                    <Title />
                </ParallaxLayer>
                <ParallaxLayer offset={0.3} speed={0.6}>
                    <img src={Aj1} alt="Air jordan 1" className='aj1'/>
                </ParallaxLayer>   
            </section>
            <ParallaxLayer offset={1} speed={0.9}>
                <section className='One'>
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
                        whileHover={{ scale: 1.4, rotate: 360, transition: { duration: 0.6 }}}
                        
                    />
                    <p>The first "sneaker" originated from the Plimsoll shoe, introduced by the Liverpool Rubber Company. These rubber-soled shoes had a canvas upper and were primarily used for sports and leisure. They were called "plimsolls" because of the horizontal line on the sole, which resembled the Plimsoll line on a ship’s hull.</p>
                    </div>
                </section>
            </ParallaxLayer>
            <ParallaxLayer offset={0.98} speed={0.5} className='plimsvg'>
                <Plimsollshoe />
            </ParallaxLayer>
            {/* <section className='intro'>
                <div className='background-first-shoe'>
                    <h1>AIR JORDAN 1</h1>
                </div>
                <Sneakers />
                <div className='cover'>
                    
                    <img src={Aj1} alt="Air jordan 1" className='aj1'/>
                    <div>See More</div>
                </div>
                
            </section>
            <section className='One'>
                <div className='first-shoe'>
                    <h2>1800s</h2>
                    <img src={Plimsoll} alt="plimsoll" className='plimsoll'/>
                    <p>The first "sneaker" originated from the Plimsoll shoe, introduced by the Liverpool Rubber Company. These rubber-soled shoes had a canvas upper and were primarily used for sports and leisure. They were called "plimsolls" because of the horizontal line on the sole, which resembled the Plimsoll line on a ship’s hull.</p>
                </div>
            </section>
            <section className='Two'>
                <div className='convers'>
                    <h2>1917</h2>
                    <img src={Convers} alt="convers" className='convers-img'/>
                    <p>The first basketball shoe, the Converse All-Star, was introduced in 1917. It became widely popular in the 1920s when Chuck Taylor, a basketball player, endorsed it. This shoe marked the beginning of sneakers as both functional and fashionable footwear.</p>
                </div>
                <div className='dassler'>
                    <h2>1924</h2> 
                    <img src={Dassler} alt="dassler" className='dassler-img'/>       
                    <p>In Germany, Adolf "Adi" Dassler founded the company that would become Adidas. His goal was to create high-performance athletic shoes, and in 1928, athletes wore Dassler shoes in the Olympics. The brand later became globally recognized for its innovative designs.</p>
                </div>
            </section>
            <section className='Three'>
                <div className='nike'>
                <div className='txt'>
                    <h2>1960s</h2>
                    <h3>Nike (Blue Ribbon Sports)</h3>
                    <p>Originally founded as Blue Ribbon Sports in 1964, Nike rebranded in 1971. Nike's introduction of the waffle sole in 1974 revolutionized running shoes, with its lightweight design and improved traction. The "swoosh" logo and the "Just Do It" campaign helped establish Nike as a global icon in sneaker culture.</p>
                </div>
                <div className='nike-shoe-img'>
                    <img src={Waffle} alt="Waffle nike"/>
                </div>
                </div>
                <div className='jordan'>
                <div className='jordan-shoe-img'>
                    <img src={Jordan} alt="Waffle nike"/>
                </div> 
                <div className='txt'>
                    <h2>1985</h2>
                    <h3>Air jordan 1</h3>
                    <p>The launch of the Air Jordan 1 in 1985, endorsed by Michael Jordan, changed the sneaker world. It blurred the line between performance sportswear and street fashion. The Air Jordan line remains one of the most influential sneaker collections to date.</p>
                </div>
                </div>
            </section>
            <section className='Four'>
                <div className='last-shoe'>
                    <h2>2010s</h2>
                    <img src={Nocta} alt="Nocta hot step 2" className='sneaker'/>
                    <p>By the 2010s, sneaker culture exploded globally, fueled by collaborations between brands, designers, and artists. The rise of sneaker resale platforms, where limited-edition shoes could sell for thousands, turned sneakers into highly sought-after collectibles.</p>
                </div>
            </section> */}
        </Parallax>
    </>
  );
}

export default Home;
