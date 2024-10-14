import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextAnimate } from "./ui/text-animate";
import { Typewriter } from "./ui/typewriter";
import Link from "next/link";
import IconRipple from "./ui/icon-ripple";

export function Hero() {
  const texts = [
    "Blockchain Developer",
    "Frontend Developer",
    "Product Manager",
    "Software Engineer",
  ];
  return (
    <div
      className="min-h-screen w-full rounded-md flex items-center justify-center antialiased dark:bg-grid-white/[0.04] bg-grid-black/[0.03] relative overflow-hidden"
      id="home"
    >
      <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black/70
         bg-slate-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="max-w-7xl w-full items-center flex flex-col gap-10">
        <p className="bg-gradient-to-bl dark:from-green-300  dark:to-blue-600 from-gray-400 to-gray-600 bg-clip-text text-transparent font-semibold text-center">
          TECH ENTHUSIAST WITH PASSION FOR DEVELOPMENT
        </p>
        <TextAnimate
          text="Hey there I'm Jason "
          type="popIn"
          className="tracking-wide text-3xl md:text-6xl font-bold text-center text-gray-700 dark:text-white"
        />
        <div className="mt-2 py-2 inline-flex animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-300 transition-colors rounded-2xl">
          <div className="text-sm md:text-3xl font-semibold">
            <Typewriter texts={texts} delay={0.5} baseText="I'm a " />
          </div>
        </div>

        <div className="flex gap-12 items-center">
          <Link
            data-umami-event="vist-github"
            href={"https://github.com/jasonaw98"}
            target="blank"
            className=" hover:-translate-y-2 ease-in-out transition-all duration-300"
          >
            <svg
              className="w-10 h-10 text-black dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link
            data-umami-event="vist-linkedIn"
            href={"https://www.linkedin.com/in/jason-aw-han-wei/"}
            target="blank"
            className=" hover:-translate-y-2 ease-in-out transition-all duration-300"
          >
            <svg
              className="w-9 h-9 dark:text-black fill-white dark:fill-black rounded-md dark:bg-white bg-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                clipRule="evenodd"
              />
              <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
            </svg>
          </Link>
        </div>
        <Link href={"#about"} className="pt-8">
          <IconRipple />
        </Link>
      </div>
    </div>
  );
}
