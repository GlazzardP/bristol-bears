import React from "react";

import styles from "./NavBar.module.scss";
import image from "../../data/1200px-Bristol_Bears_logo.svg (1).png";

const NavBar = (props) => {
  const { signIn, signOut } = props;

  return (
    <nav className={styles.NavBar}>
      <div className={styles.mainNav}>
        <img src={image} alt="" />
        <h1>Choose your first Bristol Bears XV </h1>
        <img src={image} alt="" />
        <div className={styles.authButtons}>
          <li onClick={signIn}>Log In</li>
          <li onClick={signOut}>Log Out</li>
        </div>
      </div>
      <div className={styles.squadNav}>
        <h2>Squad</h2>
      </div>
    </nav>
  );
};

export default NavBar;
