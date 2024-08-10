const NavBar = () => {
  return (
    <nav className="p-6 flex flex-row justify-center items-center sticky top-0">
      <ul className="nav_bg px-6 py-3 sm:min-w-[500px] flex justify-center items-center gap-8 rounded-full">
        <li>
          <a
            href="#home"
            className="text-sm sm:text-base font-medium text-gray-300 hover:text-2xl hover:text-gray-100 duration-150"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            className="text-sm sm:text-base font-medium text-gray-300 hover:text-2xl hover:text-gray-100 duration-150"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-sm sm:text-base font-medium text-gray-300 hover:text-2xl hover:text-gray-100 duration-150"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#footer"
            className="text-sm sm:text-base font-medium text-gray-300 hover:text-2xl hover:text-gray-100 duration-150"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
