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
                  className="relative group flex justify-center items-center overflow-hidden text-white font-bold w-full h-full transition-all duration-500 ease-in-out"
                >
                  <div className="flex w-full items-center justify-center transition-transform duration-500 ease-in-out group-hover:translate-x-full translate-x-0">
                    <p>Contact Me</p>
                  </div>
                  <div className="absolute w-full inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:translate-x-0 -translate-x-full">
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
                  className="relative group flex justify-center items-center overflow-hidden text-white font-bold w-full h-full transition-all duration-500 ease-in-out"
                >
                  <div className="flex w-full items-center justify-center transition-transform duration-500 ease-in-out group-hover:translate-x-full translate-x-0">
                    <p>Book a call</p>
                  </div>
                  <div className="absolute w-full inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:translate-x-0 -translate-x-full">
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

      <div className="w-full justify-center items-center flex bg-[#05070f] pb-12">
        <div className="w-full flex justify-between items-center max-w-7xl">
          <span>Copyright 2024 Jason Aw</span>
          <div className="flex gap-3">
            <Link
              href={"https://github.com/jasonaw98"}
              target="blank"
              className="p-2 rounded-lg border-2 border-gray-500 flex cursor-pointer hover:border-white"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 256 250"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
              </svg>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/jason-aw-han-wei/"}
              target="blank"
              className="p-2 rounded-lg border-2 border-gray-500 flex cursor-pointer hover:border-white group"
            >
              <svg
                className="w-6 h-6 text-white border border-gray-200 rounded-md group-hover:bg-blue-500 group-hover:border-blue-500"
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
    </div>
  );
};

export default Footer;
