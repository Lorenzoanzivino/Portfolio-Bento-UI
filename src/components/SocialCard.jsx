import React from "react";
import styles from "./SocialCard.module.css";
import { PORTFOLIO_CONTENT } from "../config/content";

const SocialCard = () => {
  const { actions } = PORTFOLIO_CONTENT;

  return (
    <div className={styles.cardContainer}>
      {/* Lato Sinistro (2/3): Wrapper invisibili con Quadrati grigi */}
      <div className={styles.iconsSection}>
        {/* 1. LinkedIn (Link) */}
        <div className={styles.iconWrapper}>
          <a
            href={actions.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconSquare}
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>

        {/* 2. Email (Link) */}
        <div className={styles.iconWrapper}>
          <a
            href={actions.emailLink}
            className={styles.iconSquare}
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>

        {/* 3. Telefono (Ornamentale) */}
        <div className={styles.iconWrapper}>
          <div className={styles.iconSquare} aria-label="Telefono">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
        </div>

        {/* 4. Instagram (Ornamentale) */}
        <div className={styles.iconWrapper}>
          <div className={styles.iconSquare} aria-label="Instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Lato Destro (1/3): Pulsante rettangolare per il CV */}
      <div className={styles.cvSection}>
        <a
          href={actions.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cvButton}
        >
          {actions.resumeText}
        </a>
      </div>
    </div>
  );
};

export default SocialCard;
