export default function Event({ link, name, location, date }) {
  return (
    <div className="flex py-6">
      <div className="w-full text-base leading-7">
        <div className="items-center justify-between lg:flex">
          <h3 className="font-bold text-white">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              {name}
            </a>
          </h3>
          <div className="text-xs text-white uppercase">{location}</div>
        </div>

        <p className="mt-2 text-gray-300">{date}</p>
      </div>
    </div>
  );
}
