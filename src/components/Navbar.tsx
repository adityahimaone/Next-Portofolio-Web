import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="fixed w-full z-10 py-3">
      <div className="container mx-auto px-3">
        <div className="flex justify-between items-center">
          <div>
            <span className="font-heading">
              karinaayoo
              <span className="dark:text-primary-500">.</span>
            </span>
          </div>
          <div className="">
            <Link href="/">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
