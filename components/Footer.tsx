import React from "react";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased dark:bg-grid-white/[0.04] bg-grid-black/[0.04] relative overflow-hidden">
      <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black/70
         bg-slate-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      />
      <div className="flex flex-col items-center w-full max-w-5xl">
        <h1 className="text-3xl md:text-5xl font-bold text-wra text-center">Ready to talk and take it to the next level?</h1>
        <p className="mt-12 text-gray-300 text-lg">
          Reach out to me today and let's discuss on how I can help to achieve
          your goals.
        </p>
        <MagicButton
         title= "Contact Me"
         position= "left"/>
      </div>
    </div>
  );
};

export default Footer;
