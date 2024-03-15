import {
  javascript,
  java,
  mysql,
  html,
  css,
  reactjs,
  tailwind,
  moviesapp,
  CheckWeather,
  educationLogo,
  post1,
  awsCertificate,
  fullStackCertificate,
  dp,
} from "../assets";

const navLinks = [
  {
    id: "feed",
    title: "Feed",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "about",
    title: "About",
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
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const feed = [
  {
    key: 1,
    dp: dp,
    postDate: "Jul, 2023",
    postDiscription: [
      "Excited to share that I've sarted 30-day JavaScript challenge on LeetCode! 📆",
      "Today marks day 1st of the challenge, and I've already tackled 3 problems related to closures in JavaScript. 💻💡",
    ],
    postImg: post1,
  },
  {
    key: 2,
    dp: dp,
    postDate: "Dec-19, 2023",
    postDiscription: [
      "🎉 Just earned my AWS Cloud Practitioner Certification! 🚀 Thrilled to share that I've successfully navigated the complexities of AWS and gained a solid understanding of cloud essentials. ",
    ],
    postImg: awsCertificate,
  },
  {
    key: 3,
    dp: dp,
    postDate: "Jul, 2023",
    postDiscription: [
      "🚀 Exciting News: I'm thrilled to announce that I've just completed my Advanced Certificate Program in Full Stack Software Development with a specialization in Cloud Computing!",
    ],
    postImg: fullStackCertificate,
  },
];
const education = [
  {
    key: 1,
    title: "MCA",
    subtitle: "Manipal University",
    date: "Oct-2023 -  present",
    icon: educationLogo,
    iconBg: "#383E56",
    discription:
      "I am currently pursuing my Master of Computer Applications (MCA) degree. Some key areas of study include: Software Engineering, Database Management Systems, Programming Languages, Networking and Security, Data Structures and Algorithms",
    link: "",
  },
  {
    key: 2,
    title: "Full Stack Software Development",
    subtitle: "IIT Roorke",
    date: "May-2022 - Jul-2023",
    icon: educationLogo,
    iconBg: "#383E56",
    discription:
      "This rigorous and immersive course provided me with a solid foundation in both front-end and back-end development technologies, equipping me with the necessary skills to excel in the dynamic field of software engineering.",
    link: "https://eict.iitr.ac.in/wp-content/uploads/IITR-GL-FSD-M2M-23-182-scaled.jpg",
  },
];
const projects = [
  {
    name: "Movies On Tip",
    description:
      "The project aims to create a website where we maintain the latest films, Upcoming films, Top rated movies along with their details and manage user favorites.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Axios APIs",
        color: "green-text-gradient",
      },
      {
        name: "React Bootstarp",
        color: "pink-text-gradient",
      },
    ],
    image: moviesapp,
    source_code_link: "https://github.com/dakshMukul/MoviesOnTip",
  },
  {
    name: "Weather App",
    description:
      "This weather app will show the weather information for a specific city. User should be able to get the weather information for any valid cities",
    tags: [
      {
        name: "Vanilla js",
        color: "blue-text-gradient",
      },
      {
        name: "Fetch API",
        color: "green-text-gradient",
      },
      {
        name: "DOM Manipulation",
        color: "pink-text-gradient",
      },
    ],
    image: CheckWeather,
    source_code_link: "https://dakshmukul.github.io/CheckWeather/",
  },
];

export { navLinks, technologies, projects, education, feed };
