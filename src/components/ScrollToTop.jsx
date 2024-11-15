"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

function ScrollToTop() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsScrolling(false);
      } else {
        setIsScrolling(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className={`${
        isScrolling ? "flex" : "hidden"
      } fixed bottom-32 right-5 hover:cursor-pointer hover:shadow-md hover:opacity-85 transition-all h-10 w-10 items-center justify-center flex-col border-solid border-gray-200 bg-white border-[1px] z-30 rounded-full`}
    >
      <ChevronUp />
    </button>
  );
}

export default ScrollToTop;
