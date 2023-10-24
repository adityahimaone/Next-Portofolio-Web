import React from "react";

type Props = {};

function SectionHero({}: Props) {
  return (
    <div className="max-h-screen h-screen relative bg-patten overflow-x-clip">
      <div className="h-[90%]">
        <div className="flex flex-row h-full">
          <div className="flex flex-col justify-start items-center h-full">
            <div className="text-lg font-heading font-bold">
              Hello, Im Aditya Himawan
              <span className="text-primary-500">.</span>
            </div>
            <div className="text-2xl font-heading font-bold">
              A Passionate Frontend Developer
            </div>
          </div>
        </div>
      </div>
      <div className="h-24 bg-accent-400 w-[200%] absolute bottom-0 -left-[50%] rotate-[4deg] shadow-lg">
        <ul className="flex justify-center font-bold items-center h-full space-x-5 dark:text-primary-50 font-body text-2xl">
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i} className="flex items-baseline">
              <span>Frontend Developer</span>
              <div className="h-5 w-5 ml-4 bg-primary-50 rounded-full"></div>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-24 bg-primary-500 w-[200%] absolute bottom-0 -left-[50%] rotate-[-3deg] shadow-xl">
        <ul className="flex justify-center font-bold items-center h-full space-x-5 dark:text-primary-50 font-body text-2xl">
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i} className="flex items-baseline">
              <span>Frontend Developer</span>
              <div className="h-5 w-5 ml-4 bg-primary-50 rounded-full"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SectionHero;
