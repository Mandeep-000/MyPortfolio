import { FaJava } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiMongodb, SiGit, SiCss3, SiHtml5, SiReact, SiNodedotjs, SiGithub } from 'react-icons/si';

import Project1 from '../assets/Project1.png';
import Project2 from '../assets/Project2.png';

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
        project_name: 'Restaurant App',
        project_desc: 'My strong experience in building responsive and dynamic user interfaces using React and Redux has allowed me to create engaging and interactive web applications.My strong experience in building responsive.',
        tech_stack: ['React JS', 'Tailwind', 'Firebase'],
        project_img: Project1,
        project_url: '',
        reverse: false,
    },
    {
        id: 1,
        project_name: 'Animax',
        project_desc: 'My strong experience in building responsive and dynamic user interfaces using React and Redux has allowed me to create engaging and interactive web applications.',
        tech_stack: ['React JS', 'Firebase', 'JS', 'React'],
        project_img: Project2,
        project_url: '',
        reverse: true,
    },
    {
        id: 2,
        project_name: 'Animax',
        project_desc: 'My strong experience in building responsive and dynamic user interfaces using React and Redux has allowed me to create engaging and interactive web applications.',
        tech_stack: ['React JS', 'Firebase'],
        project_img: Project2,
        project_url: '',
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