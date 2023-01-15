import Home from "../pages/Home";
import Price from "../pages/Price";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";

export const navbarItems = [
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
];
