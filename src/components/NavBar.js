import { useState } from "react";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [active, setActive] = useState();
  return (
    <div className="px-3 sm:px-0 font-semibold ">
      <ul className="flex justify-around gap-1 m-1">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`${
              active === nav.title
                ? "text-black border-b-2 border-pink-400"
                : "text-gray-500"
            } cursor-pointer hover:bg-gray-100 w-1/4 text-center p-2`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={`/${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
