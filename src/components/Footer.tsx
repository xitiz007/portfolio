import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { BiUpArrow } from "react-icons/bi";

const Footer: React.FC = () => {
  return (
    <footer className="">
      <div className="flex flex-col p-[15px] items-center justify-center">
        <a
          href="#top"
          className="md:mb-3 text-[#a8b2d1] hover:text-[#64ffda] border rounded-full p-2 flex items-center justify-center hover:bg-[#64ffda] hover:bg-opacity-5 transition duration-300 ease-out"
        >
          <BiUpArrow />
        </a>
        <div className="flex xl:hidden items-center space-x-6 my-4">
          <a
            href="https://www.linkedin.com/in/kshitiz-baniya-376a051aa/"
            target="_blank"
          >
            <FiLinkedin className="social-icons" />
          </a>
          <a href="https://github.com/xitiz007" target="_blank">
            <AiOutlineGithub className="social-icons" />
          </a>
          <a href="https://www.instagram.com/xitiz_baniya/" target="_blank">
            <AiOutlineInstagram className="social-icons" />
          </a>
        </div>
        <p className="text-[#a8b2d1] font-medium tracking-wide text-xs md:text-sm cursor-pointer hover:text-[#64ffda] transition duration-300 ease-out">
          Designed & Built by Kshitiz Baniya
        </p>
      </div>
    </footer>
  );
};

export default Footer;
