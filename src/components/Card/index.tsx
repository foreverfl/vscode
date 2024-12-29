import React from "react";
import styles from "./styles.module.css";

type CardProps = {
  href: string;
  iconClass: string;
  title: string;
};

const Card: React.FC<CardProps> = ({ href, iconClass, title }) => {
  return (
    <a href={href} className={styles.card}>
      <i className={`${iconClass} ${styles.icon}`}></i>
      <p className={styles.cardTitle}>{title}</p>
    </a>
  );
};

export default Card;
