import Top from '../assets/Title-Page.svg';
import Aj1 from '../assets/AJ1.png';
import Plimsoll from '../assets/pimsolls.png';

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
    </>
  );
}

export default Home;
