export const PORTFOLIO_CONTENT = {
  metadata: {
    title: "Lorenzo Anzivino | Portfolio",
    owner: "Lorenzo Anzivino",
  },
  hero: {
    greeting: "Ciao, sono Lorenzo",
    role: "Backend & DevOps Developer",
    tagline:
      "Studente ITS-ICT Academy e Tirocinante presso ONYX TECHNOLOGY srl. Sviluppo architetture a microservizi robuste, scalabili e soluzioni cloud-native containerizzate.",
  },
  education: {
    title: "Formazione",
    institution: "ITS-ICT Academy",
    program: "Application Cloud Developer program",
    period: "2024 - 2026",
  },
  experience: {
    title: "Esperienza",
    company: "ONYX TECHNOLOGY srl",
    role: "Tirocinio Backend & DevOps",
    period: "Aprile 2026 - Attuale",
  },
  skills: {
    title: "Stack Tecnologico",
    backend: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "Python",
      "Flask",
    ],
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
      },
      {
        id: "mytrainup",
        name: "MyTrainUp",
        tags: ["Java", "Spring Boot", "PostgreSQL"],
        description:
          "Applicazione backend dedicata alla strutturazione, pianificazione e gestione logica delle schede di allenamento.",
        repoLink: "https://github.com/Lorenzoanzivino/mytrainup",
      },
      {
        id: "agendasync",
        name: "AgendaSync",
        tags: ["Java", "Spring Data JPA", "CQRS"],
        description:
          "Servizio stateless per la sincronizzazione di appuntamenti che implementa il pattern CQRS per la separazione delle letture e scritture.",
        repoLink: "https://github.com/Lorenzoanzivino/fyr_utente",
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
