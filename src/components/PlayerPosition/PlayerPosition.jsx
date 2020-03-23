import React from "react";
// import styles from "./PlayerPosition.module.scss";

const PlayerPosition = props => {
  const { position } = props;
  return (
    <>
      <h4>{position}</h4>
    </>
  );
};

export default PlayerPosition;
