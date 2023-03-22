import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

export default function Home() {
  const { isAuth } = useSelector((state) => state.Auth);

  return (
    <>
      {isAuth ? (
        <div className={styles.container}>
          <div className={styles.welcomeHeader}>
            Welcome to estarta's Ecommerce-3
          </div>
          <div className={styles.description}>
            <Link to={"/products"} className={styles.redirectToProducts}>
              View products!
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.welcomeHeader}>
            Welcome to estarta's Ecommerce-3
          </div>
          <div className={styles.description}>
            <Link to={"/login"} className={styles.redirectToProducts}>
              Login to view products!
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
