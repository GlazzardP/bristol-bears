import React, { useState } from "react";
import styles from "./Pitch.module.scss";
// import PlayerPosition from "../../components/PlayerPosition";

const Pitch = (props) => {
  const { currentTeam } = props;

  let attackArray = currentTeam.map((playerObj) => playerObj.attacking);

  let attackSum = attackArray.reduce((accumulator, currentValue) => { 
    return accumulator + currentValue;
  }, 0);

  const teamAttackPercentageJsx = Math.floor(attackSum / currentTeam.length);
  console.log(teamAttackPercentageJsx)

  let scoreArray = currentTeam.map((playerObj) => playerObj.ALL)

  let scoreSum = scoreArray.reduce((accumulator, currentValue) => { 
    return accumulator + currentValue;
  }, 0);

  

  return (
    <>
      <section className={styles.Pitch}>
        <section className={styles.frontRow}>
          {currentTeam.slice(0, 3).map((playerObj) => (
            <div className={styles.ShirtPlayer}>
              <p>{playerObj.playerName}</p>
              <p>{playerObj.PlayerNum}</p>
            </div>
          ))}
        </section>

        <section className={styles.secondRow}>
          {currentTeam.slice(5, 6).map((playerObj) => (
            <div className={styles.ShirtPlayer}>
              <p>{playerObj.playerName}</p>
              <p>{playerObj.PlayerPosition}</p>
            </div>
          ))}

          {currentTeam.slice(3, 5).map((playerObj) => (
            <div className={styles.ShirtPlayer}>
              <p>{playerObj.playerName}</p>
              <p>{playerObj.PlayerPosition}</p>
            </div>
          ))}

          {currentTeam.slice(6, 7).map((playerObj) => (
            <div className={styles.ShirtPlayer}>
              <p>{playerObj.playerName}</p>
              <p>{playerObj.PlayerPosition}</p>
            </div>
          ))}
        </section>

        <section className={styles.noEight}>
          {currentTeam.slice(7, 8).map((playerObj) => (
            <div className={styles.ShirtPlayer}>
              <p>{playerObj.playerName}</p>
              <p>{playerObj.PlayerPosition}</p>
            </div>
          ))}
        </section>

        <section className={styles.scrumHalf}>
          {currentTeam.slice(8, 9).map((playerObj) => (
            <div className={styles.ShirtPlayer}>
              <p>{playerObj.playerName}</p>
              <p>{playerObj.PlayerPosition}</p>
            </div>
          ))}
        </section>

        <section className={styles.flyHalf}>
          {currentTeam.slice(9, 10).map((playerObj) => (
            <div className={styles.ShirtPlayer}>
              <p>{playerObj.playerName}</p>
              <p>{playerObj.PlayerPosition}</p>
            </div>
          ))}
        </section>

        <section className={styles.centres}>
          {currentTeam.slice(11, 13).map((playerObj) => (
            <div className={styles.ShirtPlayer}>
              <p>{playerObj.playerName}</p>
              <p>{playerObj.PlayerPosition}</p>
            </div>
          ))}
        </section>

        <section className={styles.wings}>
          {currentTeam.slice(10, 11).map((playerObj) => (
            <div className={styles.ShirtPlayer}>
              <p>{playerObj.playerName}</p>
              <p>{playerObj.PlayerPosition}</p>
            </div>
          ))}

          {currentTeam.slice(13, 14).map((playerObj) => (
            <div className={styles.ShirtPlayer}>
              <p>{playerObj.playerName}</p>
              <p>{playerObj.PlayerPosition}</p>
            </div>
          ))}
        </section>

        <section className={styles.fullBack}>
          {currentTeam.slice(14, 15).map((playerObj) => (
            <div className={styles.ShirtPlayer}>
              <p>{playerObj.playerName}</p>
              <p>{playerObj.PlayerPosition}</p>
            </div>
          ))}
        </section>
      </section>
      <div className={styles.feedback}>
        <p>Attack: {teamAttackPercentageJsx}%</p>
        <p>Defence: {teamAttackPercentageJsx}%</p>
        <p>Strength: {teamAttackPercentageJsx}%</p>
        <p>Speed: {teamAttackPercentageJsx}%</p>
        <p>Experience: {teamAttackPercentageJsx}%</p>

      </div>   
   
      </>
  );
};

export default Pitch;
