import React from "react";
import styles from "./Squad.module.scss";
import PlayerCardFront from "../../components/PlayerCardFront";
import PlayerCardBack from "../../components/PlayerCardBack";
import players from "../../data/data";

const Squad = () => {
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

export default Squad;
