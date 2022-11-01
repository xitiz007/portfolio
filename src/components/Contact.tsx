const Contact: React.FC = () => {
  return (
    <section className="py-[100px]">
      <div className="max-w-[600px] mx-auto flex flex-col justify-center items-center">
        <h5 className="text-highlight text-base tracking-widest font-normal">What's Next?</h5>
        <h2 className="text-[#ccd6f6] text-[40px] md:text-[50px] lg:text-[60px] font-semibold tracking-wider">
          Get In Touch
        </h2>
        <p className="text-[#8892b0] text-center font-normal text-base">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <a
          className="flex text-highlight justify-center items-center tracking-wide border-[#64ffda] mt-[50px] border bg-transparent hover:bg-[#64ffda] hover:bg-opacity-10 rounded-md transition duration-300 ease-out w-[150px] h-[46px] md:w-[160px] md:h-[56px]"
          href="mailto:mail.kshitizbaniya@gmail.com"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
