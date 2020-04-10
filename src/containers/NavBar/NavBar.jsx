import React from "react";
import styles from "./NavBar.module.scss";
import image from "../../data/1200px-Bristol_Bears_logo.svg (1).png"

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <img src={image} alt=""/>
      <h1>Choose your first Bristol Bears XV </h1>
      <img src={image} alt=""/>
    </nav>
  );
};

export default NavBar;
