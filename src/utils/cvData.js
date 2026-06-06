export const cvData = {
  personalInfo: {
    fullName: "Kopalachandran Abinash",
    title: "Software Engineering Intern",
    phone: "0764610649",
    email: "kopalachandranabinash@gmail.com",
    location: "Colombo, Sri Lanka",
    links: {
      linkedin: "https://www.linkedin.com/in/kopalachandran-abinash-2a951a2b9",
      github: "https://github.com/abinash1417",
      medium: "https://medium.com/@chandrannash281418"
    },
    summary: "Third-year Software Engineering undergraduate at the University of Kelaniya with solid hands-on full-stack development experience. Proficient in building end-to-end web applications using Spring Boot, React.js, Node.js, and Docker, with a focus on scalable architecture, REST APIs, and secure role-based access systems. Passionate about problem solving, learning new technologies, and contributing to impactful software solutions."
  },
  education: [
    {
      institution: "University of Kelaniya",
      degree: "B.Sc (Hons) in Software Engineering",
      period: "April 2024 – Present",
      details: "Third-year undergraduate student developing robust software engineering principles, advanced algorithms, database structures, and software architecture designs."
    },
    {
      institution: "Jaffna Hindu College",
      degree: "G.C.E Advanced Level Examination 2022",
      period: "Dec 2020 – Feb 2023",
      details: "Combined Mathematics – A  |  Physics – B  |  Chemistry – B. Developed strong mathematical and analytical problem-solving foundation."
    }
  ],
  skills: {
    languages: [
      { name: "Java",       level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "HTML",       level: 95 },
      { name: "CSS",        level: 90 },
      { name: "Python",     level: 75 },
      { name: "C",          level: 70 }
    ],
    frameworks: [
      { name: "Spring Boot", level: 90 },
      { name: "React.js",    level: 95 },
      { name: "Node.js",     level: 85 },
      { name: "Express.js",  level: 85 },
      { name: "Next.js",     level: 80 }
    ],
    databases: [
      { name: "MySQL",   level: 85 },
      { name: "MongoDB", level: 80 }
    ],
    toolsAndPlatforms: [
      { name: "Git & GitHub",    level: 95 },
      { name: "Docker",          level: 80 },
      { name: "Jenkins",         level: 75 },
      { name: "AWS",             level: 70 },
      { name: "Postman",         level: 90 },
      { name: "GitHub Actions",  level: 75 },
      { name: "Cloudinary",      level: 80 },
      { name: "Groq AI",         level: 85 }
    ],
    coreConcepts: [
      "OOP (Object Oriented Programming)",
      "SOLID Principles",
      "Data Structures & Algorithms",
      "REST APIs",
      "JWT (JSON Web Tokens)",
      "CI/CD Pipelines",
      "Role-Based Access Control"
    ]
  },
  projects: [
    {
      id: "electronics-ordering",
      title: "Electronics Ordering System",
      type: "Individual Project",
      period: "Feb 2026 – May 2026",
      technologies: ["React.js", "Spring Boot", "MySQL", "JWT", "Tailwind CSS", "Groq AI", "REST APIs", "Axios", "Vite", "Git"],
      highlights: [
        "Built a full-stack e-commerce platform for electronic products with secure JWT authentication, cart management, order tracking, and a dynamic responsive UI.",
        "Integrated Groq AI-powered product comparison and real-time customer assistance to enhance buying decisions and product discovery."
      ],
      aiFeatures: "Features a fully integrated intelligent comparative advisor powered by Groq AI that analyzes product specifications and answers customer queries in real time.",
      image: "/images/electronics.png",
      github: "https://github.com/abinash1417/ElectroMart",
      demo: "https://youtu.be/WliWJUp9S5Y?si=vqlWN8LLNO0L6Eis",
      demoType: "youtube"
    },
    {
      id: "medical-booking",
      title: "Medical Appointment Booking System",
      type: "Individual Project",
      period: "Mar 2026 – May 2026",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Groq AI", "JWT", "Tailwind CSS", "Nodemailer", "Cloudinary", "Docker"],
      highlights: [
        "Developed a full-stack hospital management system with appointment booking, digital prescriptions, real-time doctor-patient chat via Socket.io, and AI-powered symptom checking.",
        "Implemented automated email alerts via Nodemailer, Cloudinary image upload, PDF receipt generation, and AWS S3 deployment."
      ],
      aiFeatures: "Features an AI-powered symptom-to-specialist routing algorithm using Groq AI that assists users with instant medical guidance before booking.",
      image: "/images/medical.png",
      github: "https://github.com/abinash1417/Hospital-app",
      demo: "http://hospital-app-frontend-159372.s3-website.eu-north-1.amazonaws.com/",
      demoType: "live"
    },
    {
      id: "book-fair",
      title: "Book Fair Management System",
      type: "Group Project",
      period: "Oct 2025 – Jan 2026",
      technologies: ["React.js", "Spring Boot", "Tailwind CSS", "JWT", "MySQL", "REST APIs", "QR Code Generation"],
      highlights: [
        "Engineered a full-stack web app for stall reservations, secure user authentication, digital payments, and QR code ticket generation.",
        "Built a comprehensive admin dashboard for real-time stall availability tracking, booking management, and payment validation."
      ],
      image: "/images/bookfair.png",
      github: "https://github.com/Sathiyabalan29/BookFair",
      demo: null,
      demoType: null
    },
    {
      id: "pdfbot",
      title: "AI-Powered PDF Chatbot",
      type: "Individual Project",
      period: "May 2026 – Present",
      technologies: ["Next.js", "Python", "Flask", "LangChain", "Groq AI", "ChromaDB", "PyPDF2", "Tailwind CSS", "Docker", "REST APIs"],
      highlights: [
        "Engineered an intelligent multi-PDF chatbot platform enabling semantic search and conversational document Q&A via natural language.",
        "Integrated Groq AI (Llama 3) for lightning-fast LLM responses with citation mapping, and containerized microservices using Docker."
      ],
      aiFeatures: "Integrates ChromaDB semantic indexing and low-latency Groq AI context querying, mapping precise document citations dynamically in user chat windows.",
      image: "/images/pdfbot.png",
      github: "https://github.com/abinash1417/pdf-chatbot",
      demo: null,
      demoType: null
    }
  ],
  softSkills: [
    "Strong Problem-Solving Skills",
    "Collaborative Team Player",
    "Effective Communication",
    "Time Management",
    "Adaptability & Quick Learner"
  ],
  languagesSpoken: [
    { language: "English", proficiency: "Professional Proficiency" },
    { language: "Tamil",   proficiency: "Native" }
  ],
  references: [
    {
      name: "Prof. (Mrs) I.U. Hewapathirana",
      role: "Head, Software Engineering Teaching Unit",
      institution: "University of Kelaniya",
      contact: "ihewapathirana@kln.ac.lk  |  +94 777 329 626"
    },
    {
      name: "Dr. Nalin Warnajith",
      role: "Senior Lecturer, Software Engineering Teaching Unit",
      institution: "University of Kelaniya",
      contact: "nwarnajith@gmail.com |  +94 71 757 0140"
    }
  ]
};
