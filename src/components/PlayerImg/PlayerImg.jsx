import React from "react";
import styles from "";

const PlayerImg = props => {
  const { image, playerName } = props;
  return (
    <>
      <img src={image} alt={playerName} />
    </>
  );
};
