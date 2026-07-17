import React from "react";
import styles from "./ExperienceCard.module.css";
import { PORTFOLIO_CONTENT } from "../config/content";

const ExperienceCard = () => {
  const { experience, education, skills } = PORTFOLIO_CONTENT;

  return (
    <div className={styles.cardContainer}>
      {/* Sezione Esperienza */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>{experience.title}</h3>
        <div className={styles.item}>
          <div className={styles.itemHeader}>
            <span className={styles.role}>{experience.role}</span>
            <span className={styles.period}>{experience.period}</span>
          </div>
          <span className={styles.company}>{experience.company}</span>
        </div>
      </div>

      {/* Sezione Formazione */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>{education.title}</h3>
        <div className={styles.item}>
          <div className={styles.itemHeader}>
            <span className={styles.role}>{education.program}</span>
            <span className={styles.period}>{education.period}</span>
          </div>
          <span className={styles.company}>{education.institution}</span>
        </div>
      </div>

      {/* Sezione Competenze */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>{skills.title}</h3>
        <div className={styles.skillsList}>
          <p>
            <span className={styles.skillCategory}>Backend:</span>{" "}
            {skills.backend.join(", ")}
          </p>
          <p>
            <span className={styles.skillCategory}>DevOps:</span>{" "}
            {skills.devops.join(", ")}
          </p>
          <p>
            <span className={styles.skillCategory}>Database:</span>{" "}
            {skills.database.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
