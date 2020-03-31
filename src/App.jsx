import React, { useState } from "react";
import styles from "./App.module.scss";
// import CardList from "./components/CardList";
import NavBar from "./containers/NavBar";
import Pitch from "./containers/Pitch";
import Squad from "./containers/Squad/Squad";

function App() {
  const [currentTeam, addPlayerToTeam] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ]);

  // let player = playerObj.playerName;

  const updateTeam = playerObj => {
    const teamAlreadySelected = [...currentTeam];
    // if (teamAlreadySelected.includes(player)) {
    //   alert("already selected");
    console.log(currentTeam);
    // } else {]
    teamAlreadySelected[playerObj.positionNum - 1] = playerObj;

    // const newTeam = [...currentTeam, playerObj];
    addPlayerToTeam(teamAlreadySelected);
  };

  return (
    <div className={styles.main}>
      <NavBar />
      <div>
        <Pitch currentTeam={currentTeam} />
        <Squad updateTeam={updateTeam} currentTeam={currentTeam} />
      </div>
    </div>
  );
}

export default App;
