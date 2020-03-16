import React from "react";
import styles from "./PlayerName.module.scss";

const PlayerName = props => {
  const { name } = props;
  return (
    <>
      <h3>{name}</h3>
    </>
  );
};

export default PlayerName;
