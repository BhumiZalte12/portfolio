import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section: Contact Info */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-lg font-bold text-yellow-300">Bhumi Zalte</h2>
            <p className="mt-2">Location: Pune, Maharashtra, India</p>
            <p>Email: <a href="mailto:zaltebhumi@gmail.com" className="text-blue-300 hover:underline">zaltebhumi@gmail.com</a></p>
          </div>

          {/* Middle Section: Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/BhumiZalte12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-300 transition-transform transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/bhumi-zalte-aa912321a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-transform transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://leetcode.com/u/zaltebhumi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-transform transform hover:scale-110"
              aria-label="LeetCode"
            >
              <SiLeetcode size={28} />
            </a>
            <a
              href="https://www.codechef.com/users/zaltebhumi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-transform transform hover:scale-110"
              aria-label="CodeChef"
            >
              <SiCodechef size={28} />
            </a>
            <a
              href="mailto:zaltebhumi@gmail.com"
              className="text-gray-400 hover:text-red-500 transition-transform transform hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope size={28} />
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Bhumi Zalte. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
