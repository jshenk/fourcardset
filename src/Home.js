import './App.css';

import BannerVideo from './assets/BannerVideo.webm';
import BandCover from './assets/BandCover.jpg';
import BannerVideoMP4 from './assets/BannerVideoMP4.mp4';
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
            className="lg:absolute lg:bottom-0 lg:left-0 object-cover w-full max-md:h-[700px] object-bottom"
          />
        </div>
        <div className="absolute top-0 left-0 right-0 pb-40 bg-gradient-to-b from-black">
          <Header size="large" />
        </div>
      </div>
      <div className="bottom-0 left-0 right-0 bg-black lg:absolute">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
