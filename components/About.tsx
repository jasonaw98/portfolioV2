import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { Globe } from "./Globe";

export function About() {
  return (
    <BentoGrid className="max-w-6xl mx-auto my-10">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          content={item.content}
          className={item.className}
          id={item.id}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "I'm very flexible with time zone communications",
    className: "md:col-span-2 items-center text-3xl px-12 text-center relative overflow-hidden",
    content: <Globe />,
  },
  {
    className: "p-0 overflow-auto w-full h-full -space-y-4 md:col-span",
    id: 6,
  },
  {
    title: "The Art of Design",
    className: "md:col-span-1 items-center text-3xl px-4 text-center relative overflow-hidden",
    content: "Discover the beauty of thoughtful and functional design.",
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    className: "md:col-span-2 items-center text-3xl px-12 text-center relative overflow-hidden"
  },
];
