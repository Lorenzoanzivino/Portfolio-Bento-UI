import devInventoryImg from "../assets/devInventory.png";
import myTrainUpImg from "../assets/myTrainUp.png";
import agendaSyncImg from "../assets/agendaSync.png";

export const PORTFOLIO_CONTENT = {
  metadata: {
    title: "Lorenzo Anzivino | Portfolio",
    owner: "Lorenzo Anzivino",
  },
  hero: {
    greeting: "Ciao, sono Lorenzo",
    role: "Java Backend Developer",
    tagline:
      "Studente ITS-ICT Academy, tirocinante presso Onyx Technology srl. Sviluppo architetture a microservizi e soluzioni cloud-native containerizzate.",
  },
  education: {
    title: "Formazione",
    institution: "ITS-ICT Academy",
    program: "Application Cloud Developer",
    period: "2024 - 2026",
  },
  experience: {
    title: "Esperienza",
    company: "ONYX TECHNOLOGY srl",
    role: "Tirocinio Java Backend",
    period: "Aprile 2026 - Attuale",
  },
  skills: {
    title: "Stack Tecnologico",
    backend: ["Java", "Spring Boot", "Spring Data JPA", "Python", "Flask"],
    database: ["PostgreSQL", "Oracle Database", "JDBC"],
    devops: ["Docker", "Git", "CQRS", "Design Patterns"],
    frontend: ["JavaScript", "React"],
  },
  projects: {
    title: "Featured Work",
    githubGeneralCta: "GitHub Profile ↗",
    githubGeneralLink: "https://github.com/Lorenzoanzivino",
    items: [
      {
        id: "dev-inventory",
        name: "Dev-Inventory-Cloud",
        tags: ["Java", "Spring Boot", "Docker", "Cloud"],
        description:
          "Sistema cloud per la gestione degli inventari basato su architettura a microservizi e container-ready.",
        repoLink: "https://github.com/Lorenzoanzivino/Dev-Inventory-Cloud",
        theme: "neon",
        bgImage: devInventoryImg,
      },
      {
        id: "mytrainup",
        name: "MyTrainUp",
        tags: ["Python", "Flask", "JavaScript", "React"],
        description: "Web App per la gestione delle schede di allenamento.",
        repoLink: "https://github.com/Lorenzoanzivino/mytrainup",
        theme: "ivory",
        bgImage: myTrainUpImg,
      },
      {
        id: "agendasync",
        name: "AgendaSync",
        tags: ["Java", "Spring", "CQRS", "React Native"],
        description:
          "Architettura a microservizi scalabile in un ambiente cloud-ready.",
        repoLink: "https://github.com/Lorenzoanzivino/agenda-condivisa-backend",
        theme: "ivory",
        bgImage: agendaSyncImg,
      },
    ],
  },
  actions: {
    resumeText: "Resume ↗",
    resumeLink: "/Lorenzo_Anzivino_cv.pdf",
    linkedinLink: "https://www.linkedin.com/in/lorenzo-anzivino-dev/",
    emailLink: "mailto:lorenzoanzivino1997@gmail.com",
  },
};
