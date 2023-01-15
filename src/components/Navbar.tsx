import React, { useEffect, useState } from "react";

import { 
  Link,
  useLocation
} from "react-router-dom";

import { BsFillCircleFill } from "react-icons/bs";
import {
  AiOutlineMenu,
  AiOutlineClose
} from "react-icons/ai";

import { navbarItems } from "../data/NavbarItems";

export default function Navbar() {
  let location = useLocation();
  useEffect(() => {
  }, [location])

  const [toggleNav, setToggleNav] = useState(false);
  function toggleNavbar() {
    setToggleNav(!toggleNav);
  }

  return (
    <nav className="navbar fixed top-0 left-0 flex w-screen p-4 text-white">
      <Link to={""} className="navbar-logo flex items-center justify-between">
        SCHNITT <BsFillCircleFill className="ml-2" color="red" />
      </Link>
      <button className="navbar-toggler flex sm:hidden items-center justify-center p-2 ml-auto" onClick={toggleNavbar}>
        {!toggleNav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </button>
      <ul className="navbar-items hidden sm:flex items-center justify-center ml-auto">
        {navbarItems.map((navbarItem) => {
          return (
            <li 
              key={navbarItem.id} 
              className={`p-2 mx-2 ${(location.pathname === navbarItem.path) ? "font-bold underline" : ""}`}>
              <Link to={navbarItem.path}>{navbarItem.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}
