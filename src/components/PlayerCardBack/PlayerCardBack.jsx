import React from "react";
import styles from "./PlayerCardBack.module.scss";
import PlayerStats from "../PlayerStats";

const PlayerCardBack = () => {
  return (
    <>
      <PlayerStats
        attacking={playerObj.attacking}
        defending={playerObj.defending}
        strength={playerObj.strength}
        speed={playerObj.speed}
        experience={playerObj.experience}
      />
    </>
  );
};

export default PlayerCardBack;
