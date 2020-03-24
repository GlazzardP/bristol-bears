import React from "react";
import styles from "./SelectedPlayer.module.scss";

const SelectedPlayer = () => {
  return (
    <div>
      {currentTeam.map(shirt => {
        return (
          <div>
            <Shirt playerNum={shirt} />
          </div>
        );
      })}
    </div>
  );
};

export default SelectedPlayer;
