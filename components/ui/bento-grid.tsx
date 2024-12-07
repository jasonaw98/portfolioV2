import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import MagicButton from "./MagicButton";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  content,
  icon,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  content?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-transparent dark:border-white/[0.2] bg-transparent border border-gray-300 justify-between drop-shadow-xl shadow-xl flex flex-col space-y-4",
        className
      )}
    >
      {id === 6 && (
        <div className="flex flex-col h-full">
          <BackgroundGradientAnimation>
            <div className="group-hover/bento:translate-x-2 transition duration-200 absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 text-2xl text-center md:text-3xl lg:text-4xl">
              <div className="bg-clip-text text-gray-200 drop-shadow-2xl mb-4">
                Let's Chat!
              </div>
              <MagicButton
              title={
                <Link 
                 data-umami-event="book-a-call"
                href={"https://calendar.app.google/baaaJJAC3USKgzi8A"}
                target="blank"
                className="relative group flex justify-center items-center overflow-hidden text-white font-bold w-full h-full transition-all duration-500 ease-in-out">
                  <div
                    className="flex w-full items-center justify-center transition-transform duration-500 ease-in-out group-hover:translate-x-full translate-x-0"
                  >
                    <div>Book a call</div>
                  </div>
                  <div
                    className="absolute w-full inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:translate-x-0 -translate-x-full"
                  >
                    <span role="img" aria-label="rocket" className="text-3xl">
                      📅
                    </span>
                  </div>
                </Link>
              }
            />
            </div>
          </BackgroundGradientAnimation>
          <div className="absolute bottom-0">
            
          </div>
        </div>
      )}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-700 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
        {content}
      </div>
    </div>
  );
};
