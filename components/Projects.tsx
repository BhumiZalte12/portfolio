import Image from "next/image";

const portfolioProjects = [
  {
    title: "Online Book Store Website",
    company: "Personal Project",
    year: "2024",
    Results: [
      { title: "Improved functionality with features for adding, updating, and deleting book records and managing student details." },
      { title: "Boosted efficiency by 30% using Java (Swing, JDBC) and MySQL for seamless data handling" },
    ],
    link: "#", // Replace with actual live link
    image: "/book.png", // Replace with actual image path
  },
  {
    title: "Digital Wedding Card Website",
    company: "Paarsh Infotech Pvt. Ltd.",
    year: "2024",
    Results: [
      { title: "Developed a dynamic digital wedding invitation website using HTML5, CSS3, Bootstrap, SQL, and JavaScript." },
      { title: "Enhanced interactivity by 40% with React's real-time updates and component-based architecture." },
    ],
    link: "#", // Replace with actual live link
    image: "/weddingcard.jpg", // Replace with actual image path
  },
  {
    title: "Pizza Ordering Chatbot",
    company: "Coincent.ai",
    year: "2023",
    Results: [
      { title: "AI-driven customer interaction solutions, improving accuracy by 15%" },
      { title: "Designed and implemented a real-time chatbot system using Dialogflow, FastAPI, SQL, and Python, reducing customer query response times by 25%." },
    ],
    link: "#", // Replace with actual live link
    image: "/pizzabot.jpg", // Replace with actual image path
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen bg-gray-800 text-white">
  
  

    <div className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white rounded-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
          Real-World Results
        </p>
        <h2 className="text-4xl font-serif text-center mt-4">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-center mt-2 mb-8">
          See how I transformed concepts into engaging digital experiences
        </p>

        {/* Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className="group relative border border-gray-700 rounded-lg p-4 hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              {/* Background Glow Animation */}
              <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-emerald-500/10 to-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

              {/* Project Header */}
              <div className="flex justify-between items-center text-gray-400 text-sm mb-2">
                <span>{project.company}</span>
                <span>{project.year}</span>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-semibold mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Project Results */}
              <ul className="list-disc list-inside text-gray-400 text-sm mb-4">
                {project.Results.map((result, i) => (
                  <li key={i} className="group-hover:text-gray-200 transition-colors duration-300">
                    {result.title}
                  </li>
                ))}
              </ul>

              {/* View Live Site */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-emerald-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-600 transition"
              >
                View Live Site
              </a>

              {/* Project Image */}
              <div className="mt-4 relative overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="rounded-lg group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};
