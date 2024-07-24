"use client";
import { useState } from "react";

const ButtonSnippet = () => {
  const [Copied, setCopied] = useState("Click To Copy");

  const handleclick =
    (buttonCode: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
      navigator.clipboard.writeText(buttonCode);
      setCopied("✅ Copied!");
      setTimeout(() => {
        setCopied("Click To Copy");
      }, 3000);
    };

  return (
    <div className="flex flex-col bg-gra-800 h-full justify-center items-center rounded-xl gap-8 text-lg">
      <button
        onClick={handleclick(buttonCode1)}
        className="relative border-2 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] border-slate-700 bg-[length:200%_100%] group flex justify-center items-center overflow-hidden text-white font-bold rounded-lg w-40 h-10 transition-all duration-500 ease-in-out"
      >
        <div className="flex w-full items-center justify-center transition-transform duration-500 ease-in-out group-hover:translate-x-full translate-x-0">
          <p>Hover Me</p>
        </div>
        <div className="absolute w-full inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:translate-x-0 -translate-x-full">
          <span className="text-2xl">😎</span>
        </div>
      </button>

      <button
        onClick={handleclick(buttonCode2)}
        className="relative border-2 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] border-slate-700 bg-[length:200%_100%] group flex justify-center items-center overflow-hidden text-white font-bold rounded-lg w-40 h-10 transition-all duration-300 ease-in-out"
      >
        <div className="flex w-full items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-full translate-y-0">
          <p>Hover Me</p>
        </div>
        <div className="absolute w-full inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-full">
          <span className="text-2xl">😎</span>
        </div>
      </button>
      <span className="font-semibold text-base text-slate-200">{Copied}</span>
    </div>
  );
};

export default ButtonSnippet;

const buttonCode1: string = `<button
        className="relative border-2 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] border-slate-700 bg-[length:200%_100%] group flex justify-center items-center overflow-hidden text-white font-bold rounded-lg w-40 h-10 transition-all duration-500 ease-in-out"
      >
        <div className="flex w-full items-center justify-center transition-transform duration-500 ease-in-out group-hover:translate-x-full translate-x-0">
          <p>Hover Me</p>
        </div>
        <div className="absolute w-full inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:translate-x-0 -translate-x-full">
          <span className="text-2xl">😎</span>
        </div>
      </button>`;

const buttonCode2: string = ` <button
        className="relative border-2 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] border-slate-700 bg-[length:200%_100%] group flex justify-center items-center overflow-hidden text-white font-bold rounded-lg w-40 h-10 transition-all duration-500 ease-in-out"
      >
        <div className="flex w-full items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-full translate-y-0">
          <p>Hover Me</p>
        </div>
        <div className="absolute w-full inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-full">
          <span className="text-2xl">😎</span>
        </div>
      </button>`;
