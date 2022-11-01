const Header: React.FC = () => {
  return (
    <header className="bg-[#112240] sticky z-50 top-0 h-[72px] shadow-lg flex flex-col justify-center">
      <div className="flex justify-between items-center px-[20px] md:px-[40px]">
        <a
          href="#top"
          className="text-sm sm:text-base md:text-lg font-bold tracking-widest cursor-pointer hover:opacity-80 transition duration-200 ease-out text-highlight"
        >
          {"<KB/>"}
        </a>
        <nav>
          <a
            target="_blank"
            href="/files/resume.pdf"
            className="text-highlight tracking-wide text-sm md:text-base border border-[#64ffda] rounded-sm px-3 py-2 hover:bg-[#64ffda] hover:bg-opacity-10 transition duration-300 ease-out"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
