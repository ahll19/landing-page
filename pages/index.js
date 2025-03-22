import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen flex">
      <a
        href="https://blog.anders-lauridsen.dk"
        className="w-1/2 h-full relative overflow-hidden group"
      >
        <div className="relative h-full w-full">
          <Image
            src="/IMG_0141.jpg"
            alt="Blog Image"
            fill
            priority
            sizes="50vw"
            className="object-cover transition-transform duration-500 filter grayscale-[30%] brightness-[50%] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-30">
            <span className="text-white text-4xl font-bold mb-2">Blog</span>
            {/* <span className="text-white text-2xl font-bold">blog.anders-lauridsen.dk</span> */}
          </div>
        </div>
      </a>
      <a
        href="https://photos.anders-lauridsen.dk"
        className="w-1/2 h-full relative overflow-hidden group"
      >
        <div className="relative h-full w-full">
          <Image
            src="/IMG_3541.jpg"
            alt="Portfolio Image"
            fill
            priority
            sizes="50vw"
            className="object-cover transition-transform duration-500 filter grayscale-[30%] brightness-[50%] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-30">
            <span className="text-white text-4xl font-bold mb-2">Photos</span>
            {/* <span className="text-white text-2xl font-bold">photos.anders-lauridsen.dk</span> */}
          </div>
        </div>
      </a>
    </div>
  );
}