export default function Event({
  link,
  name,
  location,
  date,
  tickets,
  description,
}) {
  return (
    <div className="flex py-6">
      <div className="w-full text-base leading-7">
        <div className="items-center justify-between lg:flex">
          <h3 className="font-bold text-white">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                {name}
              </a>
            ) : (
              name
            )}
          </h3>
          <div className="text-xs text-white uppercase">{location}</div>
        </div>

        <p className="mt-2 text-gray-300">{date}</p>
        {description && (
          <div
            className="mt-2 text-white"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        {tickets && (
          <a
            href={tickets}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-4 py-3 mt-4 text-xs font-semibold text-black uppercase rounded shadow-sm bg-zinc-200 hover:bg-zinc-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-200"
          >
            Get Tickets
          </a>
        )}
      </div>
    </div>
  );
}
