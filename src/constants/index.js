import project1 from "../assets/projects/paloma.png";
import project2 from "../assets/projects/staffify.png";
import project3 from "../assets/projects/popshake.png";
import project4 from "../assets/projects/QR.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - present",
    role: "Freelance Fullstack developer",
    company: "N/A",
    description: `Designed and developed user interfaces for
     web applications using React JS. Worked closely
      with clients to understand and meet the clients needs.`,
    technologies: ["HTML", "CSS", "TypeScript", "JavaScript", "MongoDB", "Redux", "Node JS"],
  },
  
  
  {
    year: "2020 - present",
    role: "Customer Service Assistant",
    company: "Lidl",
    description: `Contributed to daily tasks working with a team and satisfying customer needs.`,
    technologies: ["N/A"],
  },
];

export const PROJECTS = [
  {
    title: "Paloma Vintage Clothing E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["TypeScript", "JavaScript","CSS", "React", "Node.js", "MongoDB", "Redux", "Firebase"],
    url: "https://palomavintage.netlify.app/",
  },
  {
    title: "Staffify",
    image: project2,
    description:
      "An application for managing staff, payment and attendance with features such as staff creation, assignment, payment and attendance tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    url: "https://staffify.netlify.app/",
  },
  {
    title: "Recipe Finder",
    image: project3,
    description:
      "A website that finds a variety of recipes ranging from italian cuisine to Korean food etc..",
    technologies: ["TypeScript", "React", "Flowbite"],
    url: "https://popshake.netlify.app/",
  },
  {
    title: "Custom QR code generator",
    image: project4,
    description:
      "A web application that enables the user to create a custom QR code to a designated URL.",
    technologies: ["React", "Typescript"],
    url: "https://cc-quickercodegenerator.netlify.app/",
  },
];

export const CONTACT = {
  address: "London, UK ",
  phoneNo: "07713076333 ",
  email: "sombas100@yahoo.com",
};
