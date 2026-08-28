import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Fullstack Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "DevOps Associate",
      icon: creator,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full-Stack Engineer",
      company_name: " Blacks In Technology (BIT)",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2026 - Present",
      points: [
        "Architected an AI-driven community support bot using advanced prompt engineering and agentic workflows.",
        "Collaborated asynchronously across international time zones within the Technical Committee to drive cloud-native technology strategy, tool evaluation, and infrastructure maintenance. ",
        "Supported the Marketing Committee on brand alignment and digital visibility while delivering cross-team documentation and feature support. ",
      ],
    },
    {
      title: "Full-Stack Engineer",
      company_name: "SkySoft Technology",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2018 - Present",
      points: [
        "Designed and developed secure, high-performance REST APIs in Java/Spring Boot, managing complex business logic and SQL/NoSQL data, deployed on AWS EC2.", 
        "Integrated Spring Security for authentication and authorization; architected distributed microservice systems for improved reliability and fault tolerance.", 
        "Developed responsive, accessible frontend interfaces with React.js, Next.js, and Angular, optimizing client-server communication to reduce latency.",
        "Debugged production issues and optimized database performance through query tuning and indexing, ensuring system stability at scale.",
        "Applied Clean Code and SOLID principles; maintained 80%+ test coverage on critical modules using JUnit 5, Mockito, and end to-end testing.",
        "Managed CI/CD pipelines with Jenkins, GitLab CI/CD, and Docker within Agile/Scrum bi-weekly sprints; led code reviews and production follow-up.",
        "Implemented serverless capabilities with AWS Lambda via API Gateway and AWS S3 storage, contributing to platforms serving 1,000+ daily users.",
        "Led research on agent orchestration techniques and model alignment for internal AI tooling, contributing to internal technical documentation.", 
        "Collaborated with cross-functional product, frontend, and QA teams, mentoring junior developers to raise team productivity and code quality.",
      ],
    },
    {
      title: "Freelance Full-Stack Developer ",
      company_name: "Upwork and PeoplePerHour",
      icon: starbucks,
      iconBg: "#383E56",
      date: "2021 - Present",
      points: [
        "Delivered end-to-end web applications for global clients using React.js, React Native, PHP, and MySQL, from requirements gathering to deployment.", 
        "Shipped hotel booking platforms, AI-enabled interfaces, and e-commerce systems, integrating multiple LLM providers and prompt engineering.",
      ],
    },
    {
      title: "Volunteer Trainer in Web Development & Jury Member",
      company_name: "Youth Integration Centre (CIJ)",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Nov 2019 - Mar 2021",
      points: [
        "Designed and delivered courses on HTML5, CSS3, JavaScript, and WordPress for adult learners; served as official jury member for final exams.",
      ],
    },
    {
      title: "Point of Sale Manager – Administrative Assistant | Computer Technician",
      company_name: "Cyberlink",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Oct 2015 - Apr 2021",
      points: [
        "Managed multi-site infrastructures and cross-functional teams across 5 agencies, achieving 120% of sales objectives through strict operational discipline.", 
        "Demonstrated high resilience and problem-solving skills under business constraints, successfully onboarding high-speed internet subscribers for Creolink Communications.",
        "Delivered technical support and IT administration: installed and maintained applications and operating systems, and provided hands-on troubleshooting and advice to clients.", 
        "Served as interim manager of the Cité des Palmiers agency (2018–2019) and the Ange Raphaël agency (2020–2021), and as secondary manager driving the successful 2019 launch of the Ndogbong site.",
      ],
    }, 
  ];
  
  const testimonials = [
    {
      testimonial:
        "I highly recommend Alexandre after working five years with him at Skysoft. He is a meticulous, curious engineer with amazing positive energy. He quickly masters complex technical environments like MERN, Java, and Angular with impressive agility. He is deeply sociable, shares knowledge, and lifts teams up. Any technical team would be fortunate to have him!",
      name: "Loic Njanji",
      designation: "Lead Full Stack Developer",
      company: "Skysoft Technology CM",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGC80YZIAPhpA/profile-displayphoto-scale_400_400/B4DZ9Mhk0LJAAg-/0/1783695299169?e=1788998400&v=beta&t=4K2dT82z7ZK-YBtdt5cSDdJ3dsegUBjNndcuxoUDSKE",
    },
    {
      testimonial:
        "It was a pleasure to work with Alex. He is very motivated to get the ultimate results and takes feedback very well. In Web Development and Engineering overall he will be very prepared to be a master level professional with his attention to detail. I cannot recommend him enough He is that amazing!",
      name: "Adam Dogole",
      designation: "ICF Certified Executive Coach & Globally Certified Emotional Intelligence Coach",
      company: "Self-employed",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQFGxdl7Pp682g/profile-displayphoto-shrink_400_400/B4EZdhwRqaHsAk-/0/1749691735038?e=1788998400&v=beta&t=WEj9Cs1MU71j2r-zrD8EuvTqkcT0g4OuNwlUrhmEL4o",
    },
    {
      testimonial:
        "After Alex optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Alex proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Alex does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    }
  ];
  
  const projects = [
    {
      name: "QuickShow  —  Full-Stack Movie Ticket Booking Platform (MERN)",
      description:
        "Engineered a full-stack movie ticket booking platform using React 19, Vite, and Tailwind CSS 4, with seamless Clerk multi-session authentication and a dynamic seat layout system. Integrated Stripe payment gateway, secure server-to-server webhook validation, and asynchronous background jobs with Inngest, alongside automated email notifications. ",
      tags: [
        {
          name: "react 19",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind 4",
          color: "pink-text-gradient",
        },
        {
          name: "clerk",
          color: "blue-text-gradient",
        },
        {
          name: "stripe",
          color: "green-text-gradient",
        },
        {
          name: "inngest",
          color: "blue-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Xander1936/QuickShow",
      live_link: "https://quick-show-rust-six.vercel.app/"
    },
    {
      name: "Roomify  —  AI Architectural Visualization Platform",
      description:
        " Designed an AI-native application in TypeScript/Node.js transforming 2D blueprints into photorealistic 3D renderings using the Puter.js AI API and serverless workers, with prompt engineering on Claude and Gemini. Configured server-side rendering with React Router v7 and Vite, and a multi-step Dockerfile (Node 20 Alpine) with isolated dev/prod/build stages for production deployment on Vercel. Replaced a traditional backend with Puter KV as a persistence layer, reducing infrastructure costs while supporting project data and a global community feed. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "puterjs",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Xander1936/roomify",
      live_link: "https://roomify-two-pink.vercel.app/"
    },
    {
      name: "Angular Pokémon App",
      description:
        "Developed a feature-rich Angular SPA on the PokéAPI with modules/services/components architecture, dynamic routing, and responsive data binding. Automated the release process with a GitHub Actions CI/CD pipeline covering builds, testing, and staging deployment.",
      tags: [
        {
          name: "angularjs",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "rxjs",
          color: "pink-text-gradient",
        },
        {
          name: "guard",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
      live_link: "https://angular-pokemon-app.vercel.app/login"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  