import React from "react";
import styles from "./CardList.module.scss";
import PlayerCardFront from "../PlayerCardFront/";
import PlayerCardBack from "../PlayerCardBack";
import players from "../../data/data";
import Pitch from "../../containers/Pitch";

const CardList = () => {
  const result = players.filter(player =>
    players.includes(playerObj.playerName)
  );

  return (
    <section>
      {players.map(player => {
        return (
          <div className={styles.FrontAndBack}>
            <PlayerCardFront playerObj={player}></PlayerCardFront>
            <PlayerCardBack playerObj={player}></PlayerCardBack>
          </div>
        );
      })}
    </section>
  );
};

export default CardList;
