import React, { useState } from "react";
import styles from "./PlayerCardFront.module.scss";
import PlayerName from "../PlayerName";
import PlayerPosition from "../PlayerPosition";
import PlayerImg from "../PlayerImg";
// import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const PlayerCardFront = props => {
  const [notSelected, toggleSelectionToTeam] = useState();
  const { playerObj, updateTeam } = props;
  // console.log(playerObj);

  return (
    <>
      <section className={styles.PlayerCardFront}>
        <PlayerImg
          image={playerObj.playerImg}
          playerName={playerObj.playerName}
        />
        <PlayerName name={playerObj.playerName} />
        <PlayerPosition
          position={playerObj.position}
          positionNumber={playerObj.positionNum}
        />
        {/* <FontAwesomeIcon icon={faUserPlus} /> */}
        {/* <FontAwesomeIcon icon={faCheckCircle} /> */}
        <p onClick={() => updateTeam(playerObj)}>Select</p>
      </section>
      <div></div>
    </>
  );
};

export default PlayerCardFront;
