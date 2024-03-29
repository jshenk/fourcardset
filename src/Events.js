import moment from 'moment/moment';
import Event from './components/Event';
import Header from './components/Header';
import Footer from './components/Footer';
import Waterfront from './assets/Waterfront.jpeg';
import Horse from './assets/Horse.jpg';
import Group from './assets/Group.jpeg';

const cards = [
  {
    name: "The Admiral's Cup",
    location: 'Balitmore, MD',
    date: '2024-03-09T21:00:00',
    link: 'https://maps.app.goo.gl/JbbBvqS28mbnxdDf9',
    id: 1,
  },
  {
    name: 'The Horse You Came In On Saloon',
    location: 'Balitmore, MD',
    date: '2024-03-16T17:00:00',
    link: 'https://maps.app.goo.gl/9mGREGDpzSeVmv1G7',
    id: 2,
  },
  {
    name: 'Waterfront Hotel',
    location: 'Balitmore, MD',
    date: '2024-04-06T21:30:00',
    link: 'https://maps.app.goo.gl/4P2Bvgi5fREt5PSE8',
    id: 3,
  },
  {
    name: 'The Horse You Came In On Saloon',
    location: 'Balitmore, MD',
    date: '2024-04-20T21:30:00',
    link: 'https://maps.app.goo.gl/9mGREGDpzSeVmv1G7',
    id: 4,
  },
  {
    name: 'Waterfront Hotel',
    location: 'Balitmore, MD',
    date: '2024-05-04T21:30:00',
    link: 'https://maps.app.goo.gl/4P2Bvgi5fREt5PSE8',
    id: 5,
  },
  {
    name: 'OLAR Chili Cookoff',
    location: 'Balitmore, MD',
    date: '2024-05-19T12:00:00',
    link: 'https://www.olarbmore.com/',
    id: 6,
  },
  {
    name: 'Waterfront Hotel',
    location: 'Balitmore, MD',
    date: '2024-07-27T21:30:00',
    link: 'https://maps.app.goo.gl/4P2Bvgi5fREt5PSE8',
    id: 7,
  },
  {
    name: 'Waterfront Hotel',
    location: 'Balitmore, MD',
    date: '2024-08-10T21:30:00',
    link: 'https://maps.app.goo.gl/4P2Bvgi5fREt5PSE8',
    id: 8,
  },
  {
    name: 'Waterfront Hotel',
    location: 'Balitmore, MD',
    date: '2024-10-25T21:30:00',
    link: 'https://maps.app.goo.gl/4P2Bvgi5fREt5PSE8',
    id: 9,
  },
];

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
            className="mb-20 text-3xl font-bold tracking-tight text-white lg:text-5xl"
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
