export interface Project {
  title: string;
  technologies: string[];
  gitLink: string | null;
  externalLink: string | null;
  image: string;
  description: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "PEC HUB",
    technologies: [
      "Next.js",
      "Express",
      "MongoDB",
      "Tailwind Css",
      "Cloudinary",
    ],
    gitLink: null,
    externalLink: "https://www.pechub.tk/",
    image: "pechub.png",
    description:
      "A Platform for all the students and faculties to help one another, publish questions/answers simply queries, class schedules and notes, broadcast important notices and information sharing",
    featured: true,
  },
  {
    title: "Todos",
    technologies: [
      "Next.js",
      "Next-auth",
      "Apollo-Server-Express",
      "GraphQL",
      "MongoDB",
      "Prisma",
      "Tailwind Css",
    ],
    gitLink: "https://github.com/xitiz007/todos-backend",
    externalLink: null,
    image: "todos.png",
    description:
      "The Ultimate Task Management Software To Organize Your Work And Life. Get All Those Tasks Out Of Your Head And Onto Your To-Do List To Regain Clarity & Do More.",
    featured: true,
  },
  {
    title: "Damare Engineering Consultancy",
    technologies: ["Next.js", "Tailwind Css"],
    gitLink: null,
    externalLink: "https://zeta-engineering-xitiz007.vercel.app/",
    image: "damare.png",
    description:
      "Damare is an engineering consulting company founded in 2019 by the group of experienced professionals. We are committed to providing quality professional engineering services to enhance the communities where our clients live and work. ",
    featured: false,
  },
  {
    title: "Amazon Clone",
    technologies: ["Next.js", "fakestore API", "Tailwind Css"],
    gitLink: "https://github.com/xitiz007/amazon-clone",
    externalLink: "https://amazon-clone-fs2839q44-xitiz007.vercel.app/",
    image: "amazon-clone.png",
    description:
      "Amazon clone with fake products from fakestore api, google authentication etc",
    featured: false,
  },
  {
    title: "Tic-Tac-Toe",
    technologies: ["Html", "Css", "Javascript"],
    gitLink: "https://github.com/xitiz007/tic-tac-toe",
    externalLink: "https://xitiz007.github.io/tic-tac-toe/",
    image: "tic-tac-toe.png",
    description: "Multiplayer online game",
    featured: false,
  },
];

export default projects;
