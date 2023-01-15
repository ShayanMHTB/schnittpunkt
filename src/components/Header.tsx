import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import App from "../App";
import Imprint from "../pages/Imprint";
import NotFound from "../pages/NotFound";

import { navbarItems } from "../data/NavbarItems";

import Navbar from "./Navbar";

export default function Header() {

  return (
    <Router>
      <Navbar />
      <Routes>
        { navbarItems.map((navbarItem) => {
          const Element = navbarItem.element;
          return (
            <Route key={navbarItem.id} path={navbarItem.path} element={ <Element /> }></Route>
          )
        }) }
        <Route path="/" element={ <App /> }></Route>
        <Route path="/imprint" element={ <Imprint /> }></Route>
        <Route path="/*" element={ <NotFound /> }></Route>
      </Routes>
    </Router>
  );
}
