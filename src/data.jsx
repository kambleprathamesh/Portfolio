import java from "./images/java.png";
import js from "./images/java-script.png";
import ts from "./images/Typescrip.png";
import sql from "./images/icons8-mysql-logo-48.png";
import pgs from "./images/postgresql.png"


import ejs from "./images/express.jpg";
import njs from "./images/nodejs.png";

import html from "./images/html-5.png";
import react from "./images/react.png";
import css from "./images/css.png";
import tw from "./images/Tailwind_CSS_Logo.png";
import bt from "./images/bootstrap.png";

import mdb from "./images/icons8-mongo-db-48.png";

import git from "./images/git.png";
import gb from "./images/github.jpg";
import dok from "./images/Docker-Logo-700x394.png";

import speaker from "./images/speaker.jpeg";
import hbf from "./images/hactoberfest.jpeg";
import nss from "./images/nic.jpeg";

import rgit from "./images/rgit.jpeg";
import elctroviz from "./images/elctroviz.jpeg";
import gits from "./images/gits.jpeg";
import SIH from "./images/sih.jpeg";
import webdev from "./images/webDev.png";
import AWS from "./images/AWS.png";
import csi from "./images/csi.png";
import nsl from "./images/nss.svg";
const backend = [
  {
    id: 1,
    skill: "Express JS",
    img: ejs,
  },

  {
    id: 2,
    skill: "Node JS",
    img: njs,
  },
  {
    id: 3,
    skill: "PostgreSQL (Prisma)",
    img: pgs,
  },
  {
    id: 4,
    skill: "MongoDB (Mongoose)" ,
    img: mdb,
  },
];

const languages = [
  {
    id: 1,
    skill: "Java",
    img: java,
  },
  {
    id: 2,
    skill: "TypeScirpt",
    img: ts,
  },
  {
    id: 3,
    skill: "JavaScript",
    img: js,
  },
  {
    id: 4,
    skill: "SQL",
    img: sql,
  },
  
];

const frontend = [
  {
    id: 1,
    skill: "HTML",
    img: html,
  },
  {
    id: 2,
    skill: "React JS",
    img: react,
  },
  {
    id: 3,
    skill: "CSS",
    img: css,
  },
  {
    id: 4,
    skill: "Tailwind CSS",
    img: tw,
  },
  {
    id: 5,
    skill: "BootStrap",
    img: bt,
  },
];

const tools = [
  {
    id: 1,
    skill: "Git",
    img: git,
  },
  {
    id: 2,
    skill: "GitHub",
    img: gb,
  },
  {
    id: 3,
    skill: "AWS EC2, S3, CloudFront",
    img: AWS,
  },
  {
    id: 4,
    skill: "Docker",
    img: dok,
  },
];


const commonAch = [
  {
    title: "SPEAKER WEB DEV BOOT CAMP",
    img: webdev,
    subheading:
      "WEB DEVELOPMENT BOOTCAMP FOR DMCE STUDENTS (HTML, CSS, JAVASCRIPT)",
    date: "04-05 SEPTEMBER 2024",
    desc: "Conducted an engaging workshop on HTML, CSS, and JavaScript, designed to introduce students to essential web development concepts. The session focused on building a strong foundation in structuring web pages with HTML, styling them with CSS, and adding dynamic features using JavaScript. Participants, mainly second and third-year students, showed great enthusiasm as they explored the fundamentals of creating responsive and interactive websites. The experience was both fulfilling and enjoyable, fostering curiosity and creativity in web development.",
    desc1:
      "Hosted a hands-on Git-GitHub workshop to prepare students for Hacktoberfest, an open-source festival. Covered Hacktoberfest basics, Git-GitHub commands, and making pull requests. The eager second and third-year attendees made it a rewarding experience.",
    link: "",
  },

  {
    title: "SPEAKER GITHUB & HACKTOBERFEST",
    img: speaker,
    subheading:
      "HANDS-ON GITHUB SESSION FOR DMCE STUDENTS TO PREP FOR HACKTOBERFEST",
    date: "09 OCTOBER 2023",
    desc: "Hosting a hands-on workshop on Git-GitHub for students. The workshop was aimed at preparing them for Hacktoberfest, an open-source festival held every October where participants can contribute to projects in both coding and non-coding capacities. The attendees, primarily second and third-year students, were eager to learn. We covered topics such as an introduction to Hacktoberfest, Git-GitHub basics and commands, and how to make pull requests to contribute. It was an exciting and rewarding experience!",
    desc1:
      "Hosted a hands-on Git-GitHub workshop to prepare students for Hacktoberfest, an open-source festival. Covered Hacktoberfest basics, Git-GitHub commands, and making pull requests. The eager second and third-year attendees made it a rewarding experience.",
    link: "https://www.linkedin.com/posts/prathamesh-kamble19_csi-git-tech-activity-7127158817624104961-xFN6?utm_source=share&utm_medium=member_desktop",
  },

  {
    title: "NSS NATIONAL LEVEL CAMP",
    img: nss,
    subheading:
      "REPRESENTING MAHARASHTRA AT THE NATIONAL INTEGRATION CAMP, HARYANA",
    date: "July-2023",
    desc: "I had the honor of representing Maharashtra at the National Integration Camp, hosted at Chaudhary Charan Singh Haryana Agriculture University. Our group of seven volunteers proudly represented our state. The camp, featuring 16 states, celebrated cultural diversity through traditional performances and activities. It was also a platform for personal growth, with inspirational speeches and engaging competitions. The camp fostered deep connections among volunteers from different states, enriching the experience further.",
    desc1:
      "Represented Maharashtra at the National Integration Camp at Chaudhary Charan Singh Haryana Agriculture University, joining volunteers from 16 states. Celebrated cultural diversity with traditional performances and personal growth through speeches and competitions. Fostered deep connections among volunteers, enriching the experience.",
    link: "https://www.linkedin.com/posts/prathamesh-kamble19_nationalintegration-culturaldiversity-maharashtrapride-activity-7126872678656790528-WmQ1?utm_source=share&utm_medium=member_desktop",
  },

  {
    title: "OPEN SOURCE CONTRIBUTION",
    img: hbf,
    subheading:
      "HACKTOBERFEST 2023: MAKING GLOBAL CONTRIBUTIONS IN OPEN SOURCE",
    date: "October 2023",
    desc: "During Hacktoberfest 2023, I made four significant Pull Requests, showcasing the collaborative power of coding. My first PR ranked among the top 50,000 contributors globally, underscoring the reach of open-source development. Notably, Tree Nation honored my dedication by planting a tree in Tanzania. For my efforts, I received a DIGITAL REWARD KIT and HOLOPIN AVATAR, recognizing the hours invested in the open-source community.",
    desc1:
      "At Hacktoberfest 2023, I made four significant Pull Requests, ranking in the top 50,000 globally. Tree Nation honored my contributions with a tree planted in Tanzania, and I received a DIGITAL REWARD KIT and HOLOPIN AVATAR for my efforts in the open-source community.",
    link: "https://www.linkedin.com/posts/prathamesh-kamble19_hacktoberfest-opensourcemagic-codeforgood-activity-7127829161603121153-7eHR?utm_source=share&utm_medium=member_desktop",
  },
];

const hackathon = [
  {
    img: SIH, // Ensure SIH is imported correctly
    subheading: "WINNER SMART INDIA HACKATHON 2024",
    date: "11-12 December 2024", // Proper date format
    desc: "Team Astraa triumphed at SIH 2024, representing Datta Meghe College of Engineering with AquaDB, a geo-referenced fish catch repository under PSID SIH 1657. Despite challenges, we developed an advanced solution and showcased it at the Hyderabad Grand Finale. Grateful to our mentors and seniors—this victory is for all of us! ",
    link: "https://www.linkedin.com/posts/prathamesh-kamble19_sih-2024-team-astraa-activity-7276945938168844288-iVq2?utm_source=share&utm_medium=member_desktop",
  },
  {
    img: rgit,
    subheading: "WINNER, RECCURSION, RGIT, MUMBAI",
    date: " 13-14 March 2024",
    desc: "Team Brewing JavaScript emerged victorious at Recursion 5.0 at Rajiv Gandhi Institute of Technology, triumphing over 130 teams. Our winning solution for the Multimodal Travel Planner integrated image recognition, text-based search, hotel recommendations, and nearby attractions suggestions, enhancing the travel experience seamlessly.",

    link: "https://www.linkedin.com/posts/prathamesh-kamble19_hackathon-recursion-rgit-activity-7175902254724440067-A7gy?utm_source=share&utm_medium=member_desktop",
  },
  {
    img: elctroviz,
    subheading: "WINNER, ELECTROVIZ, DMCE, AIROLI",
    date: " 04 April 2024",
    desc: "At the Electrowiz - National Level Project Presentation, Team Brewing JavaScript has won the very sought-after first prize! In the extremely competitive software area, our creation, CampusConnect, took first prize.",
    link: "https://www.linkedin.com/posts/prathamesh-kamble19_drumroll-please-breaking-news-folks-activity-7193887215934959617-NHbP?utm_source=share&utm_medium=member_desktop",
  },
  {
    img: gits,
    subheading: "PARTICIPATE IN MULTIPLE HACKATHONS",
    date: " January-April 2024",
    desc: "In March, my team won two hackathons with innovative projects. At Hacksparrow, we developed an On Voice Command News Website for the blind. At Hackathon 2.0, we created an Interactive Platform for college placements. Team Brewing JavaScript pushed boundaries, turning challenges into impactful solutions for an endless future.",
    link: "https://www.linkedin.com/posts/prathamesh-kamble19_hackathonheroes-innovation-hackathon-activity-7193884496558014464-0OCF?utm_source=share&utm_medium=member_desktop",
  },
];

const education = [
  {
    deg: "Bachelor of Engineering,[Computer]",
    school: "Datta Meghe College of Engineering",
    passing: "2021 - 2025",
    place: "Airoli, Maharashtra",
  },
  {
    deg: "Higher Secondary School",
    school: "Smt.CHM College",
    passing: "2020-2021",
    place: "Ulhasnagar, Maharashtra",
  },
  //   {
  //     deg: "SSC",
  //     school: "Infant Jesus School,Ambernath",
  //     passing: "2019",
  //   },
];

const organization = [
  {
    organization: "Computer Society Of India DMCE",
    img: csi,
    passing: "2023-2025",
    position1: "Technical Head 2024-Present",
    position: "Technical and Development member 2023-2024",
  },
  {
    organization: "National Service Scheme",
    img: nsl,
    passing: "2022-2024",
    position: "Volunteer",
  },
];

const sidemenu = [
  {
    menu: "Home",
    id: "#home",
  },
  {
    menu: "About",
    id: "#about",
  },

  {
    menu: "Skills",
    id: "#skills",
  },
  {
    menu: "Project",
    id: "#project",
  },
  {
    menu: "Experience",
    id: "#exp",
  },

  {
    menu: "Education",
    id: "#education",
  },

  {
    menu: "Contact",
    id: "#contact",
  },
];
export {
  backend,
  languages,
  frontend,
  tools,
  commonAch,
  hackathon,
  education,
  organization,
  sidemenu,
};
