import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Javascript",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Git",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Confluence",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "JIRA",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "VS Code",
    level: "45",
  },
];

export const projects: IProject[] = [
  { 
    name: "Blogger",
    description:
      "This app allows you to create blogs",
    image_path: "/images/covid.jpg",
    deployed_url: "https://github.com/RohitV5/mern-project",
    github_url: "https://github.com/RohitV5/mern-project",
    category: ["react"],
    key_techs: ["React", "Node.js", "Material UI", "MongoDB"],
  },
  { 
    name: "Profiler",
    description:
      "This app allows you to manage user profiles.",
    image_path: "/images/covid.jpg",
    deployed_url: "https://github.com/RohitV5/DJANGO_profiles-rest-api",
    github_url: "https://github.com/RohitV5/DJANGO_profiles-rest-api",
    category: ["react"],
    key_techs: ["Python", "Django", "Postgres"],
  }

];
