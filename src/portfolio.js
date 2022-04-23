import emoji from "react-easy-emoji";

import googlelogo from "./assets/img/icons/common/bunihub.jpg";
import github from "./assets/img/icons/common/ucc.png";
import naki from "./assets/img/icons/common/naki.jpg";
import nipale from "./assets/img/icons/common/nipale.png";
import airbnbLogo from "./assets/img/icons/common/airbnbLogo.png";

export const greetings = {
  name: "iddi Msangi",
  title: "Hi all, I'm iddi",
  description:
    "Solution-driven front-end developer with 4.5 years of experience developing consumer-focused websites using HTML5,CSS3,SASS,JavaScript,Typescript and Reactjs. Built web applications for desktop and mobile app users meeting highest standards for web design, user experience,best practices and speed.Designed and developed web applications across multiple APIs,third-party integrations and databases.",
  resumeLink:
    "https://drive.google.com/file/d/1xWDTfpKmSGgDVahhQDVaPsdRgGfVCjqk/view?usp=sharing",
};

export const openSource = {
  githubUserName: "iddimsangi",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://www.facebook.com/iddimsangi",
  instagram: "https://www.instagram.com/iddiimsangii",
  twitter: "https://twitter.com/iddi_a",
  github: "https://github.com/iddimsangi",
  linkedin: "https://www.linkedin.com/in/iddimsangi/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "FRONT-END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Developed the Front-End and User Interface of  website applications using Javascript, ES6, React, and Redux."
    ),
    emoji(
      "⚡ Integrated API endpoints with the UI designs using React thereby enabling the front end to communicate seamlessly"
    ),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "logos:sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    // {
    // 	skillName: "flutter",
    // 	fontAwesomeClassname: "logos:flutter",
    // },
    // {
    // 	skillName: "swift",
    // 	fontAwesomeClassname: "vscode-icons:file-type-swift",
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    // {
    // 	skillName: "aws",
    // 	fontAwesomeClassname: "logos:aws",
    // },
    {
      skillName: "firebase",
      fontAwesomeClassname: "logos:firebase",
    },
    // {
    // 	skillName: "python",
    // 	fontAwesomeClassname: "logos:python",
    // },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "logos:docker-icon",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "50",
  },
  {
    Stack: "Programming",
    progressPercentage: "80",
  },
];

export const educationInfo = [
  {
    schoolName: "University of Dar es salaam(UDSM)",
    subHeader: "Bachelor Degree of Computer Science",
    duration: "September 2014 - october 2018",
    desc: "Participated in FYP(Final year project) called TUSEME .",
    descBullets: [
      "A system designed to help local government to solve problems",
      "A system designed to help local people to speak out for the help",
    ],
  },
  {
    schoolName: "University of oslo | DHIS2 Academy",
    subHeader: "Certificate of DHIS2 System Design And Analysis Level 1",
    duration: "August 2020 - September 2020",
    desc: "Participated in DHIS 2 system.",
    descBullets: [
      "Learning and interacting with DHIS2 system",
      "Data analyzing and manipulations",
    ],
  },
  {
    schoolName: "Tosamaganga Secondary school",
    subHeader:
      "Certificate in Advanced Level Education in Physics, Chemistry and Mathematics(PCM",
    duration: "July 2012 - May 2014",
  },
];

export const experience = [
  {
    role: "Front end developer(part-Time) At ZEROMOJA Company LTD",
    company: "Nipale",
    companylogo: nipale,
    date: "January 2022 – Present",
    desc: " Developed the Front-End and User Interface of nipale web applications using Javascript, ES6, React, and Redux.",
    descBullets: [
      "Maintain and improve website with new designs",
      "Collaborate with back-end developers and web designers to improve usability",
      "Applied redux middleware using redux-promise, redux-thunk and redux-toolkit.",
      "Writing react tests to testing existing react components and refactoring existing code.",
      "Used AJAX calls and requesting JSON information through REST APIs to fetch data and secure client’s information from server asynchronously.",
    ],
  },
  {
    role: "Software Consultant(Remote),New Dehli, india",
    company: "Aeturn",
    companylogo: airbnbLogo,
    date: "October 2021 – December 2021",
    desc: "Developed and implemented the UI functionalities of the report module section of the DHIS web application using React.js, Redux, Material UI and interacting with DHIS2 Components.",
    descBullets: [
      "Used React.js library functions for the logical implementation part at client side for all the application.",
      "Fixed bugs arising from errors and resulting in a more stable performance of the DHIS2 report application.",
      "Integrated API endpoints with the UI designs using React thereby enabling the front end to communicate seamlessly with the servers and APIs at the back end.",
    ],
  },
  {
    role: "Front End Developer, Dar es salaam",
    company: "Bunihub",
    companylogo: googlelogo,
    date: "October 2020 – August 2021",
    desc: " building and maintaining responsive websites in the recruiting industry",
    descBullets: [
      "Collaborated with designers and developer team to designed different websites using HTML, CSS, Javascript, and Reactjs.",
      "Collaborate with back-end developers and web designers to improve usabili",
      "Maintaining Parent and child elements by using State and Props In React.js.",
      "Implemented Initial setup and component migration to Redux.",
      "Integrated API endpoints with the UI designs using React thereby enabling the front end to communicate seamlessly with the servers and APIs at the backend.",
    ],
  },
  {
    role: "Junior Frontend Developer(Internship) At UCC",
    company: "UCC",
    companylogo: github,
    date: "May 2017 – May 2018",
    desc: "Use markup languages like HTML to create user-friendly web pages",
    descBullets: [
      "Used Bootstrap Grid System and CSS3 Media Queries to develop single responsive application with good user experience in all platforms like desktops, tablets and mobile phones.",
      "Collaborate with back-end developers and web designers to improve usabili",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "NAKI CONSTRUCTION CO LTD",
    companylogo: naki,
    date: "Jan 2019 – Sep 2020",
    desc: "Analyzing system logs and identifying potential issues with computer systems",
    descBullets: [
      "Maintain and improve website",
      "Collaborate with back-end developers and web designers to improve usability",
      "Applied advanced HTML, JavaScript, and CSS to deliver cutting-edge user interfaces and components.",
      "Implemented websites responsiveness for mobile devices",
    ],
  },
];

export const projects = [
  {
    name: "Nipale",
    desc: "Nipale is a website which helps people who wants to having fun and enjoy, to discover the best outing places in Dar es salaam",
    link: "https://demo.nipale.com/",
  },
  {
    name: "React simple eShop App",
    desc: "Simple react redux eShop Application, where data are fetched from online Api and displayed, and also you can click a particular product and view its details.",
    link: "https://simple-eshop-app.netlify.app/",
  },
  {
    name: "React Dashboard",
    desc: "Simple Dashboard designed by react and it is responsive",
    link: "https://dashboard-iddi.netlify.app",
  },
  {
    name: "Ufuta(Sesame) website",
    desc: "Sesame website is the site which shows sesame products , its availability and also the company can export sesame all over the east African countries.",
    link: "https://ufutacrispo.netlify.app",
  },
  {
    name: "Ultra-archtect company website",
    desc: "ULTRA Architects is a quality-driven Local Architectural Firm based in Dar es Salaam, Tanzania,East Africa.",
    link: "https://ultra-archtech.netlify.app",
  },
  {
    name: "Mainland Safari website",
    desc: "Mainland Safari tours dreamed of bringing tourists into this beautiful country, having the best experiences with the wildlife, and being able to share the best of what Tanzania has to offer especially our lovely country Tanzania.",
    link: "https://mainland-tours.netlify.app",
  },
  {
    name: "Antd todo app",
    desc: "Ant design todo Application, where you can add, mark as complete and also filter todos depends on status.",
    link: "https://antd-todo-app.netlify.app",
  },
];

export const feedbacks = [
  {
    name: "Aydan Zorawanga",
    feedback:
      "We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at iddi Msangi has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose iddi web developer services for u.",
  },
  {
    name: "Ayoub Goga",
    feedback:
      "the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
  },
];
