import Header from "../../components/header/header";
import React, { useState } from "react";
import styles from "./home.module.scss";
import profile from "../../assets/profile.png";

const usersData = [
  {
    name: "Alyssa Watts",
    email: "alyssa.watts@example.com",
    position: "Backend Developer",
    photo: profile,
  },
  {
    name: "Theodore Wright",
    email: "theodore.wright@example.com",
    position: "Frontend Developer",
    photo: profile,
  },
  {
    name: "Ariana Cooper",
    email: "ariana.cooper@example.com",
    position: "UI/UX Designer",
    photo: profile,
  },
];

const Home = () => {
  return (
    <>
      <div className={styles.homePage}>
        <h1>Awesome Startup Employee Directory</h1>
        <div className={styles.userGrid}>
          {usersData.map((user, index) => (
            <div key={index} className={styles.userCard}>
              <img
                src={user.photo}
                alt={`${user.name}`}
                className={styles.userPhoto}
              />
              <div className={styles.userInfo}>
                <h2>{user.name}</h2>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Position:</strong> {user.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
