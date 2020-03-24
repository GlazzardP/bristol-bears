import React, { useState } from "react";
import styles from "./Pitch.module.scss";

const Pitch = () => {
  const [currentTeam, addPlayerToTeam] = useState([]);

  const updateTeam = playerObj => {
    const newTeam = [...currentTeam, playerObj];
    addPlayerToTeam(newTeam);
  };

  return (
    <section className={styles.Pitch}>
      {currentTeam.map(playerObj => (
        <p>{playerObj.playerName}</p>
      ))}
      {/* <p add={addPlayerToTeam}></p> */}
      {/* <div className={styles.FrontRow}>
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
      <div className={styles.SecondRow}>
        <p>4</p>
        <p>5</p>
      </div>
      <div className={styles.BackRow}>
        <p>6</p>
        <p>8</p>
        <p>7</p>
      </div>
      <div className={styles.HalfBacks}>
        <p>9</p>
        <p>10</p>
      </div>
      <div className={styles.Centers}>
        <p>12</p>
        <p>13</p>
      </div>
      <div className={styles.Wings}>
        <p>11</p>
        <p>14</p>
      </div>
      <p className={styles.FullBack}>15</p> */}
    </section>
  );
};

export default Pitch;
