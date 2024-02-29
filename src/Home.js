import './App.css';

import BannerVideo from './assets/BannerVideo.webm';
import BannerVideoMP4 from './assets/BannerVideoMP4.mp4';
import Footer from './components/Footer';
import Header from './components/Header';

const Home = () => {
  return (
    <div className="bg-black">
      <div className="relative">
        <video
          width="320"
          height="240"
          playsInline
          autoPlay
          muted
          loop
          className="object-cover w-full overflow-hidden h-[400px] lg:h-screen"
        >
          <source src={BannerVideo} type="video/webm" />
          <source src={BannerVideoMP4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 right-0">
          <Header size="large" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
