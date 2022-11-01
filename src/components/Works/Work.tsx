import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";
import { Project } from "../../data/projects";
interface Props {
  project: Project;
}

const Work: React.FC<Props> = ({ project }) => {
  const {
    title,
    technologies,
    gitLink,
    externalLink,
    image,
    description,
    featured,
  } = project;
  return (
    <li className="flex items-center justify-between space-x-2">
      <div className="hidden md:inline-flex relative w-full h-[400px] max-w-[500px]">
        <div className="absolute w-full h-full z-10 bg-[#64ffda] rounded-md bg-opacity-20 hover:bg-transparent transition-colors duration-300 ease-in-out" />
        <Image
          src={`/projects/${image}`}
          layout="fill"
          objectFit="contain"
          alt="project"
        />
      </div>
      <div className="w-full text-left md:text-right space-y-2">
        {featured && (
          <h6 className="text-[#64ffda] font-normal text-xs tracking-widest">
            Featured Project
          </h6>
        )}
        <h2 className="text-[#ccd6f6] font-semibold text-lg md:text-xl lg:text-2xl tracking-wider">
          {title}
        </h2>
        <div className="bg-[#102241] px-2 py-4 rounded-sm">
          <p className="text-gray-100 tracking-wide font-normal text-sm md:text-base">
            {description}
          </p>
        </div>
        <div className="inline-flex">
          <ul className="flex items-center justify-start md:justify-end flex-wrap space-x-3">
            {technologies.map((technology, index) => (
              <li
                className="text-[#a8b2d1] font-normal text-sm tracking-wider"
                key={index}
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex space-x-4 md:justify-end">
          {gitLink && (
            <a title="GitHub" href={gitLink} target="_blank">
              <AiOutlineGithub className="w-5 h-5 text-gray-50 cursor-pointer hover:text-[#64ffda] transition duration-300 ease-in-out" />
            </a>
          )}
          {externalLink && (
            <a title="External Link" href={externalLink} target="_blank">
              <FiExternalLink className="w-5 h-5 text-gray-50 cursor-pointer hover:text-[#64ffda] transition duration-300 ease-in-out" />
            </a>
          )}
        </div>
      </div>
    </li>
  );
};

export default Work;
