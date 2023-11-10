"use client";

import SectionExperience from "@/components/SectionExperience";
import SectionHero from "@/components/SectionHero";
import Image from "next/image";
import Slider from "react-slick";
import {
  DiJqueryLogo,
  DiJsBadge,
  DiReact,
  DiCss3,
  DiSass,
  DiNodejsSmall,
  DiGit,
  DiNpm,
  DiGo,
} from "react-icons/di";
import { GoNorthStar } from "react-icons/go";
import { Player } from "@lottiefiles/react-lottie-player";
import Animation from "../../public/animations/animation-pages.json";
import Particles from "@/components/particles";

export default function Home() {
  const dataTechStack = [
    {
      id: 1,
      title: "React JS",
      icons: <DiReact />,
      color: "text-primary-ext-500",
      background: "bg-primary-ext-50",
    },
    {
      id: 2,
      title: "Javascript",
      icons: <DiJsBadge />,
      color: "text-primary-ext-500",
      background: "bg-primary-ext-50",
    },
    {
      id: 3,
      title: "jQuery",
      icons: <DiJqueryLogo />,
      color: "text-primary-ext-500",
      background: "bg-primary-ext-50",
    },
    {
      id: 4,
      title: "CSS 3",
      icons: <DiCss3 />,
      color: "text-primary-ext-500",
      background: "bg-primary-ext-50",
    },
    {
      id: 5,
      title: "SASS",
      icons: <DiSass />,
      color: "text-primary-ext-500",
      background: "bg-primary-ext-50",
    },
    {
      id: 6,
      title: "GIT",
      icons: <DiGit />,
      color: "text-primary-ext-500",
      background: "bg-primary-ext-50",
    },
    {
      id: 7,
      title: "Node JS",
      icons: <DiNodejsSmall />,
      color: "text-primary-ext-500",
      background: "bg-primary-ext-50",
    },
    {
      id: 8,
      title: "Go",
      icons: <DiGo />,
      color: "text-primary-ext-500",
      background: "bg-primary-ext-50",
    },
  ];

  const experienceData = [
    {
      id: 1,
      title: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
      subtitle: "Cloud Computing",
      desc: "-",
      time: "Feb 2021 - Jul 2021",
    },
    {
      id: 2,
      title: "Bootcamp Fullstack Engineering By Alterra Academy",
      subtitle: "Fullstack Engineering",
      desc: "Make BE RESTful API with Golang and FE APP with ReactJS, like app Calories Tracker & Hospital Management System",
      time: "Aug 2021 - Jan 2022",
    },
    {
      id: 3,
      title: "Bootcamp Frontend Developer By Binar Academy",
      subtitle: "Frontend Developer",
      desc: "Learning Frontend Stack using NodeJS EJS, ReactJS & NextJS, Make a FE APP Car Booking",
      time: "Feb 2022 - Jul 2022",
    },
    {
      id: 4,
      title: "Frontend Developer, PT Unzypsof (Contract)",
      subtitle: "Frontend Developer",
      desc: "Slicing from mockup to web page components, Responsible to fetching data from API and render in FE APP using ReactJS, NextJS and Typescript",
      time: "Jun 2022 - August 2022",
    },
    {
      id: 5,
      title: "Frontend SAAS Developer, PT Fatiha Sakti (Permanent)",
      subtitle: "Frontend SAAS Developer",
      desc: "-",
      time: "Oct 2022 - Present",
    },
  ];
  return (
    <>
      <section className="overflow-x-clip relative">
        {/* Ilustration */}
        <div className="absolute -top-28 -left-28 bg-primary-ext-100 aspect-square h-[250px] rounded-full  blur-3xl"></div>
        <div className="absolute -bottom-16 -right-16 transform bg-primary-ext-100 aspect-square h-[300px] rounded-full  blur-3xl"></div>
        <div className="absolute hidden bg-primary-ext-300 aspect-square h-[250px] opacity-20 -z-[9] rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container py-72">
          <div className="">
            <Particles
              className="absolute inset-0 pointer-events-none"
              quantity={50}
            />
            <div className="flex flex-col justify-center items-center h-full text-center z-10">
              <div className="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
                Turning Ideas Into Beautiful Web{" "}
                <span className="text-primary-ext-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                  <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
                    <li>Finance</li>
                    <li>Tech</li>
                    <li>AI</li>
                    <li>Crypto</li>
                    <li>Crypto</li>
                    <li aria-hidden="true">Finance</li>
                  </ul>
                </span>
              </div>
              <div className="mt-5 p-4 text-center">
                <div className="text-lg font-heading font-bold ">
                  Hello, Im{" "}
                  <span className="text-primary-ext-500">Wkwkwkwk</span>
                </div>
                <div className="text-md font-body font-bold">
                  A Passionate Frontend Developer
                </div>
              </div>
              <button
                type="button"
                className="rounded-md border px-2 py-1 border-primary-500"
              >
                <div className="text-sm font-body font-bold">Scroll Down</div>
              </button>
            </div>
          </div>
          <div className="inline-flex flex-nowrap overflow-hidden h-20 bg-accent-ext-400 w-[200%] absolute bottom-0 -left-[50%] rotate-[4deg] shadow-lg">
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <ul className="flex justify-center w-full font-bold items-center h-full space-x-5 dark:text-primary-ext-50 font-body text-lg md:text-xl md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-ltr">
                {Array.from({ length: 8 }).map((_, i) => (
                  <li key={i} className="flex items-center flex-none w-64">
                    <span>Frontend Developer</span>
                    <GoNorthStar className="text-black ml-4" />
                  </li>
                ))}
              </ul>
              <ul className="hidden lg:flex justify-center w-full font-bold items-center h-full space-x-5 dark:text-primary-ext-50 font-body text-lg md:text-xl md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-ltr">
                {Array.from({ length: 8 }).map((_, i) => (
                  <li key={i} className="flex items-center flex-none w-64">
                    <span>Frontend Developer</span>
                    <GoNorthStar className="text-black ml-4" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="h-20 bg-primary-ext-500 w-[200%] flex justify-center absolute bottom-0 -left-[50%] rotate-[-3deg] shadow-xl">
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <ul className="flex justify-center w-full font-bold items-center h-full space-x-5 dark:text-primary-ext-50 font-body text-lg md:text-xl md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {Array.from({ length: 8 }).map((_, i) => (
                  <li key={i} className="flex items-center flex-none w-64">
                    <span>Frontend Developer</span>
                    <GoNorthStar className="text-black ml-4" />
                  </li>
                ))}
              </ul>
              <ul className="hidden lg:flex justify-center w-full font-bold items-center h-full space-x-5 dark:text-primary-ext-50 font-body text-lg md:text-xl md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {Array.from({ length: 8 }).map((_, i) => (
                  <li key={i} className="flex items-center flex-none w-64">
                    <span>Frontend Developer</span>
                    <GoNorthStar className="text-black ml-4" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="container my-32">
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center h-full gap-5">
          <div className="w-full sm:w-3/5">
            <h2 className="text-2xl font-heading mb-5 relative">
              <span className="">About</span>
              <span className="bg-primary-ext-500 h-6 w-14 absolute left-[4.5rem] -bottom-1 -z-10"></span>
            </h2>
            <p className="font-body max-w-lg">
              I&apos;m [Your Name], a passionate and creative frontend developer
              with a knack for turning ideas into stunning, user-friendly
              digital experiences. With a keen eye for design, a love for clean
              code, and a commitment to delivering exceptional websites,
              I&apos;m your go-to expert for all things frontend.
            </p>
          </div>
          <div className="flex w-full sm:w-2/5 justify-center">
            <Player
              autoplay
              loop
              src={Animation}
              className="w-52 h-52 sm:w-[85%] sm:h-[85%]"
              // className="absolute -top-32 left-14 h-[280px] w-[280px] transition-all md:relative md:top-0 md:left-0 md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px]"
            ></Player>
          </div>
        </div>
        <div className="mt-14">
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
              {dataTechStack.map((item) => (
                <li key={item.id}>
                  <div className="text-5xl bg-secondary-ext-100 p-4 rounded-md">
                    {item.icons}
                  </div>
                </li>
              ))}
            </ul>
            <ul
              className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll"
              aria-hidden="true"
            >
              {dataTechStack.map((item) => (
                <li key={item.id}>
                  <div className="text-5xl bg-secondary-ext-100 p-4 rounded-md">
                    {item.icons}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="container my-32 rounded-b-xl">
        <div>
          <h2 className="text-2xl font-heading mb-5 relative">
            <span className="">Experience</span>
            <span className="bg-primary-ext-500 h-6 w-14 absolute left-[4.5rem] -bottom-1 -z-10"></span>
          </h2>
        </div>
        <div>
          <div className="-my-6">
            {experienceData.map((item) => (
              <div key={item.id} className="relative pl-8 sm:pl-52 py-6 group">
                <div className="font-caveat font-medium text-2xl text-primary-ext-500 mb-1 sm:mb-0">
                  {item.subtitle}
                </div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[11.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-primary-ext-500 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[11.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-40 h-6 mb-3 sm:mb-0 text-white bg-secondary-ext-200 rounded-full">
                    {item.time}
                  </time>
                  <div className="text-xl font-bold text-white">
                    {item.title}
                  </div>
                </div>
                <div className="text-slate-300">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="rounded-t-3xl bg-background-ext-100">
        <div className="container py-32">
          <div className="mb-10">
            <h2 className="text-2xl font-heading mb-5 relative">
              <span className="">Selecting Project</span>
              <span className="bg-primary-ext-500 h-6 w-14 absolute left-[4.5rem] -bottom-1"></span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 xl:-mx-10">
            <div className="max-w-xs mx-auto">
              <div className="flex flex-col h-full bg-accent-ext-100 shadow-lg rounded-lg overflow-hidden">
                <a
                  className="block focus:outline-none focus-visible:ring-2"
                  href="#0"
                >
                  <figure className="relative h-0 pb-[56.25%] overflow-hidden">
                    <img
                      className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                      src="https://res.cloudinary.com/dc6deairt/image/upload/v1638284256/course-img_tf0g8c.png"
                      width="320"
                      height="180"
                      alt="Course"
                    />
                  </figure>
                </a>
                <div className="flex-grow flex flex-col p-5">
                  <div className="flex-grow">
                    <header className="mb-3">
                      <a
                        className="block focus:outline-none focus-visible:ring-2"
                        href="#0"
                      >
                        <h3 className="text-[22px] text-gray-900 font-extrabold leading-snug">
                          The Ultimate JavaScript Course
                        </h3>
                      </a>
                    </header>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <a
                      className="font-medium text-sm inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2"
                      href="#0"
                    >
                      Cancel
                    </a>
                    <a
                      className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-50 focus:outline-none focus-visible:ring-2 hover:bg-indigo-100 text-indigo-500"
                      href="#0"
                    >
                      Preview
                    </a>
                    <a
                      className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-500 focus:outline-none focus-visible:ring-2 hover:bg-indigo-600 text-white"
                      href="#0"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-xs mx-auto">
              <div className="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden">
                <a
                  className="block focus:outline-none focus-visible:ring-2"
                  href="#0"
                >
                  <figure className="relative h-0 pb-[56.25%] overflow-hidden">
                    <img
                      className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                      src="https://res.cloudinary.com/dc6deairt/image/upload/v1638284256/course-img_tf0g8c.png"
                      width="320"
                      height="180"
                      alt="Course"
                    />
                  </figure>
                </a>
                <div className="flex-grow flex flex-col p-5">
                  <div className="flex-grow">
                    <header className="mb-3">
                      <a
                        className="block focus:outline-none focus-visible:ring-2"
                        href="#0"
                      >
                        <h3 className="text-[22px] text-gray-900 font-extrabold leading-snug">
                          The Ultimate JavaScript Course
                        </h3>
                      </a>
                    </header>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <a
                      className="font-medium text-sm inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2"
                      href="#0"
                    >
                      Cancel
                    </a>
                    <a
                      className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-50 focus:outline-none focus-visible:ring-2 hover:bg-indigo-100 text-indigo-500"
                      href="#0"
                    >
                      Preview
                    </a>
                    <a
                      className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-500 focus:outline-none focus-visible:ring-2 hover:bg-indigo-600 text-white"
                      href="#0"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-xs mx-auto">
              <div className="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden">
                <a
                  className="block focus:outline-none focus-visible:ring-2"
                  href="#0"
                >
                  <figure className="relative h-0 pb-[56.25%] overflow-hidden">
                    <img
                      className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                      src="https://res.cloudinary.com/dc6deairt/image/upload/v1638284256/course-img_tf0g8c.png"
                      width="320"
                      height="180"
                      alt="Course"
                    />
                  </figure>
                </a>
                <div className="flex-grow flex flex-col p-5">
                  <div className="flex-grow">
                    <header className="mb-3">
                      <a
                        className="block focus:outline-none focus-visible:ring-2"
                        href="#0"
                      >
                        <h3 className="text-[22px] text-gray-900 font-extrabold leading-snug">
                          The Ultimate JavaScript Course
                        </h3>
                      </a>
                    </header>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <a
                      className="font-medium text-sm inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2"
                      href="#0"
                    >
                      Cancel
                    </a>
                    <a
                      className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-50 focus:outline-none focus-visible:ring-2 hover:bg-indigo-100 text-indigo-500"
                      href="#0"
                    >
                      Preview
                    </a>
                    <a
                      className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-500 focus:outline-none focus-visible:ring-2 hover:bg-indigo-600 text-white"
                      href="#0"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
