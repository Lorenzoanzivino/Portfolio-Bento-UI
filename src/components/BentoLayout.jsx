import React from "react";
import styles from "./BentoLayout.module.css";

const BentoLayout = () => {
  return (
    <main className={styles.container}>
      <div className={`${styles.placeholderCard} ${styles.profileArea}`}>
        Profilo (Task 4)
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
