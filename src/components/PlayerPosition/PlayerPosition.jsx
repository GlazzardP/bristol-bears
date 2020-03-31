import React from "react";
// import styles from "./PlayerPosition.module.scss";

const PlayerPosition = props => {
  const { position, positionNum } = props;
  return (
    <>
      <h4>{position}</h4>
      <h4>{positionNum}</h4>
    </>
  );
};

export default PlayerPosition;
