import React, { useState } from "react";
import styles from "./createEmployee.module.scss";

const AddEmployeePage = () => {
  const [employeeData, setEmployeeData] = useState({
    first_name: "",
    last_name: "",
    birth_date: "",
    phone_number: "",
    position: "",
    avatar: "",
    email: "",
    hire_date: "",
    resign_date: "",
  });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!employeeData.first_name.trim())
      newErrors.first_name = "First name is required";
    else if (employeeData.first_name.length < 2)
      newErrors.first_name = "First name must be at least 2 characters";

    if (!employeeData.last_name.trim())
      newErrors.last_name = "Last name is required";
    else if (employeeData.last_name.length < 2)
      newErrors.last_name = "Last name must be at least 2 characters";

    if (!employeeData.birth_date)
      newErrors.birth_date = "Birth date is required";

    const phoneRegex = /^[0-9]{10,15}$/;
    if (!employeeData.phone_number)
      newErrors.phone_number = "Phone number is required";
    else if (!phoneRegex.test(employeeData.phone_number))
      newErrors.phone_number = "Phone number must be 10-15 digits long";

    if (!employeeData.position.trim())
      newErrors.position = "Position is required";
    else if (employeeData.position.length < 3)
      newErrors.position = "Position must be at least 3 characters";

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!employeeData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(employeeData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!employeeData.hire_date) newErrors.hire_date = "Hire date is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddEmployee = () => {
    if (validateForm()) {
      console.log("Employee added:", employeeData);
      setEmployeeData({
        first_name: "",
        last_name: "",
        birth_date: "",
        phone_number: "",
        position: "",
        avatar: "",
        email: "",
        hire_date: "",
        resign_date: "",
      });
      setErrors({});
      setShowPopup(true); 

    
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  return (
    <div className={styles.addEmployeePage}>
      <h2>Add New Employee</h2>

      {showPopup && (
        <div className={styles.popup}>Employee successfully created!</div>
      )}

      <div className={styles.formContainer}>
        <div className={styles.formGroup}>
          <label>First Name:</label>
          <input
            type="text"
            name="first_name"
            value={employeeData.first_name}
            onChange={handleInputChange}
          />
          {errors.first_name && (
            <p className={styles.error}>{errors.first_name}</p>
          )}
        </div>
        <div className={styles.formGroup}>
          <label>Last Name:</label>
          <input
            type="text"
            name="last_name"
            value={employeeData.last_name}
            onChange={handleInputChange}
          />
          {errors.last_name && (
            <p className={styles.error}>{errors.last_name}</p>
          )}
        </div>
        <div className={styles.formGroup}>
          <label>Birth Date:</label>
          <input
            type="date"
            name="birth_date"
            value={employeeData.birth_date}
            onChange={handleInputChange}
          />
          {errors.birth_date && (
            <p className={styles.error}>{errors.birth_date}</p>
          )}
        </div>
        <div className={styles.formGroup}>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone_number"
            value={employeeData.phone_number}
            onChange={handleInputChange}
            placeholder="1234567890"
          />
          {errors.phone_number && (
            <p className={styles.error}>{errors.phone_number}</p>
          )}
        </div>
        <div className={styles.formGroup}>
          <label>Position:</label>
          <input
            type="text"
            name="position"
            value={employeeData.position}
            onChange={handleInputChange}
          />
          {errors.position && <p className={styles.error}>{errors.position}</p>}
        </div>
        <div className={styles.formGroup}>
          <label>Avatar (URL):</label>
          <input
            type="url"
            name="avatar"
            value={employeeData.avatar}
            onChange={handleInputChange}
            placeholder="https://example.com/image.jpg"
          />
        </div>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={employeeData.email}
            onChange={handleInputChange}
            placeholder="employee@example.com"
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
        <div className={styles.formGroup}>
          <label>Hire Date:</label>
          <input
            type="date"
            name="hire_date"
            value={employeeData.hire_date}
            onChange={handleInputChange}
          />
          {errors.hire_date && (
            <p className={styles.error}>{errors.hire_date}</p>
          )}
        </div>
        <button onClick={handleAddEmployee} className={styles.addButton}>
          Add Employee
        </button>
      </div>
    </div>
  );
};

export default AddEmployeePage;
