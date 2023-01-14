import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { FiMenu } from "react-icons/fi";
import { BsFillCircleFill } from "react-icons/bs";

import Home from "../pages/Home";
import Price from "../pages/Price";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";

export default function Header() {
  const navbarItems = [
    {
      id: "home",
      name: "HOME",
      path: "/home",
      element: Home
    },
    {
      id: "price",
      name: "PREISE",
      path: "/price",
      element: Price
    },
    {
      id: "gallery",
      name: "GALERIE",
      path: "/gallery",
      element: Gallery
    },
    {
      id: "contact",
      name: "KONTAKT",
      path: "/contact",
      element: Contact
    }
  ]

  return (
    <Router>
      <nav className="navbar fixed top-0 left-0 flex w-screen px-4 my-4">
        <Link to={"/"} className="navbar-logo flex items-center justify-between">
          SCHNITT <BsFillCircleFill className="ml-2" color="red" />
        </Link>
        <button className="navbar-toggler flex sm:hidden items-center justify-center p-2 ml-auto">
          <FiMenu size={20} />
        </button>
        <ul className="navbar-items hidden sm:flex items-center justify-center ml-auto">
          {navbarItems.map((navbarItem) => {
            return (
              <li className="p-2 mx-2">
                <Link to={navbarItem.path}>{navbarItem.name}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <Routes>
        { navbarItems.map((navbarItem) => {
          const Element = navbarItem.element;
          return (
            <Route path={navbarItem.path} element={ <Element /> }></Route>
          )
        }) }
      </Routes>
    </Router>
  );
}
