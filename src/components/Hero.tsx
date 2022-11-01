const Hero: React.FC = () => {
  return (
    <section>
      <div className="min-h-[calc(100vh-72px)] flex flex-col justify-center max-w-[1000px] mx-auto">
        <div className="flex flex-col md:-mt-10 gap-2">
          <h2 className="text-sm sm:text-base md:text-lg tracking-widest text-highlight">
            Hi, my name is
          </h2>
          <h1 className="text-[#ccd6f6] tracking-widest font-bold text-[40px] sm:text-[60px] md:text-[70px] lg:text-[80px]">
            Kshitiz Baniya.
          </h1>
          <h3 className="text-[#8892b0] leading-10 tracking-wider font-medium text-[35px] sm:text-[40px] md:text-[50px] lg:text-[60px]">
            I build things for the web.
          </h3>
          <p className="text-[#8892b0] mt-2 lg:mt-5 max-w-[600px] tracking-wide font-medium text-sm sm:text-base md:text-base">
            I'm a full-stack software developer specializing in building (and
            occasionally designing) exceptional digital experiences.
          </p>
          <a
            className="text-highlight flex justify-center items-center border-[#64ffda] mt-[50px] border bg-transparent hover:bg-[#64ffda] hover:bg-opacity-10 rounded-md transition duration-300 ease-out w-[150px] h-[46px] md:w-[160px] md:h-[56px]"
            href="mailto:mail.kshitizbaniya@gmail.com"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
