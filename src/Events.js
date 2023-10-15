import Menu from './Menu';

const cards = [
  {
    name: 'Waterfront Hotel',
    location: 'Balitmore, MD',
    description: 'October 21 @ 9:00 pm - 1:00 am',
  },
  {
    name: 'Waterfront Hotel',
    location: 'Balitmore, MD',
    description: 'November 11 @ 9:00 pm - 1:00 am',
  },
  {
    name: 'The Horse You Came In On Saloon',
    location: 'Balitmore, MD',
    description: 'November 18 @ 10:00 pm - 1:00 am',
  },
  {
    name: 'Christmas Show',
    location: 'Dulles, VA',
    description: 'December 2 @ 9:00 am',
  },
  {
    name: 'The Horse You Came In On Saloon',
    location: 'Balitmore, MD',
    description: 'December 9 @ 10:00 pm - 1:00 am',
  },
];

const Events = () => {
  return (
    <div className="bg-gray-900">
      <div className="relative pb-24 overflow-hidden bg-gray-900 isolate sm:pb-32">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 object-cover w-full h-full -z-10"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <Menu />
        <div className="px-6 pt-20 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Upcoming Shows
            </h2>
          </div>
        </div>
      </div>
      <div className="grid max-w-3xl grid-cols-1 gap-6 py-20 mx-auto">
        {cards.map((card) => (
          <div
            key={card.name}
            className="flex p-6 gap-x-4 rounded-xl bg-white/5 ring-1 ring-inset ring-white/10"
          >
            <div className="w-full text-base leading-7">
              <div className="flex items-center justify-between">
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
    </div>
  );
};
export default Events;
