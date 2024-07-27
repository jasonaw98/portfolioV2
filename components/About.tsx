import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { Globe } from "./Globe";
import ButtonSnippet from "./ui/ButtonSnippet";
import ScrollingCard from "./ui/ScrollingCard";

export function About() {
  return (
    <div id="about" className="py-12">
      <BentoGrid className="max-w-6xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            content={item.content}
            className={item.className}
            id={item.id}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const items = [
  {
    title: "I'm very flexible with time zone communications",
    className:
      "md:col-span-2 items-center text-3xl px-12 text-center relative overflow-hidden",
    content: <Globe />,
  },
  {
    className: "p-0 overflow-auto w-full h-full -space-y-4 md:col-span",
    id: 6,
  },
  {
    title: "Code Snippet",
    className: "md:col-span-1 items-center text-3xl px-4 text-center",
    content: <ButtonSnippet />,
  },
  {
    title: "My current Tech Stack and Toolkits",
    className:
      "md:col-span-2 text-3xl text-center relative overflow-hidden",
    content: <ScrollingCard />,
  },
];
