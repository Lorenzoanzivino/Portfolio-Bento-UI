import React from "react";
import styles from "./BentoLayout.module.css";
import ProfileCard from "./ProfileCard";
import ExperienceCard from "./ExperienceCard";

const BentoLayout = () => {
  return (
    <main className={styles.container}>
      {/* Riquadro Alto-Sinistra */}
      <div className={styles.profileArea}>
        <ProfileCard />
      </div>

      {/* Riquadro Destra: Progetti (Task 6) */}
      <div className={`${styles.placeholderCard} ${styles.projectsArea}`}>
        Progetti / Folder UI (Task 6)
      </div>

      {/* Riquadro Basso-Sinistra: Esperienza e Formazione */}
      <div className={styles.experienceArea}>
        <ExperienceCard />
      </div>

      {/* Riquadro Basso-Destra: Barra Social (Task 7) */}
      <div className={`${styles.placeholderCard} ${styles.socialArea}`}>
        Barra Social & CV (Task 7)
      </div>
    </main>
  );
};

export default BentoLayout;
