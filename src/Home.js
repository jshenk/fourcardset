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
            className="object-cover object-top w-full lg:h-screen h-[500px] lg:absolute lg:bottom-0 lg:left-0"
          />
        </div>
        <div className="absolute top-0 left-0 right-0 pb-40 bg-gradient-to-b from-black">
          <Header size="large" />
        </div>
      </div>
      <div className="text-lg text-white bg-black">
        <div className="flex flex-wrap justify-center max-w-2xl px-6 pt-0 pb-6 mx-auto text-center lg:max-w-4xl lg:py-12 lg:text-justify">
          <h1 className="mb-12 font-mono text-4xl tracking-widest text-center uppercase lg:text-8xl">
            FourCardSet
          </h1>
          <p className="mb-6">
            Formed by four work friends, the Indie/Alternative rock band has
            quickly ascended in the Maryland music scene. Fourcardset is lead by
            pianist/vocalist Ben Lucier, and accompanied by guitarist Joe
            Consoli, bassist Cody Tilson, and drummer Austin Freilich. With
            roots in various genres of music, the group brings a dynamic,
            multifaceted sound to their audience.
          </p>
          <p className="mb-12">
            In their debut EP - Overtime, fourcardset focuses in on a diverse
            but cohesive sound that is “true to themselves” and highlights each
            individuals musical background and interests. Written by Ben, the
            self produced EP explores themes of past lives, childhood, and
            navigating through time.
          </p>
          <a
            className="px-3 py-2 mr-6 font-bold uppercase transition-colors duration-500 border-2 md:mr-12 border-amber-500 hover:text-amber-500"
            href="/events"
            rel="noreferrer"
          >
            See Us Live
          </a>
          <a
            className="px-3 py-2 font-bold uppercase transition-colors duration-500 border-2 border-amber-500 hover:text-amber-500"
            href="/contact"
            rel="noreferrer"
          >
            Book Us
          </a>
        </div>
      </div>
      <div className="bg-black ">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
