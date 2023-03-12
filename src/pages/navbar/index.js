import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
export default function Navbar() {
  const { isAuth } = useSelector((state) => state.Auth);

  return (
    <nav className={styles.navContainer}>
      <div className={styles.logo}>
        <Link to={"/"}>Estarta E-commerce</Link>
      </div>
      <div>
        {isAuth ? (
          <></>
        ) : (
          <Link to={"/loginpage"}>
            <button className={styles.navButton}>Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
}
