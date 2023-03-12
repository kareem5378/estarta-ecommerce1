import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.welcomeHeader}>
        Welcome to Estarta's Ecommerce-3
      </div>
      <p className={styles.description}>Click the button to login</p>
      <Link to={"/loginpage"} className={styles.homeButton}>
        Login!
      </Link>
    </div>
  );
}
