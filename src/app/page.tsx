"use client";

import SectionExperience from "@/components/SectionExperience";
import SectionHero from "@/components/SectionHero";
import Image from "next/image";
import Slider from "react-slick";
import { DiJqueryLogo } from "react-icons/di";

export default function Home() {
  const settings = {
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
  };

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
      title: "Frontend Developer (Contract)",
      subtitle: "Rahasia",
      desc: "Slicing from mockup to web page components, Responsible to fetching data from API and render in FE APP using ReactJS, NextJS and Typescript",
      time: "Jun 2022 - August 2022",
    },
    {
      id: 5,
      title: "Frontend SAAS Developer (Permanent)",
      subtitle: "Rahasia",
      desc: "-",
      time: "Oct 2022 - Present",
    },
  ];
  return (
    <>
      <section className="bg-patten overflow-x-clip relative">
        <div className="absolute -top-28 -left-28 bg-primary-ext-100 aspect-square h-[250px] animate-pulse rounded-full opacity-[10%] blur-2xl"></div>
        <div className="max-h-screen container h-screen px-3">
          <div className="h-[90%]">
            <div className="flex flex-col justify-center items-center h-full text-center">
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
                    <div className="h-5 w-5 ml-4 bg-primary-ext-50 rounded-full"></div>
                  </li>
                ))}
              </ul>
              <ul className="hidden lg:flex justify-center w-full font-bold items-center h-full space-x-5 dark:text-primary-ext-50 font-body text-lg md:text-xl md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-ltr">
                {Array.from({ length: 8 }).map((_, i) => (
                  <li key={i} className="flex items-center flex-none w-64">
                    <span>Frontend Developer</span>
                    <div className="h-5 w-5 ml-4 bg-primary-ext-50 rounded-full"></div>
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
                    <div className="h-5 w-5 ml-4 bg-primary-ext-50 rounded-full"></div>
                  </li>
                ))}
              </ul>
              <ul className="hidden lg:flex justify-center w-full font-bold items-center h-full space-x-5 dark:text-primary-ext-50 font-body text-lg md:text-xl md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {Array.from({ length: 8 }).map((_, i) => (
                  <li key={i} className="flex items-center flex-none w-64">
                    <span>Frontend Developer</span>
                    <div className="h-5 w-5 ml-4 bg-primary-ext-50 rounded-full"></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="container px-3 my-32">
        <div className="flex justify-between items-center h-full gap-5">
          <div className="w-3/5">
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
          <div className="flex flex-col w-2/5 gap-5">
            <div className="flex shadow-md items-center gap-5 w-full p-4 bg-accent-ext-300 rounded-md">
              <div className="w-10 h-10 bg-primary-ext-500 rounded-full flex items-center"></div>
              <div>
                <h6 className="font-semibold text-lg">Work Experince</h6>
                <p className="font-light">2 Years Experience</p>
              </div>
            </div>
            <div className="flex shadow-md items-center gap-5 w-full p-4 bg-accent-ext-200 rounded-md">
              <div className="w-10 h-10 bg-primary-ext-500 rounded-full flex items-center"></div>
              <div>
                <h6 className="font-semibold text-lg">Certification</h6>
                <p className="font-light">More than 10 Certifications</p>
              </div>
            </div>
            <div className="flex shadow-md items-center gap-5 w-full p-4 bg-accent-ext-100 rounded-md">
              <div className="w-10 h-10 bg-primary-ext-500 rounded-full flex items-center"></div>
              <div>
                <h6 className="font-semibold text-lg">Freelance & Project</h6>
                <p className="font-light">More than 10 Projects</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14">
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
              <li>
                <img
                  src="https://cruip-tutorials.vercel.app/logo-carousel/facebook.svg"
                  alt="Facebook"
                />
              </li>
              <li>
                <img
                  src="https://cruip-tutorials.vercel.app/logo-carousel/disney.svg"
                  alt="Disney"
                />
              </li>
              <li>
                <img
                  src="https://cruip-tutorials.vercel.app/logo-carousel/airbnb.svg"
                  alt="Airbnb"
                />
              </li>
              <li>
                <img
                  src="https://cruip-tutorials.vercel.app/logo-carousel/apple.svg"
                  alt="Apple"
                />
              </li>
              <li>
                <img
                  src="https://cruip-tutorials.vercel.app/logo-carousel/spark.svg"
                  alt="Spark"
                />
              </li>
              <li>
                <img
                  src="https://cruip-tutorials.vercel.app/logo-carousel/samsung.svg"
                  alt="Samsung"
                />
              </li>
              <li>
                <img
                  src="https://cruip-tutorials.vercel.app/logo-carousel/quora.svg"
                  alt="Quora"
                />
              </li>
              <li>
                <img
                  src="https://cruip-tutorials.vercel.app/logo-carousel/sass.svg"
                  alt="Sass"
                />
              </li>
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
              <li>
                <img
                  src="https://cruip-tutorials.vercel.app/logo-carousel/facebook.svg"
                  alt="Facebook"
                />
              </li>
              <li>
                <img
                  src="https://cruip-tutorials.vercel.app/logo-carousel/disney.svg"
                  alt="Disney"
                />
              </li>
              <li>
                <img
                  src="https://cruip-tutorials.vercel.app/logo-carousel/airbnb.svg"
                  alt="Airbnb"
                />
              </li>
              <li>
                <img
                  src="https://cruip-tutorials.vercel.app/logo-carousel/apple.svg"
                  alt="Apple"
                />
              </li>
              <li>
                <img
                  src="https://cruip-tutorials.vercel.app/logo-carousel/spark.svg"
                  alt="Spark"
                />
              </li>
              <li>
                <img
                  src="https://cruip-tutorials.vercel.app/logo-carousel/samsung.svg"
                  alt="Samsung"
                />
              </li>
              <li>
                <img
                  src="https://cruip-tutorials.vercel.app/logo-carousel/quora.svg"
                  alt="Quora"
                />
              </li>
              <li>
                <img
                  src="https://cruip-tutorials.vercel.app/logo-carousel/sass.svg"
                  alt="Sass"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="container px-3 my-32">
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
    </>
  );
}
