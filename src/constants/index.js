import project1 from "../assets/projects/paloma.png";
import project2 from "../assets/projects/staffify.png";
import project3 from "../assets/projects/popshake.png";
import project4 from "../assets/projects/easylearn.png";
import project5 from "../assets/portora-landing-page.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a 
skill set for crafting robust and scalable web applications. 
My goal is to leverage my expertise to create innovative solutions that drive business 
growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.
 I have worked with a variety of technologies, including ReactJS, Next.JS, Node, C#, Python, PostgreSQL, MongoDB and more. 
 My journey in web development began with a deep curiosity for how web applications work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges.
  I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies,
   and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Febuary 2025 - May 2025",
    role: "Fullstack Developer Intern",
    company: "Softu LTD",
    description: `Designed and created websites & applications
          for third party clients under specific guidelines and requests using a variety of frontend
          and backend technologies.`,
    technologies: ["TypeScript", "JavaScript", "Postgresql", "NodeJS", "TailwindCSS", "Redux"],
  },
  {
    year: "March 2023 - present",
    role: "Freelance Fullstack developer",
    company: "N/A",
    description: `Designed and developed user interfaces for
     web applications using React JS. Worked closely
      with clients to understand and meet the clients needs.`,
    technologies: ["TypeScript", "JavaScript", "MongoDB", "NodeJS", "C#", ".NET", "Python", "Django"],
  },
];

export const PROJECTS = [
  {
    title: "Portora",
    image: project5,
    description:
      "Portora is a fullstack SaaS client portal designed to streamline project collaboration between freelancers and their clients. It offers a secure, centralized workspace for managing projects, exchanging files, sharing feedback, and monitoring progress all from a clean, intuitive dashboard.",
    technologies: ["React", "TypeScript", "JavaScript", "ContextAPI", "TailWindCSS", "NodeJS", "Socket.Io", "ExpressJS", "PostgreSQL", "Stripe" ],
    url: "https://www.portora.net/welcome",
  },
  {
    title: "EasyLearn",
    image: project4,
    description:
      "A learning management system (LMS) that allows users to enroll on online courses and gain access to video lessons. Includes admin features with the ability to create, edit and delete courses as well as view current users, courses and enrollments. *Admin account: admin@gmail.com | password: admin",
    technologies: ["React", "TypeScript", "JavaScript", "Redux", "ChakraUI", "TailWindCSS", "NodeJS", "ExpressJS", "PostgreSQL"],
    url: "https://easy-learn-mu.vercel.app/",
  },
  {
    title: "Paloma Vintage Clothing E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features such as product listing, shopping cart, and user authentication.",
    technologies: ["React", "TypeScript",  "JavaScript", "Redux", "TailWindCSS",  "NodeJS", "MongoDB",  "Firebase"],
    url: "https://palomavintage.netlify.app/",
  },
  {
    title: "Staffify",
    image: project2,
    description:
      "An application for managing staff, payment and attendance with features such as staff creation, assignment, payment and attendance tracking.",
    technologies: ["React", "TypeScript", "Firebase", "Flowbite", "NodeJS", "ExpressJS", "MongoDB",],
    url: "https://staffify.netlify.app/",
  },
  {
    title: "Recipe Finder",
    image: project3,
    description:
      "An application that finds a variety of recipes ranging from italian cuisine to Korean food and much more.",
    technologies: ["React", "TypeScript", "Flowbite"],
    url: "https://popshake.netlify.app/",
  },
  
];

export const CONTACT = {
  address: "London, UK ",
  phoneNo: "07713076333 ",
  email: "sombas100@yahoo.com",
};
