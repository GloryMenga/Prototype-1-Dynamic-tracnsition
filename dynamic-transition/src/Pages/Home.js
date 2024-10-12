import Top from '../assets/Title-Page.svg';
import Aj1 from '../assets/AJ1.png';
import Plimsoll from '../assets/pimsolls.png';
import Convers from '../assets/Convers.png';
import Dassler from '../assets/Dassler.png';

function Home() {

  return (
    <>
        <section className='intro'>
            <div className='background-first-shoe'>
                <h1>AIR JORDAN 1</h1>
            </div>
            <div className='cover'>
                <div className='top'>
                    <img src={Top} alt="title"/>
                </div>
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
    </>
  );
}

export default Home;
