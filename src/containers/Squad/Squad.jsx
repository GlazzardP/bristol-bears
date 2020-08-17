import React, { useState } from "react";
import styles from "./Squad.module.scss";
import PlayerCardFront from "../../components/PlayerCardFront";
import PlayerCardBack from "../../components/PlayerCardBack";
import players from "../../data/data";

const Squad = (props) => {
  const { updateTeam, currentTeam, positionFilter } = props;
  // const [positionFilter, updateFilterPosition] = useState("");

  const selectedPlayers = currentTeam.map((player) => player.playerName);
  const filteredPlayers = players
    .filter((player) => !selectedPlayers.includes(player.playerName))
    .filter((player) => player.position == positionFilter);
  // console.log(filteredPlayers);

  // function handleChange(e) {
  //   updateFilterPosition(e.target.value);
  // }

  return (
    <>
      <section className={styles.squad}>
        {/* <select
          className={styles.playerOptionSelect}
          onChange={handleChange}
          className={styles.BOLD}
        >
          <option>All</option>

          <option value="Prop">Prop</option>
          <option value="Hooker">Hooker</option>
          <option value="Lock">Lock</option>
          <option value="Flanker">Flanker</option>
          <option value="No. 8">No. 8</option>
          <option value="Scrum Half">Scrum Half</option>
          <option value="Fly Half">Fly Half</option>
          <option value="Centre">Centre</option>
          <option value="Wing">Wing</option>
          <option value="Fullback">Fullback</option>
        </select> */}
        <hr></hr>
        {filteredPlayers.map((player) => {
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
    </>
  );
};

export default Squad;
