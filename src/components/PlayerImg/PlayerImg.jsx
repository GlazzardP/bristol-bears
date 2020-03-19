import React from "react";
import styles from "";

const PlayerImg = props => {
  const { image } = props;
  return (
    <>
      <img src={image} alt={playerName} />
    </>
  );
};

export default PlayerImg;
