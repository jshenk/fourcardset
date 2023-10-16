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
      <div>
        <video
          width="320"
          height="240"
          playsInline
          autoPlay
          muted
          loop
          className="object-cover w-3/5 h-screen overflow-hidden"
        >
          <source src={BannerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute left-2/3 top-1/4  z-10 w-[300px]">
          <img src={BandLogo} height="400px" width="400px" className="mb-16" />
          <a
            className="flex items-center justify-between mb-6 text-xl text-white rounded-lg bg-white/10 hover:bg-stone-500"
            href="#contact"
          >
            <span className="p-6">Book Us</span>
            <span className="p-6 border-l">&#8594;</span>
          </a>
          <a
            className="flex items-center justify-between text-xl text-white rounded-lg bg-white/10 hover:bg-stone-500"
            href="#events"
          >
            <span className="p-6">See Us Live</span>
            <span className="p-6 border-l">&#8594;</span>
          </a>
        </div>
      </div>

      <div className="flex max-w-5xl py-20 mx-auto">
        <div className="w-2/3">
          <h2
            className="mb-10 text-3xl font-bold tracking-tight text-white"
            id="events"
          >
            See Us Live
          </h2>
          <div className="max-w-xl">
            <Events />
          </div>
        </div>
        <div className="w-1/3">
          <img
            src={Horse}
            height="400px"
            width="400px"
            className="object-cover mb-8"
          />
          <img
            src={Waterfront}
            height="400px"
            width="400px"
            className="object-cover"
          />
        </div>
      </div>
      <div className="max-w-5xl py-20 mx-auto border-t">
        <h2
          className="text-3xl font-bold tracking-tight text-white"
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
