import React from "react";
import styles from "./PlayerCard.module.scss";
import PlayerName from "../PlayerName";
import PlayerStats from "../PlayerStats";
import PlayerPosition from "../PlayerPosition";
import PlayerImg from "../PlayerImg";

const PlayerCard = () => {
  return (
    <>
      <PlayerImg />
      <PlayerPosition />
      <PlayerStats />
    </>
  );
};

export default PlayerCard;
