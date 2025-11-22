import { Experience, Project, Education, SkillSet } from './types';
import { Mail, Phone, MapPin, Linkedin, Code, Database, Globe } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Jaganath K",
  title: "Full Stack Web Developer",
  email: "jaganathkumar49@gmail.com",
  phone: "9074546742",
  location: "Palakkad, Kerala",
  linkedin: "https://linkedin.com/in/jaganath-jagan",
  summary: "Motivated and detail-oriented web developer with experience in designing and building responsive websites. Skilled in full-stack development, particularly in ASP.NET, with a strong understanding of front-end and back-end technologies. Passionate about creating user-friendly, efficient web solutions and continuously improving technical skills."
};

export const EDUCATION_DATA: Education[] = [
  {
    id: "edu1",
    degree: "BSc Electronics",
    institution: "College Of Applied Science",
    year: "2021 – 2024",
    location: "Palakkad"
  },
  {
    id: "edu2",
    degree: "Computer Science",
    institution: "GHSS Kizhakkencherry",
    year: "2019 – 2021",
    location: "Palakkad"
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "exp1",
    role: "Internship Student",
    company: "Luminar Technolab",
    duration: "06/2024 – 11/2024",
    location: "Kochi",
    description: "Completed an internship in ASP.NET Full Stack Development, gaining hands-on experience in building dynamic web applications. Contributed to front-end development using HTML, CSS, and JavaScript, and back-end development with ASP.NET, C#, and SQL. Actively participated in the design, development, and deployment of full-stack solutions while honing skills in database management, API integration, and troubleshooting."
  }
];

export const PROJECT_DATA: Project[] = [
  {
    id: "proj1",
    title: "E-Commerce Website Using Asp.Net and SQL",
    tech: "ASP.NET, SQL Server",
    points: [
      "Developed an E-Commerce website using ASP.NET and SQL Server.",
      "Enabled secure user registration and authentication.",
      "Implemented product browsing with a user-friendly interface.",
      "Integrated a dynamic shopping cart system.",
      "Developed product search functionality for improved user experience.",
      "Implemented a checkout system with payment gateway integration.",
      "Ensured data security and protection of sensitive user information.",
      "Optimized SQL Server database for real-time transactions.",
      "Focused on database performance tuning for scalability and efficiency."
    ]
  },
  {
    id: "proj2",
    title: "E-Commerce Website Design Using Html, CSS and Bootstrap",
    tech: "HTML, CSS, Bootstrap",
    points: [
      "Designed and developed an E-Commerce website using HTML, CSS, and Bootstrap.",
      "Created a responsive, visually appealing user interface optimized for mobile and Desktop users.",
      "Implemented intuitive navigation and product displays for improved user interaction.",
      "Integrated Bootstrap components to ensure consistent design across various devices and screen sizes.",
      "Focused on enhancing user experience with mobile-friendly layout and optimized performance."
    ]
  }
];

export const TECHNICAL_SKILLS: SkillSet[] = [
  {
    category: "Languages & Frameworks",
    items: ["C#", "ASP.NET", "HTML", "CSS", "Bootstrap"]
  },
  {
    category: "Databases",
    items: ["SQL"]
  }
];

export const SOFT_SKILLS = ["Problem Solving", "Active Listening", "Creativity & Innovations", "Teamwork"];