export const cvData = {
  personalInfo: {
    fullName: "Kopalachandran Abinash",
    title: "Software Engineering & AI/ML Intern",
    phone: "0764610649",
    email: "kopalachandranabinash@gmail.com",
    location: "Colombo, Sri Lanka",
    links: {
      linkedin: "https://www.linkedin.com/in/kopalachandran-abinash-2a951a2b9",
      github: "https://github.com/abinash1417",
      medium: "https://medium.com/@chandrannash281418"
    },
    summary: "Third-year Software Engineering undergraduate at the University of Kelaniya with hands-on experience across full-stack development and applied Generative AI. Proficient in building end-to-end web applications using Spring Boot, React.js, Node.js, and Docker, as well as multi-agent LLM systems and RAG pipelines using LangChain, LangGraph, and vector databases. Passionate about designing scalable, secure architectures — whether that's a production web app or an AI agent pipeline."
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
      { name: "Cloudinary",      level: 80 }
    ],
    aiml: [
      { name: "LangChain",         level: 85 },
      { name: "LangGraph",         level: 80 },
      { name: "Groq AI",           level: 85 },
      { name: "ChromaDB",          level: 75 },
      { name: "RAG Pipelines",     level: 80 },
      { name: "Prompt Engineering", level: 85 },
      { name: "AI Agents",         level: 80 }
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
      category: "fullstack",
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
      id: "synthesis-ai-platform",
      category: "aiml",
      title: "Synthesis — AI Research & Knowledge Platform",
      type: "Individual Project",
      period: null,
      technologies: ["Python", "LangGraph", "LangChain", "ChromaDB", "Groq AI", "Streamlit"],
      highlights: [
        "Architected a multi-agent RAG platform where a Researcher agent dynamically selects between semantic search and full-document retrieval based on query intent.",
        "Resolved a tool-routing flaw causing whole-document queries to fail by redesigning the agent's decision logic."
      ],
      aiFeatures: "Multi-agent RAG system with dynamic retrieval strategy selection, built on LangGraph orchestration and ChromaDB semantic search.",
      image: "/images/synthesis.png",
      github: "https://github.com/abinash1417/synthesis-ai-platform",
      demo: "https://synthesis-ai-platform-aaa782jikuwkmtv8noum3u.streamlit.app/",
      demoType: "live"
    },
    {
      id: "medical-booking",
      category: "fullstack",
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
      id: "ai-se-assistant",
      category: "aiml",
      title: "AI Software Engineering Assistant",
      type: "Individual Project",
      period: null,
      technologies: ["Python", "LangGraph", "LangChain", "Groq AI", "Streamlit"],
      highlights: [
        "Engineered a 4-stage automated code review pipeline (analysis, bug detection, test generation, scoring) producing a structured Code Health Report.",
        "Validated evaluation honesty across clean, buggy, and poorly-structured code samples to prevent fabricated issues."
      ],
      aiFeatures: "Multi-agent LLM pipeline that reviews code, detects bugs, generates unit tests, and scores overall code health.",
      image: "/images/ai-assistant.png",
      github: "https://github.com/abinash1417/AI-software-engineering-assistant",
      demo: "https://ai-software-engineering-assistant-pnm5g2fth3thobho53toxx.streamlit.app/",
      demoType: "live"
    },
    {
      id: "ai-career-platform",
      category: "aiml",
      title: "AI Career & Interview Platform",
      type: "Individual Project",
      period: null,
      technologies: ["Python", "LangGraph", "LangChain", "Groq AI", "Streamlit"],
      highlights: [
        "Designed an end-to-end AI job-prep platform generating role-aware resume scoring, skill-gap analysis, and adaptive mock interview questions.",
        "Uncovered and fixed a scoring flaw where resumes were judged in isolation rather than against the target role, improving evaluation accuracy."
      ],
      aiFeatures: "GenAI-powered career platform with LLM-generated resume analysis, tailored mock interviews, and role-specific feedback.",
      image: "/images/ai-career.png",
      github: "https://github.com/abinash1417/AI-Career-Interview-Platform",
      demo: "https://ai-career-interview-platform-hjuesfzghouxmswtckm8ti.streamlit.app/",
      demoType: "live"
    },
    {
      id: "book-fair",
      category: "fullstack",
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
