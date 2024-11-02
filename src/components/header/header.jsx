import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button className={styles.loginButton}>
          <Link to="/">Home</Link>
        </button>
        <button className={styles.loginButton}>
          <Link to="/login">Login</Link>
        </button>
      </div>
      <div className={styles.center}>
        <h1>Our Employer</h1>
      </div>
    </header>
  );
};

export default Header;
