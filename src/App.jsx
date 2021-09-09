import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import firebase, { provider } from "./firebase";
import { Router, Redirect } from "@reach/router";

// import CardList from "./components/CardList";
import NavBar from "./containers/NavBar";
import Pitch from "./containers/Pitch";
import Squad from "./containers/Squad/Squad";
import Stats from "./containers/Stats";
import Modal from "./components/Modal";

function App() {
  // const { positionFilter } = props;
  const [pitchPage, togglePitchPage] = useState(true);
  const [confModal, toggleConfModal] = useState(false);
  const [user, setUser] = useState(null);
  const [positionFilter, updateFilterPosition] = useState("Prop");
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
    {},
  ]);

  const updateTeam = (playerObj) => {
    const teamAlreadySelected = [...currentTeam];
    teamAlreadySelected[playerObj.positionNum - 1] = playerObj;
    addPlayerToTeam(teamAlreadySelected);
  };

  // Authentication
  const signIn = () => {
    firebase.auth().signInWithRedirect(provider);
  };

  const getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        // redirectTo("/landing-page");
        setUser(null);
      }
    });
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        alert("You have signed out");
      })
      .catch((error) => {
        alert("Oh no an error :(");
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className={styles.main}>
      <NavBar
        signIn={signIn}
        signOut={signOut}
        user={user}
        updateFilterPosition={updateFilterPosition}
        positionFilter={positionFilter}
      />
      {confModal ? (
        <Modal
          toggleConfModal={toggleConfModal}
          togglePitchPage={togglePitchPage}
        />
      ) : null}

      {pitchPage ? (
        <div className={styles.layout}>
          <Pitch
            currentTeam={currentTeam}
            user={user}
            toggleConfModal={toggleConfModal}
          />
          <Squad
            updateTeam={updateTeam}
            currentTeam={currentTeam}
            updateFilterPosition={updateFilterPosition}
            positionFilter={positionFilter}

            // positionFilter={positionFilter}
          />
        </div>
      ) : (
        <Stats />
      )}
    </div>
  );
}

export default App;
