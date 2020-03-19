import React from "react";
import styles from "./CardList.module.scss";
import PlayerCard from "../PlayerCard/";
import players from "../../data/data";

const CardList = () => {
  return (
    <section>
      {players.map(player => {
        return (
          <div>
            <PlayerCard playerObj={player}></PlayerCard>
          </div>
        );
      })}
    </section>
  );
};

export default CardList;
