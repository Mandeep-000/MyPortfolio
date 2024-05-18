import { FaJava } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiMongodb, SiGit, SiCss3, SiHtml5, SiReact, SiNodedotjs, SiGithub, SiLinkedin } from 'react-icons/si';
import { IoMdMail } from "react-icons/io";

import VD from '../assets/VD2.png';
import Chappy from '../assets/chappy-small.png';
import Pixel from '../assets/pixel3.png';
import HR from '../assets/hr2.png';
import Unripe from '../assets/unripes2.png';

export const Skills = [
    {
        id: 0,
        tech: 'HTML',
        icon: <SiHtml5/>
    },
    {
        id: 1,
        tech: 'CSS',
        icon: <SiCss3/>
    },
    {
        id: 3,
        tech: 'Javascript',
        icon: <SiJavascript/>
    },
    {
        id: 4,
        tech: 'React JS',
        icon: <SiReact/>
    },
    {
        id: 5,
        tech: 'Node JS',
        icon: <SiNodedotjs/>
    },
    {
        id: 6,
        tech: 'ExpressJS',
        icon: <SiExpress/>
    },
    {
        id: 7,
        tech: 'MongoDB',
        icon: <SiMongodb/>
    },
    {
        id: 8,
        tech: 'Git',
        icon: <SiGit/>
    },
    {
        id: 9,
        tech: 'GitHub',
        icon: <SiGithub/>
    },
    {
        id: 10,
        tech: 'Java',
        icon: <FaJava/>
    },
    
]

export const Projects = [
    {
        id: 0,
        project_name: 'VendorDesk',
        project_desc: 'An Online Inventory Management System for small scale businesses. Leveraged my knowledge of web development using popular tech-stack MERN.',
        tech_stack: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
        project_img: VD,
        project_url: 'https://vendordesk.onrender.com',
        code_url: 'https://github.com/Mandeep-000/VendorDesk.git',
        reverse: false,
    },
    {
        id: 1,
        project_name: 'Chappy',
        project_desc: 'Chappy is an online chat application, where people can chat in real-time. Leveraged my knowledge of web development using popular tech-stack MERN.',
        tech_stack: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'WebSocket', 'Tailwind'],
        project_img: Chappy,
        project_url: 'https://chappy-5wm6.onrender.com',
        code_url: 'https://github.com/Mandeep-000/Chappy.git',
        reverse: true,
    },
    {
        id: 2,
        project_name: 'Pixel - Image Gallery',
        project_desc: 'My experience in building responsive and dynamic user interfaces using React has allowed me to create engaging and interactive web applications. Pixel is an online image gallery, where users can explore photos and download them for their use.',
        tech_stack: ['React.js', 'PHP', 'MySQL'],
        project_img: Pixel,
        project_url: '',
        code_url: 'https://github.com/Mandeep-000/Pixel-Online-Image-Gallery.git',
        reverse: true,
    },
    {
        id: 3,
        project_name: 'Housereccion',
        project_desc: 'A Real Estate web application providing services for Selling of Properties, and booking appointments for properties to Buy or Rent.',
        tech_stack: ['HTML/CSS', 'JavaScript', 'Python', 'Django'],
        project_img: HR,
        project_url: '',
        code_url: '',
        reverse: true,
    },
    {
        id: 4,
        project_name: 'UnRipes',
        project_desc: 'A place where I keep my mini javascripts projects. Contains some components, utility apps, and games.',
        tech_stack: ['HTML', 'CSS', 'JavaScript'],
        project_img: Unripe,
        project_url: 'https://unripes.netlify.app',
        code_url: 'https://github.com/Mandeep-000/UnRipes.git',
        reverse: true,
    },
]

export const navLinks = [
    {
        id: 0,
        name: 'Home',
        href: 'Home',
    },
    {
        id: 1,
        name: 'About',
        href: 'About',
    },
    {
        id: 2,
        name: 'Skills',
        href: 'Skills',
    },
    {
        id: 3,
        name: 'Projects',
        href: 'Projects',
    },
    {
        id: 4,
        name: 'Contact Me',
        href: 'Contact',
    },
]

export const Social = [
    {
        id: 0,
        name: 'LinkedIn',
        text: 'linkedin.com/in/mandeep-pareek',
        path: 'https://linkedin.com/in/mandeep-pareek',
        icon: <SiLinkedin/>
    },
    {
        id: 1,
        name: 'GitHub',
        text: 'github.com/mandeep-000',
        path: 'https://github.com/mandeep-000',
        icon: <SiGithub/>
    },
    {
        id: 2,
        name: 'Email',
        text: 'p.mandeep0402@gmail.com',
        path: 'https://mail.google.com/mail/?view=cm&to=p.mandeep0402@gmail.com',
        icon: <IoMdMail/>
    },
]