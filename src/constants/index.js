export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Experience',
    href: '#work',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
];

// export const clientReviews = [
//   {
//     id: 1,
//     name: 'Emily Johnson',
//     position: 'Marketing Director at GreenLeaf',
//     img: 'assets/review1.png',
//     review:
//       'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
//   },
//   {
//     id: 2,
//     name: 'Mark Rogers',
//     position: 'Founder of TechGear Shop',
//     img: 'assets/review2.png',
//     review:
//       'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
//   },
//   {
//     id: 3,
//     name: 'John Dohsas',
//     position: 'Project Manager at UrbanTech ',
//     img: 'assets/review3.png',
//     review:
//       'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
//   },
//   {
//     id: 4,
//     name: 'Ether Smith',
//     position: 'CEO of BrightStar Enterprises',
//     img: 'assets/review4.png',
//     review:
//       'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
//   },
// ];

export const myProjects = [
  {
    title: 'NutriScan - AI-Powered Food Scanning Platform',
    desc: 'NutriScan is an intelligent web-based application that allows users to analyze food products using AI. By uploading an image or entering a custom query, users can instantly receive detailed health insights and recommendations about various food items.',
    subdesc:
      'Developed with Flask, MySQL, and Google Gemini API, NutriScan provides real-time nutrition analysis, personalized diet suggestions, and a complete user dashboard with login, history tracking, and custom requests. The platform is designed for simplicity, accuracy, and a seamless user experience.',
    href: 'https://nutriscan.pythonanywhere.com/',
    texture: '/textures/project/NutriScan.mp4',
    logo: '/assets/PL1.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'python',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'MySQL',
        path: 'assets/mysql.png',
      },
      {
        id: 3,
        name: 'Flask',
        path: '/assets/flask.png',
      },
    ],
  },
  {
    title: 'NovaChat - Gemini Clone',
    desc: 'NovaChat is an AI-powered chat interface inspired by Google Gemini. Built with React.js, it delivers a seamless and responsive user experience with real-time message rendering and adaptive layouts optimized for all devices.',
    subdesc:
      'Designed with a scalable frontend architecture, NovaChat sets the stage for future AI API integration and advanced features—offering an intuitive, modern chatting experience that blends performance with creativity.',
    href: 'https://novachat-zeta.vercel.app/',
    texture: '/textures/project/Gemini.mp4',

    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Gemini',
        path: '/assets/project-logo5.png',
      },
    ],
  },
  {
    title: 'Animax - Anime Recommendation System',
    desc: 'Animax is an AI-powered anime recommendation platform that curates personalized anime suggestions based on user preferences such as release year, IMDb rating, age restriction, and genre. It delivers intelligent recommendations through a seamless and interactive interface.',
    subdesc:
      'Developed using Flask, Python, MySQL, and a custom machine learning model, Animax intelligently analyzes user inputs to predict and recommend the most suitable anime titles, ensuring an engaging and data-driven user experience.',
    href: 'http://animax.pythonanywhere.com/',
    texture: '/textures/project/animax.mp4',

    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'python',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'MySQL',
        path: 'assets/mysql.png',
      },
      {
        id: 3,
        name: 'Flask',
        path: '/assets/flask.png',
      },
    ],
  },
  {
    title: 'Asahi Ramen - Restaurant Management System',
    desc: 'Asahi Ramen is a secure and scalable restaurant management system built with Java Spring Boot. It allows administrators to manage menu categories, upload product details with images, and maintain real-time inventory updates through a clean and dynamic interface.',
    subdesc:
      'Featuring role-based access control using Spring Security and Google OAuth2 login, Asahi Ramen follows a modular architecture (Controller, Service, DTO, Repository) to ensure flexibility, maintainability, and high performance across the platform.',
    href: 'https://github.com/SahilThale/AsahiRamen',
    texture: '/textures/project/AsahiRamen.mp4',
    logo: '/assets/asahiRamenlogo.png',

    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'SpringBoot',
        path: '/assets/springboot.png',
      },
      {
        id: 2,
        name: 'thymeleaf',
        path: 'assets/thymeleaf.png',
      },
      {
        id: 3,
        name: 'mysql',
        path: '/assets/mysql.png',
      },
    ],
  },
  {
    title: 'SpendWise - Expense Tracker App',
    desc: 'SpendWise is a user-friendly expense tracking web application that enables users to register, log in, and manage categorized daily expenses through a clean and intuitive interface. It simplifies personal finance tracking with efficient ORM-based data handling.',
    subdesc:
      'Developed using Java, Servlets & JSP, Hibernate, and MySQL, SpendWise ensures secure data management and provides insightful historical expense tracking. It lays the foundation for future enhancements like income modules and personalized budgeting tools.',
    href: 'https://github.com/SahilThale/SpendWise',
    texture: '/textures/project/SpendWise.mp4',

    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'java',
        path: '/assets/java.png',
      },
      {
        id: 2,
        name: 'mysql',
        path: 'assets/mysql.png',
      },
      {
        id: 3,
        name: 'springboot',
        path: '/assets/springboot.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'QSpiders',
    pos: 'JAVA FULL STACK INTERN',
    duration: '2025 - Present',
    title:
      'Designed and developed dynamic web applications using Hibernate and Spring Boot. Wrote complex SQL queries for data extraction, transformation, and reporting.',
 icon: '/assets/internship1.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'EYEQDOTNET PVT LTD',
    pos: 'Internship Trainee',
    duration: '2024 - 2024',
    title:
      'Gained hands-on experience in cyber security and ethical hacking, learned Linux OS, SQL injection, and security testing using Burp Suite. Developed a "Password Strength Checker" website using HTML, CSS, and JavaScript.',
  icon: '/assets/internship2.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Prodigy InfoTech',
    pos: 'Web Development Intern',
    duration: '2024 - 2024',
    title:
      'Worked as a Web Development Intern, gaining hands-on experience in building responsive websites using HTML, CSS, and JavaScript. Completed multiple real-world tasks and projects that strengthened my front-end development and problem-solving skills.',
    icon: '/assets/internship3.png',
    animation: 'salute',
  },
];
