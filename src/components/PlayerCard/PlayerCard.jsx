import React from "react";
import styles from "./PlayerCard.module.scss";
import PlayerName from "../PlayerName";
import PlayerStats from "../PlayerStats";
import PlayerPosition from "../PlayerPosition";
import PlayerImg from "../PlayerImg";

const PlayerCard = () => {
  return (
    <section className={styles.PlayerCard}>
      <PlayerImg />
      <PlayerName />
      <PlayerPosition />
      <PlayerStats />
    </section>
  );
};

export default PlayerCard;
