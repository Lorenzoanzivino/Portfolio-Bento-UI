import React from "react";
import styles from "./BentoLayout.module.css";
import ProfileCard from "./ProfileCard";

const BentoLayout = () => {
  return (
    <main className={styles.container}>
      {/* Riquadro Alto-Sinistra: Componente Profilo */}
      <div className={styles.profileArea}>
        <ProfileCard />
      </div>

      <div className={`${styles.placeholderCard} ${styles.projectsArea}`}>
        Progetti / Folder UI (Task 6)
      </div>
      <div className={`${styles.placeholderCard} ${styles.experienceArea}`}>
        Esperienza & Formazione (Task 5)
      </div>
      <div className={`${styles.placeholderCard} ${styles.socialArea}`}>
        Barra Social & CV (Task 7)
      </div>
    </main>
  );
};

export default BentoLayout;
