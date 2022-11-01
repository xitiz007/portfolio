import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";

const Social: React.FC = () => {
  return (
    <div className="hidden xl:inline w-[40px] fixed bottom-0 left-10 right-auto z-10">
      <ul className="flex flex-col items-center list-none space-y-12 after:block after:w-[1px] after:h-[90px] after:mx-auto after:my-0 after:bg-[#fff] after:mt-[20px]">
        <li>
          <a href="https://github.com/xitiz007" target="_blank">
            <AiOutlineGithub className="social-icons" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kshitiz-baniya-376a051aa/"
            target="_blank"
          >
            <FiLinkedin className="social-icons" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/xitiz_baniya/" target="_blank">
            <AiOutlineInstagram className="social-icons" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
