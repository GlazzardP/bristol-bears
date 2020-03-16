import React from "react";
import "./App.css";
import PlayerCard from "./components/PlayerCard";
import Pitch from "./containers/Pitch";

function App() {
  return (
    <>
      <Pitch />
      <PlayerCard />
    </>
  );
}

export default App;
