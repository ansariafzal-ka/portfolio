import { IoHomeSharp } from "react-icons/io5";
import { FaProjectDiagram, FaGithub } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { IoLogoWhatsapp, IoIosMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import ContactForm from "./utils/ContactForm";

const Footer = () => {
  return (
    <section id="footer" className="bg_main px-6 py-12 md:flex">
      <ContactForm />
      <div className="w-full flex justify-between  md:justify-around items-start pt-8 md:pt-28">
        <ul className="flex flex-col justify-center items-start gap-2">
          <h1 className="text-gray-400 font-medium text-xl">Socials</h1>
          <li>
            <a
              href="#"
              className="flex justify-center items-center gap-1 sm:text-lg text-gray-500 font-medium hover:text-xl duration-150 hover:text-indigo-600"
            >
              <IoLogoWhatsapp />
              +91 9967132722
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ansariafzal58?igsh=dnVscDM1aG45Y2Iy"
              target="_blank"
              className="flex justify-center items-center gap-1 sm:text-lg text-gray-500 font-medium hover:text-xl duration-150 hover:text-indigo-600"
            >
              <AiFillInstagram />
              Instagran
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ansariafzal-ka"
              target="_blank"
              className="flex justify-center items-center gap-1 sm:text-lg text-gray-500 font-medium hover:text-xl duration-150 hover:text-indigo-600"
            >
              <FaGithub />
              Github
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex justify-center items-center gap-1 sm:text-lg text-gray-500 font-medium hover:text-xl duration-150 hover:text-indigo-600"
            >
              <IoIosMail />
              ansariafzal2112@gmail.com
            </a>
          </li>
        </ul>
        <ul className="flex flex-col justify-center items-start gap-2">
          <h1 className="text-gray-400 font-medium text-xl">Navigation</h1>
          <li>
            <a
              href="#home"
              className="flex justify-center items-center gap-1 sm:text-lg text-gray-500 font-medium hover:text-xl duration-150 hover:text-indigo-600"
            >
              <IoHomeSharp />
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="flex justify-center items-center gap-1 sm:text-lg text-gray-500 font-medium hover:text-xl duration-150 hover:text-indigo-600"
            >
              <FaProjectDiagram />
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="flex justify-center items-center gap-1 sm:text-lg text-gray-500 font-medium hover:text-xl duration-150 hover:text-indigo-600"
            >
              <MdContactSupport />
              About
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
