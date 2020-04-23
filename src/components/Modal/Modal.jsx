import React from "react";
import styles from "./Modal.module.scss";

const Modal = (props) => {
  const { toggleConfModal, togglePitchPage } = props;

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalBox}>
        <p
          onClick={() => {
            togglePitchPage(false);
            toggleConfModal(false);
          }}
        >
          Go To Stats
        </p>
        <button onClick={() => toggleConfModal(false)}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
