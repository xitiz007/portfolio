import projects from "../../data/projects";
import Work from "./Work";

const Works:React.FC = () => {
  return (
    <section className="py-[100px]">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-base font-semibold sm:text-lg md:text-[26px] lg:text-[32px] text-[#ccd6f6] tracking-wide flex items-center relative whitespace-nowrap w-full after:block after:top-[-5px] after:w-[300px] after:h-[1px] after:ml-[20px] after:bg-[#233554]">
          Some Things I’ve Built
        </h2>
        <ul className="mt-[20px] space-y-14">
          {projects?.map((project, index) => (
            <Work key={index} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Works;
