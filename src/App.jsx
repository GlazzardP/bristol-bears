import React from "react";
import styles from "./App.module.scss";
import CardList from "./components/CardList";
import players from "./data/data.js";
import NavBar from "./containers/NavBar";

function App() {
  return (
    <>
      <section>
        <NavBar />
      </section>
      <div className={styles.CardList}>
        <CardList />
      </div>
    </>
  );
}

export default App;
