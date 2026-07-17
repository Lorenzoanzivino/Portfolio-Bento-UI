import React from "react";
import styles from "./BentoLayout.module.css";
import ProfileCard from "./ProfileCard";
import ExperienceCard from "./ExperienceCard";
import ProjectsCard from "./ProjectsCard";
import SocialCard from "./SocialCard";
import { PORTFOLIO_CONTENT } from "../config/content";

const BentoLayout = () => {
  return (
    <div className={styles.pageWrapper}>
      {/* Intestazione Globale con Nome e Linee laterali */}
      <header className={styles.topHeader}>
        <div className={styles.titleContainer}>
          <h1 className={styles.headerTitle}>
            {PORTFOLIO_CONTENT.metadata.owner.toUpperCase()}
          </h1>
        </div>
      </header>

      <main className={styles.container}>
        <div className={styles.profileArea}>
          <ProfileCard />
        </div>

        <div className={styles.projectsArea}>
          <ProjectsCard />
        </div>

        <div className={styles.experienceArea}>
          <ExperienceCard />
        </div>

        {/* Task 7: Barra Social & CV */}
        <div className={styles.socialArea}>
          <SocialCard />
        </div>
      </main>
    </div>
  );
};

export default BentoLayout;
