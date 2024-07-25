import logo from "../assets/cclogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20 h-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/corey-clarke100/" target="_blank">
          <FaLinkedin style={{ cursor: "pointer" }} />
        </a>
        <a href="https://github.com/sombas100" target="_blank">
          <FaGithub style={{ cursor: "pointer" }} />
        </a>
        <a href="https://instagram.com/persian184" target="_blank">
          <FaInstagram style={{ cursor: "pointer" }} />
        </a>
        <FaSquareXTwitter />
      </div>
    </nav>
  );
};

export default Navbar;
