import React, { useEffect } from "react";
import firebase, { provider, firestore } from "../../firebase";

import styles from "./Stats.module.scss";
import { useState } from "react";

const Stats = () => {
  const [pickedPlayers, addPickedPlayers] = useState([]);
  let playerAppearances = {};
  // let submittedTeams = [];

  const getSubmitedTeams = () => {
    firestore
      .collection("team")
      .get()
      .then((querySnapshot) => {
        let submittedTeams = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          doc
            .data()
            .currentTeam.forEach((player) =>
              submittedTeams.push(player.playerName)
            );
        });

        submittedTeams.forEach((player) => {
          if (playerAppearances.hasOwnProperty(player)) {
            playerAppearances[player] = playerAppearances[player] + 1;
          } else {
            playerAppearances[player] = 1;
          }
        });

        let arrayPlayerObj = [];
        for (const playerName in playerAppearances) {
          arrayPlayerObj.push({
            playerName,
            playerAppearances: playerAppearances[playerName],
          });
        }
        addPickedPlayers(arrayPlayerObj);

        // const teamsSubmitted = submittedTeams.length / 15;
      });
  };

  useEffect(() => {
    getSubmitedTeams();
  }, []);

  const printPlayerStatsJsx = pickedPlayers.map((player) => {
    return (
      <div className={styles.playerStat}>
        <p>
          {player.playerName}: {player.playerAppearances}
        </p>
        {/* <p>{player.playerAppearances / teamsSubmitted.length}</p> */}
      </div>
    );
  });

  console.log(printPlayerStatsJsx);
  return (
    <section className={styles.playerStats}>{printPlayerStatsJsx}</section>
  );
};
export default Stats;
