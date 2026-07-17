import React from "react";
import styles from "./ProjectsCard.module.css";
import { PORTFOLIO_CONTENT } from "../config/content";

const ProjectsCard = () => {
  const { projects } = PORTFOLIO_CONTENT;

  return (
    <div className={styles.folderWrapper}>
      {/* Contenitore superiore: Linguetta a sinistra, Link a destra */}
      <div className={styles.folderHeader}>
        <div className={styles.folderTab}>
          <h2 className={styles.folderTitle}>{projects.title}</h2>
        </div>

        <div className={styles.headerLinkContainer}>
          <a
            href={projects.githubGeneralLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.headerLink}
          >
            {projects.githubGeneralCta}
          </a>
        </div>
      </div>

      <div className={styles.folderBody}>
        <div className={styles.projectsGrid}>
          {projects.items.map((project) => {
            const themeClass =
              project.theme === "neon" ? styles.themeNeon : styles.themeIvory;

            return (
              <a
                key={project.id}
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.projectItem} ${themeClass}`}
              >
                <div
                  className={styles.projectBg}
                  style={{ backgroundImage: `url(${project.bgImage})` }}
                />
                <div className={styles.projectOverlay} />

                <div className={styles.projectContent}>
                  <div className={styles.projectHeader}>
                    <h3 className={styles.projectName}>{project.name}</h3>
                    <span className={styles.githubIcon}>↗</span>
                  </div>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                  <div className={styles.tagsContainer}>
                    {project.tags.map((tag, index) => (
                      <span key={index} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
