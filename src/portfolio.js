import emoji from "react-easy-emoji";

import googlelogo from "./assets/img/icons/common/bunihub.jpg";
import github from "./assets/img/icons/common/ucc.png";
import airbnb from "./assets/img/icons/common/airbnbLogo.png";

export const greetings = {
	name: "iddi Msangi",
	title: "Hi all, I'm iddi",
	description:
		"Innovative Front End Developer with 3 years experience building and maintaining responsive websites in the recruiting industry.Possess a Computer Science degree and excellent analytical and problem-solving skills.I'm offering extensive knowledge of web development and creating attractive websites.",
	resumeLink: "https://drive.google.com/drive/u/0/my-drive",
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
	subTitle:
		"FRONT-END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
		emoji(
			"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		),
		emoji(
			"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
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
		// {
		// 	skillName: "docker",
		// 	fontAwesomeClassname: "logos:docker-icon",
		// },
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
		progressPercentage: "70",
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
		subHeader: "Certificate in Advanced Level Education in Physics, Chemistry and Mathematics(PCM",
		duration: "July 2012 - May 2014",
		
	},
];

export const experience = [
	{
		role: "Front End Developer, Dar es salaam",
		company: "Bunihub",
		companylogo: googlelogo,
		date: "June 2018 – Present",
		desc: " building and maintaining responsive websites in the recruiting industry",
		descBullets: [
			"Maintain and improve website",
			"Collaborate with back-end developers and web designers to improve usabili",
		],
	},
	{
		role: "Front-End Developer",
		company: "UCC",
		companylogo: github,
		date: "May 2017 – May 2018",
		desc: "Use markup languages like HTML to create user-friendly web pages",
		descBullets: [
			"Maintain and improve website",
			"Collaborate with back-end developers and web designers to improve usabili",
		],
	},
	{
		role: "Software Engineer Intern",
		company: "NAKI CONSTRUCTION CO LTD",
		companylogo: airbnb,
		date: "Jan 2019 – Sep 2020",
		desc: "Analyzing system logs and identifying potential issues with computer systems",
		descBullets: [
			"Maintain and improve website",
			"Collaborate with back-end developers and web designers to improve usabili",
		],
	},
];

export const projects = [
	{
		name: "Jipeh Cleaning Company",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		link: "http://jipehcompany.co.tz/",
	},
	{
		name: "Vitamin Genge",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
	},
	{
		name: "Ultra Architech Website",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
		link: "https://example.com",
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
