import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVerticalSplit, setIsVerticalSplit] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsVerticalSplit(window.innerWidth > window.innerHeight);
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`h-screen w-screen flex ${
        isVerticalSplit ? "flex-row" : "flex-col"
      }`}
    >
      <a
        href="https://blog.anders-lauridsen.dk"
        className={`relative overflow-hidden group ${
          isVerticalSplit ? "w-1/2 h-full" : "w-full h-1/2"
        }`}
      >
        <div className="relative h-full w-full">
          <Image
            src="/IMG_0141.jpg"
            alt="Blog Image"
            fill
            priority
            sizes={isVerticalSplit ? "50vw" : "50vh"}
            className="object-cover transition-transform duration-500 filter grayscale-[30%] brightness-[50%] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-30">
            <span className="text-white text-4xl font-bold mb-2">Blog</span>
            {/* <span className="text-white text-2xl font-bold">blog.anders-lauridsen.dk</span> */}
          </div>
        </div>
      </a>
      <a
        href="https://fotos.anders-lauridsen.dk"
        className={`relative overflow-hidden group ${
          isVerticalSplit ? "w-1/2 h-full" : "w-full h-1/2"
        }`}
      >
        <div className="relative h-full w-full">
          <Image
            src="/IMG_3541.jpg"
            alt="Portfolio Image"
            fill
            priority
            sizes={isVerticalSplit ? "50vw" : "50vh"}
            className="object-cover transition-transform duration-500 filter grayscale-[30%] brightness-[50%] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-30">
            <span className="text-white text-4xl font-bold mb-2">Photos</span>
            {/* <span className="text-white text-2xl font-bold">fotos.anders-lauridsen.dk</span> */}
          </div>
        </div>
      </a>
    </div>
  );
}
