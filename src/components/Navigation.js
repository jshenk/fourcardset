import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <ul className="w-full mt-10 space-y-10 text-2xl leading-6 text-center text-white uppercase lg:space-y-0 lg:flex md:text-sm lg:text-lg gap-x-6 lg:mt-0">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-amber-500'
                : 'hover:text-amber-500 transition-colors duration-500'
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive
                ? 'text-amber-500'
                : 'hover:text-amber-500 transition-colors duration-500'
            }
          >
            Shows
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-amber-500'
                : 'hover:text-amber-500 transition-colors duration-500'
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
