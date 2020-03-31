import React, { useState } from "react";
import styles from "./Pitch.module.scss";
// import PlayerPosition from "../../components/PlayerPosition";

const Pitch = props => {
  const { currentTeam } = props;

  return (
    <section className={styles.Pitch}>
      {currentTeam.slice(0, 3).map(playerObj => (
        <div className={styles.ShirtPlayer}>
          <p>{playerObj.playerName}</p>
          <p>{playerObj.PlayerNum}</p>
        </div>
      ))}
      {currentTeam.slice(3, 6).map(playerObj => (
        <div className={styles.ShirtPlayer}>
          <p>{playerObj.playerName}</p>
          <p>{playerObj.PlayerPosition}</p>
        </div>
      ))}
      {currentTeam.slice(6, 9).map(playerObj => (
        <div className={styles.ShirtPlayer}>
          <p>{playerObj.playerName}</p>
          <p>{playerObj.PlayerPosition}</p>
        </div>
      ))}
      {currentTeam.slice(9, 10).map(playerObj => (
        <div className={styles.ShirtPlayer}>
          <p>{playerObj.playerName}</p>
          <p>{playerObj.PlayerPosition}</p>
        </div>
      ))}
      {currentTeam.slice(10, 11).map(playerObj => (
        <div className={styles.ShirtPlayer}>
          <p>{playerObj.playerName}</p>
          <p>{playerObj.PlayerPosition}</p>
        </div>
      ))}
      {currentTeam.slice(11, 12).map(playerObj => (
        <div className={styles.ShirtPlayer}>
          <p>{playerObj.playerName}</p>
          <p>{playerObj.PlayerPosition}</p>
        </div>
      ))}
      {currentTeam.slice(12, 13).map(playerObj => (
        <div className={styles.ShirtPlayer}>
          <p>{playerObj.playerName}</p>
          <p>{playerObj.PlayerPosition}</p>
        </div>
      ))}
      {currentTeam.slice(13, 14).map(playerObj => (
        <div className={styles.ShirtPlayer}>
          <p>{playerObj.playerName}</p>
          <p>{playerObj.PlayerPosition}</p>
        </div>
      ))}{" "}
      {currentTeam.slice(14, 15).map(playerObj => (
        <div className={styles.ShirtPlayer}>
          <p>{playerObj.playerName}</p>
          <p>{playerObj.PlayerPosition}</p>
        </div>
      ))}
    </section>
  );
};

export default Pitch;
