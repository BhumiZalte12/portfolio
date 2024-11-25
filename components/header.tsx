
// components/header.tsx
export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-50">
      <nav className="flex gap-4 px-4 py-2 border border-white/15 rounded-full bg-white/10 backdrop-blur shadow-lg">
        {/* Navigation Items */}
        <a
          href="#home"
          className="nav-item text-gray-200 hover:text-yellow-300 transition-colors"
        >
          Home
        </a>
        <a
          href="#projects"
          className="nav-item text-gray-200 hover:text-yellow-300 transition-colors"
        >
          Projects
        </a>
        <a
          href="#about"
          className="nav-item text-gray-200 hover:text-yellow-300 transition-colors"
        >
          About
        </a>
        <a
          href="#contact"
          className="nav-item bg-white text-gray-900 px-4 py-1 rounded-full hover:bg-yellow-300 hover:text-gray-900 transition-colors"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
