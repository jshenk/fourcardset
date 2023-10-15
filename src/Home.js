import './App.css';

import BannerVideo from './assets/BannerVideo.webm';
import BandLogo from './assets/BandLogo.png';

const Home = () => {
  return (
    <div className="h-screen bg-gray-900">
      <video
        width="320"
        height="240"
        playsInline
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 object-cover w-3/5 h-screen"
      >
        <source src={BannerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute left-2/3 top-1/4  z-10 w-[300px]">
        <img src={BandLogo} height="400px" width="400px" className="mb-16" />
        <a
          className="flex items-center justify-between mb-6 text-xl text-white rounded-lg bg-white/10 hover:bg-white/20"
          href="/contact"
        >
          <span className="p-6">Book Us</span>
          <span className="p-6 border-l">&#8594;</span>
        </a>
        <a
          className="flex items-center justify-between text-xl text-white rounded-lg bg-white/10 hover:bg-white/20"
          href="/events"
        >
          <span className="p-6">See Us Live</span>
          <span className="p-6 border-l">&#8594;</span>
        </a>
      </div>
      <div className="absolute bottom-0 right-0 z-10 p-10">
        <a href="https://www.instagram.com/fourcardset/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-10 h-10 fill-white"
          >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Home;
