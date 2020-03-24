import React from "react";
import styles from "./Shirt.module.scss";

const Shirt = props => {
  const { playerNum } = props;
  return (
    <div>
      <p>{playerNum}</p>
    </div>
  );
};

export default Shirt;
