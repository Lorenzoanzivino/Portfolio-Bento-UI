import React from "react";
import styles from "./ProfileCard.module.css";
import { PORTFOLIO_CONTENT } from "../config/content";
import myPhoto from "../assets/profile.jpeg";

const ProfileCard = () => {
  const { hero } = PORTFOLIO_CONTENT;

  return (
    <div className={styles.cardContainer}>
      <img
        src={myPhoto}
        alt="Profilo Lorenzo"
        className={styles.profileImage}
      />

      <div className={styles.badgeOverlay}>
        <h2 className={styles.greeting}>{hero.greeting}</h2>
        <p className={styles.role}>{hero.role}</p>
        <p className={styles.tagline}>"{hero.tagline}"</p>
      </div>
    </div>
  );
};

export default ProfileCard;
