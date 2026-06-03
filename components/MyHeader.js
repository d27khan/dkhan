import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiLightBulb } from "react-icons/tfi";
const MyHeader = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="bg-stone-300 dark:bg-greytext relative flex flex-wrap items-center justify-between px-2 py-3 pb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-whitetext"
              href="#"
            >
              Daniel Khan
            </a>
            <button
              className="text-greytext cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <RxHamburgerMenu className="cursor-pointer text-md px-2 ml-4 font-black text-gray-900 dark:text-whitetext" />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-whitetext hover:opacity-75"
                  href="#About"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-whitetext opacity-75"></i>
                  <span className="ml-2">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-whitetext hover:opacity-75"
                  href="#Experience"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-whitetext opacity-75"></i>
                  <span className="ml-2">Experience</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-whitetext hover:opacity-75"
                  href="#Projects"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-whitetext opacity-75"></i>
                  <span className="ml-2">Projects</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-whitetext hover:opacity-75"
                  href="#Contact"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-whitetext opacity-75"></i>
                  <span className="ml-2">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MyHeader;
