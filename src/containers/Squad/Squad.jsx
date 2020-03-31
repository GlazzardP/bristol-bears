import React from "react";
import styles from "./Squad.module.scss";
import PlayerCardFront from "../../components/PlayerCardFront";
import PlayerCardBack from "../../components/PlayerCardBack";
import players from "../../data/data";

const Squad = props => {
  const { updateTeam, currentTeam } = props;
  const selectedPlayers = currentTeam.map(player => player.playerName);
  const filteredPlayers = players.filter(
    player => !selectedPlayers.includes(player.playerName)
  );
  // console.log(filteredPlayers);

  return (
    <section>
      {filteredPlayers.map(player => {
        // a list of current players names

        return (
          <div className={styles.FrontAndBack}>
            <PlayerCardFront
              playerObj={player}
              updateTeam={updateTeam}
            ></PlayerCardFront>
            <PlayerCardBack playerObj={player}></PlayerCardBack>
          </div>
        );
      })}
    </section>
  );
};

export default Squad;
