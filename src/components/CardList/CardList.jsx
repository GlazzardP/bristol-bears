import React from "react";
import styles from "./CardList.module.scss";
import PlayerCardFront from "../PlayerCardFront/";
import players from "../../data/data";

const CardList = () => {
  return (
    <section>
      {players.map(player => {
        return (
          <div>
            <PlayerCardFront playerObj={player}></PlayerCardFront>
          </div>
        );
      })}
    </section>
  );
};

export default CardList;
