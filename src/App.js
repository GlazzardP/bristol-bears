import React from "react";
import "./App.css";
// import PlayerCard from "./components/PlayerCard";
// import Pitch from "./containers/Pitch";
// Importing players below
import CardList from "./components/CardList";
import players from "./data/data.js";

function App() {
  return (
    <div>
      {/* <Pitch /> */}
      {/* <PlayerCard playersArray={players} /> */}
      <CardList />
    </div>
  );
}

// what properties do you need from it??
// All, to be used in different components

export default App;
