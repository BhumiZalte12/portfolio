import Image from "next/image";
import { SectionHeader } from "@/components/sectionheader";
import { CardHeader } from "@/components/ui/card";
import { ToolboxItems } from "./ToolBoxItem";

// Icons for the technologies
import JavascriptIcon from "@/public/tech/java-script.png";
import HtmlIcon from "@/public/tech/html-5.png";
import CssIcon from "@/public/tech/css-3.png";
import ReactIcon from "@/public/react.png";
import dbms from "@/public/dbms.png";
import pythonicon from "@/public/tech/python.png";

const toolboxItems = [
  {
    title: "Javascript",
    icon: (
      <img
        src={JavascriptIcon.src}
        alt="Javascript"
        className="w-16 h-16 transition-transform transform hover:scale-110 hover:shadow-lg"
      />
    ),
  },
  {
    title: "HTML",
    icon: (
      <img
        src={HtmlIcon.src}
        alt="HTML"
        className="w-16 h-16 transition-transform transform hover:scale-110 hover:shadow-lg"
      />
    ),
  },
  {
    title: "CSS3",
    icon: (
      <img
        src={CssIcon.src}
        alt="CSS3"
        className="w-16 h-16 transition-transform transform hover:scale-110 hover:shadow-lg"
      />
    ),
  },
  {
    title: "React.Js",
    icon: (
      <img
        src={ReactIcon.src}
        alt="React.Js"
        className="w-16 h-16 transition-transform transform hover:scale-110 hover:shadow-lg"
      />
    ),
  },
  {
    title: "Python",
    icon: (
      <img
        src={pythonicon.src}
        alt="Python"
        className="w-16 h-16 transition-transform transform hover:scale-110 hover:shadow-lg"
      />
    ),
  },
  {
    title: "DBMS",
    icon: (
      <img
        src={dbms.src}
        alt="DBMS"
        className="w-16 h-16 transition-transform transform hover:scale-110 hover:shadow-lg"
      />
    ),
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-700 text-white">
  


    <div className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white rounded-xl">
      {/* Section Header */}
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do, and what inspires me"
      />

      <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section: Image and Info */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-gray-700 p-8 rounded-lg shadow-lg col-span-1 lg:col-span-1 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <CardHeader
            title="About Me"
            description="A brief introduction about my background, education, and inspirations"
            className="px-6 pt-6"
          />
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Side: Your Image */}
            <div className="w-full lg:w-1/2 h-auto mb-6 lg:mb-0 flex justify-center">
              <Image
                src="/mypic.jpg" // Replace with your actual image
                alt="bhumi Zalte"
                className="object-cover rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                width={360} // Adjust dimensions as needed
                height={500}
              />
            </div>

            {/* Right Side: Your Info */}
            <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-6">
              {/* Name */}
              <h2 className="text-3xl font-semibold mb-6 mt-4 text-yellow-300">Bhumi Zalte</h2>

              {/* Education Section */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-blue-300">Education</h3>
                <p className="text-gray-200">
                  Bachelor of Engineering in Computer Engineering <br />
                  SNJB’s KBJ College of Engineering
                </p>
              </div>

              {/* GPA Section */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-green-300">GPA</h3>
                <p className="text-gray-200">9.00/10.0</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Technology Stack */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-gray-700 p-8 rounded-lg shadow-lg col-span-1 lg:col-span-1 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <CardHeader
            title="My Toolbox"
            description="Explore the technologies and tools I use to craft exceptional digital experiences"
            className="px-6 pt-6"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6">
            {toolboxItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {item.icon}
                <span className="mt-2 text-white">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};
