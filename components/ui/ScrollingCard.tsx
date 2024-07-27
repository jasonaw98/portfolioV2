import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import TailwindCSS from "@/public/logos/tailwind";
import Nextjs from "@/public/logos/next";
import TypeScript from "@/public/logos/typescript";
import Git from "@/public/logos/git";
import Solidity from "@/public/logos/solidity";
import Ethereum from "@/public/logos/eth";
import Bun from "@/public/logos/bun";
import Nodejs from "@/public/logos/node";
import React from "@/public/logos/react";
import Solana from "@/public/logos/solana";
import Supabase from "@/public/logos/supabase";

const ScrollingCard = () => {
  return (
    <div className="h-full rounded-md flex flex-col antialiased items-center relative pt-2">
      <InfiniteMovingCards items={components} direction="right" speed="slow" />
      <InfiniteMovingCards items={components} direction="left" speed="slow" />
    </div>
  );
};

export default ScrollingCard;

const components = [
  <TailwindCSS className="h-8 w-8" />,
  <Nextjs className="h-8 w-8" />,
  <React className="h-8 w-8" />,
  <TypeScript className="h-8 w-8" />,
  <Supabase className="h-8 w-8" />,
  <Nodejs className="h-8 w-8" />,
  <Git className="h-8 w-8" />,
  <Bun className="h-8 w-8" />,
  <Solana className="h-8 w-8" />,
  <Ethereum className="h-8 w-8" />,
  <Solidity className="h-8 w-8" fill="white" />,
];
