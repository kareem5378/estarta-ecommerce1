import React from "react";
import styles from "./style.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.welcomeHeader}>
        Welcome to Estarta's Ecommerce-3
      </div>
      <p className={styles.description}>Login to start shopping!</p>
    </div>
  );
}
