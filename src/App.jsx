import React, { useState } from "react";
// import styles from "./App.module.scss";
// import CardList from "./components/CardList";
import NavBar from "./containers/NavBar";
import Pitch from "./containers/Pitch";
import Squad from "./containers/Squad/Squad";

function App() {
  const [currentTeam, addPlayerToTeam] = useState([]);

  const updateTeam = playerObj => {
    const teamAlreadySelected = [...currentTeam];
    if (teamAlreadySelected.includes(playerObj.playerName)) {
      alert("already selected");
    } else {
      const newTeam = [...currentTeam, playerObj];
      addPlayerToTeam(newTeam);
    }
  };

  return (
    <>
      <NavBar />
      <Pitch currentTeam={currentTeam} />
      <Squad updateTeam={updateTeam} />
    </>
  );
}

export default App;
