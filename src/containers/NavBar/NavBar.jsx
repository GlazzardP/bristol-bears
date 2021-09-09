import React, { useState } from "react";

import styles from "./NavBar.module.scss";
import image from "../../data/1200px-Bristol_Bears_logo.svg (1).png";

const NavBar = (props) => {
  const { signIn, signOut, user, positionFilter, updateFilterPosition } = props;


  const signInOutJsx = user ? (
    <div className={styles.authButtons}>
      <li onClick={signOut}>Log Out</li>
    </div>
  ) : (
    <div className={styles.authButtons}>
      <li onClick={signIn}>Log In</li>
    </div>
  );

  const handleChange = (e) => {
    updateFilterPosition(e.target.value);
  };

  // function handleChange(e) {
  //   updateFilterPosition(e.target.value);
  // }
  return (
    <nav className={styles.NavBar}>
      <div className={styles.mainNav}>
        <img src={image} alt="" />
        <h1>Choose your first Bristol Bears XV </h1>
        <img src={image} alt="" />
        {signInOutJsx}
      </div>
      <div className={styles.squadNav}>
        <h2>Squad</h2>
        <select className={styles.playerOptionSelect} onChange={handleChange}>
          {/* <option>All</option> */}

          <option value="Prop">Prop</option>
          <option value="Hooker">Hooker</option>
          <option value="Lock">Lock</option>
          <option value="Flanker">Flanker</option>
          <option value="No. 8">No. 8</option>
          <option value="Scrum Half">Scrum Half</option>
          <option value="Fly Half">Fly Half</option>
          <option value="Centre">Centre</option>
          <option value="Wing">Wing</option>
          <option value="Fullback">Fullback</option>
        </select>
      </div>
    </nav>
  );
};

export default NavBar;
