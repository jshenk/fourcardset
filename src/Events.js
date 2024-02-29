import moment from 'moment/moment';
import Event from './components/Event';
import Header from './components/Header';
import Footer from './components/Footer';

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
    date: '2024-03-16T21:00:00',
    link: 'https://maps.app.goo.gl/9mGREGDpzSeVmv1G7',
    id: 2,
  },
  {
    name: 'Waterfront Hotel',
    location: 'Balitmore, MD',
    date: '2024-04-06T21:00:00',
    link: 'https://maps.app.goo.gl/4P2Bvgi5fREt5PSE8',
    id: 3,
  },
  {
    name: 'The Horse You Came In On Saloon',
    location: 'Balitmore, MD',
    date: '2024-04-20T21:00:00',
    link: 'https://maps.app.goo.gl/9mGREGDpzSeVmv1G7',
    id: 4,
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
      <div className="h-screen pt-10">
        <div className="w-full max-w-5xl mx-auto mb-10 lg:w-1/2 lg:mb-0">
          <h2
            className="mb-10 text-3xl font-bold tracking-tight text-white"
            id="events"
          >
            See Us Live
          </h2>
          <div>
            <div className="divide-y rounded-lg bg-stone-500">
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
