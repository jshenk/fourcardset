import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <nav>
        <ul className="flex flex-none min-w-full px-2 text-sm font-semibold leading-6 text-white uppercase  lg:text-xl gap-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'border-b-2 pb-1' : 'hover:border-b-2 pb-1'
              }
            >
              Home
            </NavLink>
          </li>
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
    </div>
  );
}
