"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export interface CardDetails {
  title: string;
  description: string;
  link?: string;
  gitlink?: string;
  image: string;
  tech?: string[];
}

export function ThreeDCard({
  title,
  description,
  link,
  gitlink,
  image,
  tech,
}: CardDetails) {
  return (
    <CardContainer className="">
      <CardBody className="flex flex-col dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-gray-300 shadow-2xl w-auto sm:w-[25rem] h-auto sm:h-[30rem] rounded-2xl p-6 border">
        <div className="flex flex-col h-full">
          <CardItem translateZ="80" className="w-full">
            <Image
              src={image}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem
            translateZ="70"
            className="w-full mt-4 text-xl font-semibold"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="70"
            className="text-black text-sm max-w-sm mt-2 dark:text-neutral-300 flex-grow"
          >
            {description}
          </CardItem>

          <CardItem translateZ="50">
            <div className="flex flex-wrap gap-2 mt-2">
              {tech &&
                tech.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 text-xs font-medium bg-gray-700 text-gray-200 rounded-full"
                  >
                    {item}
                  </span>
                ))}
            </div>
          </CardItem>

          <div className="flex justify-between items-end">
            <CardItem
              translateZ="50"
              as={Link}
              href={link}
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Live →
            </CardItem>
            <CardItem
              translateZ="70"
              as={Link}
              href={gitlink}
              target="__blank"
              className="bg-black rounded-full p-1 fill-white"
            >
              <svg
                className="text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                  clipRule="evenodd"
                />
              </svg>
            </CardItem>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
