import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  tcs,
  intelligence,
  sun,
  payment,
  intelligence2,
  rental
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Tata Consultancy Services",
    icon: tcs,
    iconBg: "#383E56",
    date: "September 2021 -  Present",
    points: [
      // "Developing and maintaining web applications using React.js, Next.js, Express.js and other related technologies.",
      "Developed and maintained reliable web applications with user-friendly interfaces using ReactJS, Next.js, and Tailwind CSS, collaborating with cross-functional teams to meet project requirements",
      "Managed databases (MySQL, MongoDB) and developed scalable JavaScript applications using Express.js, ensuring data integrity, security, and maintainability.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
},
  {
    title: "Founder and CEO",
    company_name: "IntElligence Tech Solutions",
    icon: intelligence,
    iconBg: "#000000",
    date: "July 2022 - Present",
    points: [
      "As founder and CEO, I lead IntElligence Tech Solutions in creating cutting-edge web applications, staying ahead of industry trends.",
      "I oversee the entire development process, ensuring top-quality code and seamless, responsive applications using the latest technologies.",
      "I translate client needs into robust, user-friendly applications, delivering custom solutions that drive growth and engagement.",
      "Under my leadership, we've launched numerous high-impact web applications, improving efficiency and generating significant ROI for clients.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Sun Mobility",
    icon: sun,
    iconBg: "#E6DEDD",
    date: "March 2021 - August 2021",
    points: [
      "Collaborated with a team to create and maintain web applications, gaining hands-on experience in HTML5, CSS3, and JavaScript.",
      "Assisted in designing and developing user interfaces with React.JS, creating interactive and responsive web experiences.",
      "Contributed to web application development and maintenance, improving performance through active participation in codebase enhancements and troubleshooting.",
      "Gained exposure to frameworks like Bootstrap by helping create visually appealing and user-friendly web interfaces.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Jaser proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jaser does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Jaser optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Payment App",
    description:
      // "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      "A full-featured web application developed using the MERN stack, designed to simulate the functionality of PayTM. This app supports user registration, authentication, and secure banking transactions. Built with modern tools and technologies such as React with Vite, Tailwind CSS for styling.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: payment,
    source_code_link: "https://github.com/syedahmedullah14/PayTM-Project",
  },
  {
    name: "Company Portfolio",
    description:
      "Built a responsive portfolio using ReactJS, leveraging components and state management for a seamless user experience across devices. Developed a feature for dynamic theme changes, enhancing user engagement by allowing personalization of background and foreground colors through efficient state management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootsrap5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: intelligence2,
    source_code_link: "https://int-elligence.co.uk/",
  },
  {
    name: "Rental Management System",
    description:
      "Developed a robust system for a construction equipment company to manage customer records, including transaction history, products, suppliers, and rental records, ensuring secure and efficient data storage and retrieval. Integrated a billing and invoicing system, allowing for accurate and streamlined financial transactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
    ],
    image: rental,
    source_code_link: "https://github.com/syedahmedullah14",
  },
];

export { services, technologies, experiences, testimonials, projects };
