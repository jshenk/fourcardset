import './App.css';

import BandCover from './assets/BandCover.jpeg';
import Footer from './components/Footer';
import Header from './components/Header';

const Home = () => {
  return (
    <div className="h-screen bg-black">
      <div className="relative">
        <div className="lg:overflow-hidden lg:h-screen">
          <img
            src={BandCover}
            alt="homepage banner"
            className="object-cover object-top w-full h-[400px] md:h-screen lg:absolute lg:bottom-0 lg:left-0"
          />
        </div>
        <div className="absolute top-0 left-0 right-0 pb-40 bg-gradient-to-b from-black">
          <Header size="large" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black md:static">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
