import { color } from "framer-motion";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  git,
  carrent,
  jobit,
  tripguide,
  tailwind,
  bankera,
  Weather_API,
  RBAC_UI,
  TWM,
  LMS_Emp,
  WP
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Node.js Developer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "AWS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png",
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "AWS Intern",
    company_name: "Brainovision Solutions (India) Pvt. Ltd",
    icon: "https://pbs.twimg.com/profile_images/965252872001683458/N_ccSwN__400x400.jpg",
    iconBg: "#383E76",
    date: "Jan 2024 - April 2024",
    points: [
      "Gained practical experience working with AWS services, including EC2, S3, and IAM, to develop scalable solutions.",
      "Assisted in troubleshooting and resolving complex technical issues, improving system performance and user experience.",
      "Conducted research on emerging AWS features, providing insights that informed team strategies and enhancements.",
      "Received guidance from industry professionals, gaining insights into cloud computing and career development in tech.",
    ],
  },
  {
    title: "Busniess Analyst & Busniess Development - Intern",
    company_name: "The Webiste Makers",
    icon: TWM,
    iconBg: "#383E76",
    date: "Jun 2025 - Sep 2025",
    points: [
      "Engaging with clients to understand their website needs and proposing tailored solutions.",
      "Acted as a bridge between clients and developers to ensure smooth communication and project delivery. ",
      "Guided developers with requirements and feedback to align technical work with client expectations..",
      "Managed CRM entries, follow-ups, and campaign responses, improving product–market fit through client insights. ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but he proved me wrong.",
    name: "Charan Reddy",
    designation: "Front End Developer",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like he does.",
    name: "Sainath Annavaram",
    designation: "Back End Developer",
  },
  {
    testimonial:
      "After optimized your website, our traffic increased by 50%. We can't thank them enough!",
    name: "Bhavana K",
    designation: "Junior Developer",
    company: "TCS",
  },
];

const projects = [
  {
    name: "Shopping Cart",
    description:
      "This Shopping Cart Web Application is a modern, user-friendly platform built with React.js that allows users to browse products, manage their shopping cart, and seamlessly complete their purchases.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/RoopTeja04/ShoppingZone_app.git",
  },
  {
    name: "Wellness Session",
    description:
      "A full-stack wellness platform demonstrates your ability to build end-to-end applications, handle user data, and perhaps implement authentication, implemented CURD operations and final sentiment analysis.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: WP,
    source_code_link: "https://github.com/RoopTeja04/Wellness_Session_Platform_Full_Stack_App",
  },
  {
    name: "Leave Management",
    description:
      "A practical, business-oriented app—useful for showcasing CRUD operations, dashboard or form handling, and logic related to leave tracking. Sending notifications to employees when their leave is approved or rejected.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDB",
        color: "white-text-gradient",
      }
    ],
    image: LMS_Emp,
    source_code_link: "https://github.com/RoopTeja04/Employee_Leave_Manager",
  },
  {
    name: "Bankera",
    description:
      "Bankera is a modern full-stack banking application designed to provide a seamless and secure banking experience. Built with a React.js front-end and a Java Spring Boot back-end, it ensures efficiency, scalability, and real-time transactions.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "white-text-gradient",
      }
    ],
    image: bankera,
    source_code_link: "https://github.com/RoopTeja04/bank_app.git",
  },
  {
    name: "Weather APP",
    description:
      "The Weather App is a user-friendly application that provides real-time weather updates using the OpenWeather API. It allows users to check current weather conditions, temperature, humidity, wind speed, and forecasts for any location worldwide.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "blue-text-gradient",
      }
    ],
    image: Weather_API,
    source_code_link: "https://github.com/RoopTeja04/Weather_API_App.git",
  },
  {
    name: "RBAC UI",
    description:
      "Role-Based Access Control (RBAC) System is a secure and scalable user management solution that regulates access to resources based on predefined roles and permissions. It allows administrators to assign specific roles (e.g., Admin, Editor, Viewer) to users.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "local-Storage",
        color: "green-text-gradient",
      }
    ],
    image: RBAC_UI,
    source_code_link: "https://github.com/RoopTeja04/RABC-UI.git",
  }
];

export { services, technologies, experiences, testimonials, projects };