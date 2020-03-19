import React from "react";
import styles from "./PlayerStats.module.scss";
import data from "../PlayerStats";

const PlayerStats = props => {
  const {
    attackScore,
    defenseScore,
    strengthScore,
    speedScore,
    experienceScore
  } = props;
  return (
    <>
      <p>Attack: {attackScore}</p>
      <p>Defense: {defenseScore}</p>
      <p>Strength: {strengthScore}</p>
      <p>Speed: {speedScore}</p>
      <p>Experience: {experienceScore}</p>
    </>
  );
};

export default PlayerStats;
