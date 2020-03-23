import React from "react";
// import styles from "./App.module.scss";
// import CardList from "./components/CardList";
import NavBar from "./containers/NavBar";
import Pitch from "./containers/Pitch";
import Squad from "./containers/Squad/Squad";

function App() {
  return (
    <>
      <NavBar />
      <Pitch />
      {/* <div className={styles.CardList}>
        <CardList />
      </div> */}
      <Squad />
    </>
  );
}

export default App;
