import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextAnimate } from "./ui/text-animate";

export function Hero() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased dark:bg-grid-white/[0.04] bg-grid-black/[0.04] relative overflow-hidden">
      <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black/70
         bg-slate-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-0  w-full pt-20 md:pt-0">
        <TextAnimate
          text="Hey there I'm Jason "
          type="popIn"
          className="tracking-wide text-3xl md:text-6xl font-bold text-center"
        />
      </div>
    </div>
  );
}
