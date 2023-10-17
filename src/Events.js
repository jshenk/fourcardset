import moment from 'moment/moment';

const cards = [
  {
    name: 'Waterfront Hotel',
    location: 'Balitmore, MD',
    date: '2023-10-21T21:30:00',
    link: 'https://maps.app.goo.gl/6MwuwqL5zuxxDgAx7',
    id: 1,
  },
  {
    name: 'Waterfront Hotel',
    location: 'Balitmore, MD',
    date: '2023-11-11T21:30:00',
    link: 'https://maps.app.goo.gl/6MwuwqL5zuxxDgAx7',
    id: 2,
  },
  {
    name: 'The Horse You Came In On Saloon',
    location: 'Balitmore, MD',
    date: '2023-11-18T21:30:00',
    link: 'https://maps.app.goo.gl/9mGREGDpzSeVmv1G7',
    id: 3,
  },
  {
    name: 'The Horse You Came In On Saloon',
    location: 'Balitmore, MD',
    date: '2023-12-09T21:30:00',
    link: 'https://maps.app.goo.gl/9mGREGDpzSeVmv1G7',
    id: 4,
  },
  {
    name: 'test old show',
    location: 'Balitmore, MD',
    date: '2023-10-16T21:00:00',
    link: 'https://maps.app.goo.gl/6MwuwqL5zuxxDgAx7',
    id: 5,
  },
  {
    name: 'The Horse You Came In On Saloon',
    location: 'Balitmore, MD',
    date: '2024-02-24T21:00:00',
    link: 'https://maps.app.goo.gl/9mGREGDpzSeVmv1G7',
    id: 6,
  },
  {
    name: 'The Horse You Came In On Saloon',
    location: 'Balitmore, MD',
    date: '2024-04-20T21:00:00',
    link: 'https://maps.app.goo.gl/9mGREGDpzSeVmv1G7',
    id: 6,
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
    <div className="divide-y rounded-lg bg-stone-500">
      {filteredData.map((card) => {
        const momentDate = moment(card.date);
        const formattedDate = momentDate.format('MMMM Do @ h:mma');

        return (
          <div key={card.id} className="flex p-6">
            <div className="w-full text-base leading-7">
              <div className="items-center justify-between lg:flex">
                <h3 className="font-bold text-white">
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {card.name}
                  </a>
                </h3>
                <div className="text-xs text-white uppercase">
                  {card.location}
                </div>
              </div>

              <p className="mt-2 text-gray-300">{formattedDate}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Events;
