import React from "react";
import styles from "./Pitch.module.scss";
// import pitch from "../../data/rugby.png";

const Pitch = props => {
  const { image } = props;
  return (
    <>
      <img src={image} alt="" />
    </>
  );
};

export default Pitch;
