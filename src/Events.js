import moment from 'moment/moment';
import Event from './components/Event';
import Header from './components/Header';
import Footer from './components/Footer';
import Waterfront from './assets/Waterfront.jpeg';
import Horse from './assets/Horse.jpg';
import Group from './assets/Group.jpeg';
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
    <div className="bg-black ">
      <Header />
      <div className="pt-10 pb-20">
        <div className="w-full max-w-5xl px-6 mx-auto">
          <h2
            className="mb-20 text-3xl font-bold text-white lg:text-5xl"
            id="events"
          >
            See Us Live
          </h2>
          <div>
            <div className="grid grid-cols-3 mb-10 gap-x-3">
              <img src={Waterfront} alt="waterfront" />
              <img src={Group} alt="group" />
              <img src={Horse} alt="horse" />
            </div>

            <div className="divide-y">
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Events;
