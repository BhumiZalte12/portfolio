import Image from "next/image";
import memojiImage from "@/public/girl.jpeg";
import Arrowdown from "@/components/ArrowDown";
import grainImage from "@/public/grain.jpeg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-40 relative z-0 overflow-x-clip">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>

      {/* Ring Background */}
      <div className="absolute w-[620px] h-[620px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
      <div className="absolute w-[820px] h-[820px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
      <div className="absolute w-[1020px] h-[1020px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
      <div className="absolute w-[1220px] h-[1220px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>

      

      <div className="container mx-auto flex flex-col items-center justify-center relative z-10">
        {/* Emoji Image */}
        <Image
          src={memojiImage}
          className="w-[100px] h-[100px] rounded-full"
          alt="girl with laptop"
        />

        {/* Available for New Project */}
        <div className="bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg mt-4">
          <div className="bg-green-500 w-2.5 h-2.5 rounded-full"></div>
          <div className="text-sm font-medium">Available for new project</div>
        </div>

        {/* Headline */}
        <div className="max-w-lg mx-auto text-center mt-8">
          <h1 className="text-4xl font-bold">Building Exceptional User Experiences</h1>

          {/* Smaller Introduction Text */}
          <p className="text-base font-light text-gray-400 max-w-2xl mx-auto mt-4 mb-6">
            Hello! 👋 I'm a{" "}
            <span className="font-medium text-yellow-300">creative developer</span> passionate about building user-friendly, scalable, and beautiful digital products. With expertise in{" "}
            <span className="text-yellow-300">Web Development</span>,{" "}
            <span className="text-yellow-300">AI</span>, and{" "}
            <span className="text-yellow-300">Data Science</span>, I bring ideas to life with code.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="px-4 py-1.5 bg-blue-500 text-white rounded-md flex items-center gap-2 text-sm">
            <span>Explore My Work</span>
            <Arrowdown />
          </button>
          <button className="px-4 py-1.5 bg-gray-700 text-white rounded-md flex items-center gap-2 text-sm">
            <span>👋</span>
            <span>Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
