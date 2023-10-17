import React from "react";
import styles from "../styles/components/Menu.module.css";

export default function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <span className={styles.logo}>
        <p className={styles.logoName}>
          P<span className={styles.logoP}>olarize.Me</span>
        </p>
      </span>
    </div>
  );
}
