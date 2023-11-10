"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [backgroundWhite, setBackgroundWhite] = useState(false);

  const handleWindowScroll = () => {
    const height = window.scrollY;
    const tresholdHeight = 50;

    if (height > tresholdHeight) {
      setBackgroundWhite(true);
    } else {
      setBackgroundWhite(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);

    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  useEffect(() => {
    setBackgroundWhite(dropdownOpen);
  }, [dropdownOpen]);

  const cx = [
    "fixed",
    "w-full",
    "transition-all",
    "duration-700",
    "z-10",
    "py-2",
    "dark:text-white",
    backgroundWhite
      ? "bg-background-ext-100 backdrop-opacity-20 shadow-lg drop-shadow-lg !py-2"
      : "bg-transparent",
  ].join(" ");
  return (
    <nav className={cx}>
      <div className="items-centers container top-0 mx-auto flex justify-between px-8">
        <div className="flex w-full items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold dark:text-white">
              adityahimaone
              <span className="text-primary-ext-500">.</span>
            </h1>
          </div>
          <div className="hidden gap-8 md:flex">
            <ul
              className={`flex flex-col space-x-0 text-lg font-semibold md:flex-row md:space-x-8`}
            >
              <li className="w-full">
                <button className="block py-2 hover:text-accentMiddle">
                  <span className="font-semibold">About</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="items-center md:px-2 hidden">P</div>
        <div className="text-2xl md:hidden">
          <Hamburger
            size={25}
            toggled={dropdownOpen}
            toggle={setDropdownOpen}
          />
          {/* Menu dropdown */}
          <div
            className={[
              "duration-400 absolute left-0 top-full right-0 text-base transition-all",
              dropdownOpen ? "visible opacity-100" : "invisible opacity-0",
            ].join(" ")}
          >
            <div
              className="left-0 h-screen bg-black bg-opacity-30"
              // onClick={handleBlackScreenClick}
            >
              <div className="z-20 bg-background-ext-100 py-6 px-10 shadow-xl dark:bg-accentDarkMiddle">
                <div className="mb-4">
                  <ul
                    className={`flex flex-col space-x-0 text-lg font-semibold md:flex-row md:space-x-8`}
                  >
                    <li className="w-full">
                      <button className="block py-2 hover:text-accentMiddle">
                        <span className="font-semibold">About</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
