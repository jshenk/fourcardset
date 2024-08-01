import moment from 'moment/moment';
import Event from './components/Event';
import Header from './components/Header';
import Footer from './components/Footer';
import Film from './assets/Film.jpg';
import GroupWaterfront from './assets/GroupWaterfront.jpg';
import Blockparty from './assets/Blockparty.jpg';
import GroupCouch from './assets/GroupCouch.jpg';
import Worthington from './assets/Worthington.jpg';
import { cards } from './data/events';

const Events = () => {
  // Get the current date
  const currentDate = new Date();

  // Filter out objects with a date field that is not in the past
  const filteredData = cards.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate >= currentDate;
  });

  return (
    <div className="bg-black">
      <div className="absolute top-0 left-0 right-0 z-10">
        <Header />
      </div>
      <img src={GroupWaterfront} alt="band" />
      <div className="pb-20 lg:pt-10">
        <div className="relative z-10 w-full max-w-7xl lg:px-12 px-6 py-6 mx-auto lg:rounded-md bg-orange-100/40 lg:-mt-[34rem]">
          <h2
            className="mb-10 font-mono text-3xl font-bold text-white lg:mt-5 lg:text-5xl"
            id="events"
          >
            See Us Live
          </h2>
          <div>
            <div className="grid grid-cols-2 mb-10 gap-x-3">
              <img src={Film} alt="waterfront" />
              <img src={GroupCouch} alt="group" />
            </div>

            <div className="max-w-3xl mx-auto my-10 divide-y">
              {filteredData.map((card) => {
                const momentDate = moment(card.date);
                const formattedDate = momentDate.format('MMMM Do @ h:mma');

                return (
                  <Event
                    link={card.link}
                    name={card.name}
                    location={card.location}
                    date={formattedDate}
                    tickets={card.tickets}
                    description={card.description}
                  />
                );
              })}
            </div>
            <div className="grid grid-cols-2 mb-10 gap-x-3">
              <div className="lg:h-[400px] h-[110px] overflow-hidden flex items-center">
                <img src={Blockparty} alt="waterfront" />
              </div>
              <div className="lg:h-[400px] h-[110px] overflow-hidden flex items-center">
                <img src={Worthington} alt="group" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Events;
