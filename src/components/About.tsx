import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import technologies from "../data/technologies";

const About: React.FC = () => {
  return (
    <section>
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-base font-semibold sm:text-lg md:text-[26px] lg:text-[32px] text-[#ccd6f6] tracking-wide flex items-center relative whitespace-nowrap w-full after:block after:top-[-5px] after:w-[300px] after:h-[1px] after:ml-[20px] after:bg-[#233554]">
          About Me
        </h2>
        <div className="flex flex-col space-y-6 items-center md:flex-row md:items-start space-x-2 mt-[20px]">
          <div className="flex-1 flex flex-col space-y-4 text-sm md:text-base text-[#8892b0]">
            <p>
              Hello! My name is Kshitiz and I enjoy creating things that live on
              the internet. My interest in web development started back in early
              2020.
            </p>
            <p>
              I'm an graduate student in Bachelor in Computer Engineering from
              Pokhara Engineering College. I have some experience in couple of
              my own project. I got interested in programming at a small age and
              I'm facinated to persue my passion. I'm not bothered to code for
              hours, some say it's hard work but I don't feel like it.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="grid grid-cols-2 gap-1 list-disc px-5">
              {technologies?.map((tech, index) => (
                <li key={index} className="text-[#64ffda]">
                  <span className="text-[#8892b0]">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="relative z-10 w-[200px] h-[200px] md:w-[250px] md:h-[250px]">
              <div className="hidden md:inline-flex absolute w-full h-full z-10 bg-[#64ffda] rounded-md bg-opacity-30 hover:bg-transparent transition-colors duration-300 ease-in-out" />
              <Image
                src="/images/kshitiz.JPG"
                layout="fill"
                objectFit="cover"
                alt="kshitiz baniya"
                className="rounded-md shadow-lg"
              />
            </div>
            <div className="absolute top-4 left-4 border-2 border-[#64ffda] rounded-md w-[200px] h-[200px] md:w-[250px] md:h-[250px]" />
          </div>
        </div>
        <div className="mt-[30px] flex items-center justify-center md:justify-start">
          <a
            target="_blank"
            href="/files/resume.pdf"
            className="flex items-center space-x-2 text-highlight text-sm md:text-base border border-[#64ffda] rounded-sm p-4 hover:bg-[#64ffda] hover:bg-opacity-10 transition duration-300 ease-out"
          >
            <FaDownload />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
