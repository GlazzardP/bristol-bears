import React from "react";
import styles from "./PlayerStats.module.scss";

const PlayerStats = props => {
  const { attacking, defending, strength, speed, experience } = props;
  return (
    <>
      <p>Attack: {attacking}</p>
      <p>Defense: {defending}</p>
      <p>Strength: {strength}</p>
      <p>Speed: {speed}</p>
      <p>Experience: {experience}</p>
    </>
  );
};

export default PlayerStats;
