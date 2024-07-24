import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import Nextsvg from "../../public/logos/next.svg"
import TailwindCSS from "@/public/logos/next";

const ScrollingCard = () => {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
    <InfiniteMovingCards
      items={testimonials}
      direction="right"
      speed="slow"
    />
    <InfiniteMovingCards
      items={testimonials}
      direction="left"
      speed="slow"
    />
    <div><TailwindCSS/></div>
  </div>
  )
}

export default ScrollingCard

const testimonials = [
   "Nextjs",
   "Tailwind",
   "Typescript",
   "Vercel",
   "Git",
   "NextAuth",
   "Figma",
   "GraphQL",
   "Docker",
  ];