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

  const updateTeam = playerObj => {
    const teamAlreadySelected = [...currentTeam];

    // console.log(currentTeam);
    teamAlreadySelected[playerObj.positionNum - 1] = playerObj;

    // const newTeam = [...currentTeam, playerObj];
    addPlayerToTeam(teamAlreadySelected);
  };

  return (
    <div className={styles.main}>
      <NavBar />
      <div className={styles.layout}>
        <Pitch currentTeam={currentTeam} />
        <Squad updateTeam={updateTeam} currentTeam={currentTeam} />
      </div>
    </div>
  );
}

export default App;
