const Email: React.FC = () => {
  return (
    <div className="hidden xl:inline w-[40px] fixed bottom-0 left-auto right-[40px] z-[10] text-[#fff]">
      <div className="flex flex-col items-center relative after:block after:w-[1px] after:h-[90px] after:mx-auto after:my-0 after:bg-[#a8b2d1]">
        <a
          href="mailto:mail.kshitizbaniya@gmail.com"
          className="mx-auto my-[20px] text-[12px] tracking-[0.1em] vertical-rl hover:text-[#64ffda] hover:tracking-[0.2em] transition transform duration-300 ease-out "
        >
          mail.kshitizbaniya@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Email;
