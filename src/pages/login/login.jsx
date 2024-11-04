import React, { useState } from "react";
import styles from "./loginform.module.scss";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.username))
      newErrors.username = "Invalid email format";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Login successful:", formData);
      setShowPopup(true);

      // Popup'u belirli bir süre sonra gizle
      setTimeout(() => setShowPopup(false), 3000);

      // Formu sıfırlama
      setFormData({ username: "", password: "" });
      setErrors({});
    }
  };

  return (
    <div className={styles.wrapper}>
      {showPopup && <div className={styles.popup}>Login successfully!</div>}
      <form className={styles.formSignin} onSubmit={handleSubmit}>
        <h2 className={styles.formSigninHeading}>Please login</h2>
        <input
          type="text"
          className={styles.formControl}
          name="username"
          placeholder="Email Address"
          value={formData.username}
          onChange={handleInputChange}
          required
          autoFocus
        />
        {errors.username && <p className={styles.error}>{errors.username}</p>}

        <input
          type="password"
          className={styles.formControl}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}

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
