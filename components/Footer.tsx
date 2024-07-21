import React from "react";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col w-full items-center" id="footer">
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased dark:bg-grid-white/[0.04] bg-grid-black/[0.04] relative overflow-hidden">
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black/70
        bg-slate-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
        <div className="flex flex-col items-center w-full max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold text-wra text-center">
            Ready to talk and take it to the next level?
          </h1>
          <p className="mt-12 text-gray-300 text-lg">
            Reach out to me today and let's discuss on how I can help to achieve
            your goals.
          </p>
          <div className="gap-8 flex">
            <MagicButton
              title={
                <Link
                  href={"mailto:jason_aw1998@hotmail.com"}
                  target="blank"
                  className="relative group flex justify-center items-center overflow-hidden text-white font-bold rounded-full w-full h-full transition-all duration-500 ease-in-out"
                >
                  <div
                    className={`flex w-full items-center justify-center transition-transform duration-500 ease-in-out group-hover:translate-x-full translate-x-0`}
                  >
                    <p>Contact Me</p>
                  </div>
                  <div
                    className={`absolute w-full inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:translate-x-0 -translate-x-full`}
                  >
                    <span role="img" aria-label="Email" className="text-3xl">
                      📧
                    </span>
                  </div>
                </Link>
              }
            />
            <MagicButton
              title={
                <Link
                  href={"https://calendar.app.google/baaaJJAC3USKgzi8A"}
                  target="blank"
                  className="relative group flex justify-center items-center overflow-hidden text-white font-bold rounded-full w-full h-full transition-all duration-500 ease-in-out"
                >
                  <div
                    className={`flex w-full items-center justify-center transition-transform duration-500 ease-in-out group-hover:translate-x-full translate-x-0`}
                  >
                    <p>Book a call</p>
                  </div>
                  <div
                    className={`absolute w-full inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:translate-x-0 -translate-x-full`}
                  >
                    <span role="img" aria-label="rocket" className="text-2xl">
                      📅
                    </span>
                  </div>
                </Link>
              }
            />
          </div>
        </div>
      </div>

      <div className="w-full justify-between items-center flex px-24 bg-[#05070f] pb-12">
        <span>Copyright 2024 Jason Aw</span>
        <div className="flex gap-3">
          <Link
            href={"https://github.com/jasonaw98"}
            target="blank"
            className="p-2 rounded-lg border-2 border-gray-500 flex cursor-pointer hover:border-white"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
            href={"https://www.linkedin.com/in/jason-aw-han-wei/"}
            target="blank"
            className="p-2 rounded-lg border-2 border-gray-500 flex cursor-pointer hover:border-white group"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white border border-gray-200 rounded-md group-hover:fill-blue-400 group-hover:border-blue-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
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
          <Link
            href={"https://x.com/Jasonaw98"}
            target="blank"
            className="p-2 rounded-lg border-2 border-gray-500 flex cursor-pointer hover:border-white group"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white group-hover:fill-blue-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
