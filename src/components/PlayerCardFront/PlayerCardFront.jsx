import React, { useState } from "react";
import styles from "./PlayerCardFront.module.scss";
import PlayerName from "../PlayerName";
import PlayerPosition from "../PlayerPosition";
import PlayerImg from "../PlayerImg";

const PlayerCardFront = props => {
  const [notSelected, toggleSelectionToTeam] = useState();
  const { playerObj } = props;
  console.log(playerObj);

  // const addToTeam = () => {
  //   if (position={playerObj.position} === "Prop") {

  // }
  return (
    <>
      <section className={styles.PlayerCardFront}>
        <PlayerImg
          image={playerObj.playerImg}
          playerName={playerObj.playerName}
        />
        <PlayerName name={playerObj.playerName} />
        <PlayerPosition position={playerObj.position} />
      </section>
      <div>
        <button>Select</button>
      </div>
    </>
  );
};

export default PlayerCardFront;
