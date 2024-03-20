import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <ul className="w-full mt-10 space-y-10 text-2xl font-semibold leading-6 text-center text-white uppercase lg:space-y-0 lg:flex md:text-sm lg:text-lg gap-x-6 lg:mt-0">
        <li>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive ? 'border-b-2 pb-1' : 'hover:border-b-2 pb-1'
            }
          >
            Events
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'border-b-2 pb-1' : 'hover:border-b-2 pb-1'
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
