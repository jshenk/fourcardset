import './App.css';

import AlbumTree from './assets/RunawayCover.png';
import Footer from './components/Footer';
import Header from './components/Header';

const Home = () => {
  return (
    <div className="h-screen bg-black">
      <div className="relative">
        <div className="lg:overflow-hidden lg:h-screen ">
          <img
            src={AlbumTree}
            alt="homepage banner"
            className="object-cover object-top w-full lg:h-screen h-[500px] lg:absolute lg:bottom-0 lg:left-0"
          />
          <div className="absolute left-0 right-0 z-10 flex flex-col items-center w-full top-1/2">
            <p className="mb-2 text-white uppercase">New EP</p>
            <h2 className="mb-12 font-serif text-3xl font-bold text-white lg:text-7xl">
              Overtime
            </h2>
            <a
              className="px-6 py-3 font-bold text-white uppercase transition-colors duration-500 border-2 border-amber-500 hover:text-amber-500"
              href="https://open.spotify.com/track/6ebUBlzWWZsGetQy0sSZWO?si=8b9d97e9440a4d51"
            >
              Stream Now
            </a>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 pb-40 bg-gradient-to-b from-black">
          <Header size="large" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-black"></div>
      </div>

      <div className="text-lg text-white bg-black">
        <div className="flex flex-wrap justify-center max-w-2xl px-6 pt-3 pb-6 mx-auto text-center lg:max-w-2xl lg:py-12 lg:text-justify">
          <h1 className="mb-6 text-4xl text-center uppercase lg:text-6xl logo-font">
            Fourcardset
          </h1>

          <p className="mb-6">
            Formed by four work friends, the Indie/Alternative rock band has
            quickly ascended in the Maryland music scene. Fourcardset is lead by
            multi-instrumentalist/vocalist Ben Lucier, Joe
            Consoli, bassist Cody Tilson, and drummer Austin Freilich. With
            roots in various genres of music, the group brings a dynamic,
            multifaceted sound to their audience.
          </p>
          <p className="mb-12">
            Serving as the high-energy follow-up to their debut EP, 
            <a href="https://open.spotify.com/album/5kIGwHeDIbj05s3yCsabLe?si=nnlu1c9_TsS_jkAAVNhdLg">Overtime</a>
            , fourcardset’s latest single "Runaway" dives headfirst into the 
            beautiful chaos of falling in love. Built on a foundation of infectious 
            musical motifs and undeniable hooks, the track delivers a pulse-driven 
            experience that mirrors the exact, heart-pounding rush of letting your 
            guard down for someone new. It's an anthem about vulnerability, 
            unexpected change, and the thrill of letting love completely shift your world.
            
          </p>
          <a
            className="px-4 py-2 mr-6 text-black uppercase transition-colors duration-500 bg-white md:mr-12 hover:bg-amber-500 hover:text-white"
            href="/events"
            rel="noreferrer"
          >
            See Us Live
          </a>
          <a
            className="px-4 py-2 text-black uppercase transition-colors duration-500 bg-white hover:bg-amber-500 hover:text-white"
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
