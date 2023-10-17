import './App.css';

import BannerVideo from './assets/BannerVideo.webm';
import BandLogo from './assets/BandLogo.png';
import Horse from './assets/Horse.jpg';
import Waterfront from './assets/Waterfront.jpeg';
import { ContactForm } from './components/ContactForm';
import Events from './Events';

const Home = () => {
  return (
    <div className="bg-gray-900">
      <div className="relative">
        <video
          width="320"
          height="240"
          playsInline
          autoPlay
          muted
          loop
          className="object-cover w-full overflow-hidden h-[400px] lg:h-screen lg:w-3/5"
        >
          <source src={BannerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="lg:absolute lg:left-2/3 lg:top-1/4 z-10 lg:w-[300px] px-5 py-10 lg:p-0">
          <img
            src={BandLogo}
            height="400px"
            width="400px"
            className="absolute max-w-[200px] mx-auto lg:max-w-[300px] mb-16 lg:w-auto left-0 right-0 top-24 lg:static lg:top-auto lg:left-auto"
            alt="homepage banner"
          />
          <a
            className="flex items-center justify-between mb-6 text-xl text-white rounded-lg bg-stone-500 hover:bg-white/10"
            href="#contact"
          >
            <span className="p-4 text-base lg:p-6">Contact Us</span>
            <span className="p-4 border-l lg:p-6">&#8594;</span>
          </a>
          <a
            className="flex items-center justify-between text-xl text-white rounded-lg bg-white/10 hover:bg-stone-500"
            href="#events"
          >
            <span className="p-4 text-base lg:p-6">See Us Live</span>
            <span className="p-4 border-l lg:p-6">&#8594;</span>
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between max-w-5xl px-5 py-10 mx-auto lg:flex-row lg:py-20 lg:px-0">
        <div className="w-full mb-10 lg:w-1/2 lg:mb-0">
          <h2
            className="mb-10 text-3xl font-bold tracking-tight text-white"
            id="events"
          >
            See Us Live
          </h2>
          <div>
            <Events />
          </div>
        </div>
        <div>
          <div className="lg:w-[400px] lg:h-[400px] lg:overflow-hidden mb-10">
            <img
              src={Horse}
              height="400px"
              width="400px"
              className="w-auto h-full"
              alt="horse you came in on"
            />
          </div>
          <div className="lg:w-[400px] lg:h-[400px] lg:overflow-hidden">
            <img
              src={Waterfront}
              height="400px"
              width="400px"
              className="w-auto h-full"
              alt="waterfront hotel"
            />
          </div>
        </div>
      </div>
      <div className="max-w-5xl px-5 pt-10 mx-auto border-t lg:py-20 lg:px-0">
        <h2
          className="mb-5 text-3xl font-bold tracking-tight text-white lg:mb-0"
          id="contact"
        >
          Contact Us
        </h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
