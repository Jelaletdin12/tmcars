import React from "react";
import styles from "./loginform.module.scss";

const LoginForm = () => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.formSignin}>
        <h2 className={styles.formSigninHeading}>Please login</h2>
        <input
          type="text"
          className={styles.formControl}
          name="username"
          placeholder="Email Address"
          required
          autoFocus
        />
        <input
          type="password"
          className={styles.formControl}
          name="password"
          placeholder="Password"
          required
        />
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            value="remember-me"
            id="rememberMe"
            name="rememberMe"
          />{" "}
          Remember me
        </label>
        <button
          className={`${styles.btn} ${styles.btnLg} ${styles.btnPrimary} ${styles.btnBlock}`}
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
