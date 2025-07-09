import {
  SiJavascript, SiPython, SiCplusplus, SiTypescript, SiHtml5, SiCss3,
  SiReact, SiJquery, SiBootstrap, SiTailwindcss, SiBulma, SiAntdesign, SiNextdotjs,
  SiNodedotjs, SiExpress, SiDjango, SiFlask, SiFastapi, SiNestjs,
  SiMysql, SiPostgresql, SiMongodb, SiSqlite,
  SiGraphql, SiJsonwebtokens, SiSwagger,
  SiHeroku, SiDocker, SiGooglecloud,
  SiOpenai, SiGithub, SiGit, SiGooglegemini, SiTwilio, SiGitlab, SiSendgrid , SiStripe 
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa6";
import { TbApi, TbBrandDatabricks } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { MdDataObject } from "react-icons/md";

export const skillIcons = {
  "JavaScript": SiJavascript,
  "Python": SiPython,
  "Java": FaJava,
  "C++": SiCplusplus,
  "TypeScript": SiTypescript,
  "HTML": SiHtml5,
  "CSS": SiCss3,
  "HTML/CSS": SiHtml5,
  "SQL": SiMysql,
  "Bash": FaGitAlt,

  // Frontend
  "React": SiReact,
  "jQuery": SiJquery,
  "Bootstrap": SiBootstrap,
  "Tailwind CSS": SiTailwindcss,
  "Bulma CSS": SiBulma,
  "Ant Design": SiAntdesign,
  "Next.js": SiNextdotjs,

  // Backend
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "Django": SiDjango,
  "Flask": SiFlask,
  "FastAPI": SiFastapi,
  "NestJS": SiNestjs,

  // Databases
  "MySQL": SiMysql,
  "PostgreSQL": SiPostgresql,
  "MongoDB": SiMongodb,
  "SQLite": SiSqlite,

  // APIs & Web
  "RESTful APIs": TbApi,
  "GraphQL": SiGraphql,
  "JSON": SiJsonwebtokens,
  "WebSockets": TbApi,
  "Swagger": SiSwagger,

  // Dev principles (fallback to API icon for now)
  "API Development": TbApi,
  "Microservices" : GrServices,
  "OOP": MdDataObject,
  "MVC": TbBrandDatabricks,

  // Cloud
  "Heroku": SiHeroku,
  "Azure Platform": VscAzure,
  "Azure AI": VscAzure,
  "Google Cloud": SiGooglecloud,
  "Docker": SiDocker,
  "CI/CD": SiGithub,

  // AI
  "ChatGPT": SiOpenai,
  "OpenAI": SiOpenai,
  "Gemini": SiGooglegemini,
  "Azure AI Services": VscAzure,

  // Version Control
  "GitHub": SiGithub,
  "GitBash": SiGit,
  "Twilio": SiTwilio,
  "GitLab": SiGitlab,
  "Sendgrid": SiSendgrid,
  "Stripe": SiStripe,

};