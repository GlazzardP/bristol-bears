import React from "react";
import styles from "./PlayerCardFront.module.scss";
import PlayerName from "../PlayerName";
import PlayerPosition from "../PlayerPosition";
import PlayerImg from "../PlayerImg";

const PlayerCardFront = props => {
  const { playerObj } = props;
  console.log(playerObj);

  return (
    <section className={styles.PlayerCardFront}>
      <PlayerImg
        image={playerObj.playerImg}
        playerName={playerObj.playerName}
      />
      <PlayerName name={playerObj.playerName} />
      <PlayerPosition position={playerObj.position} />
    </section>
  );
};

export default PlayerCardFront;
