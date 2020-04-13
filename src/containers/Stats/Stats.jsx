import React from "react";
import styles from "./Stats.module.scss";
import PlayerCardFront from "../../components/PlayerCardFront";
import PlayerCardBack from "../../components/PlayerCardBack";
import players from "../../data/data";

const Stats = props => {

  useEffect(() => {
    fetchStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchStats = () => {
      firestore
        .collection("team")
        .doc("users")
        .get()
        .then(() => { 

        })
        .catch(err => console.log(err));
    
  };
}

  return ;

export default Stats;
