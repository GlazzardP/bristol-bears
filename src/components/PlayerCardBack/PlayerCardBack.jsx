import React from "react";
import styles from "./PlayerCardBack.module.scss";
import PlayerStats from "../PlayerStats";

const PlayerCardBack = props => {
  const { playerObj } = props;

  return (
    <section className={styles.PlayerCardBack}>
      <PlayerStats
        attacking={playerObj.attacking}
        defending={playerObj.defending}
        strength={playerObj.strength}
        speed={playerObj.speed}
        experience={playerObj.experience}
      />
    </section>
  );
};

export default PlayerCardBack;
