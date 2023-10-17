const cards = [
  {
    name: 'Waterfront Hotel',
    location: 'Balitmore, MD',
    description: 'October 21 @ 9:00 pm - 1:00 am',
    id: 1,
  },
  {
    name: 'Waterfront Hotel',
    location: 'Balitmore, MD',
    description: 'November 11 @ 9:00 pm - 1:00 am',
    id: 2,
  },
  {
    name: 'The Horse You Came In On Saloon',
    location: 'Balitmore, MD',
    description: 'November 18 @ 10:00 pm - 1:00 am',
    id: 3,
  },
  {
    name: 'The Horse You Came In On Saloon',
    location: 'Balitmore, MD',
    description: 'December 9 @ 10:00 pm - 1:00 am',
    id: 4,
  },
];

const Events = () => {
  return (
    <div className="divide-y rounded bg-stone-500">
      {cards.map((card) => (
        <div key={card.id} className="flex p-6">
          <div className="w-full text-base leading-7">
            <div className="items-center justify-between lg:flex">
              <h3 className="font-bold text-white">{card.name}</h3>
              <div className="text-xs text-white uppercase">
                {card.location}
              </div>
            </div>

            <p className="mt-2 text-gray-300">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Events;
