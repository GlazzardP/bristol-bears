import React, { useState } from "react";
import styles from "./Pitch.module.scss";

const Pitch = () => {
  const [currentTeam, addPlayerToTeam] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15
  ]);
  return (
    <section className={styles.Pitch}>
      {/* <div className={styles.FrontRow}>
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
      <div className={styles.SecondRow}>
        <p>4</p>
        <p>5</p>
      </div>
      <div className={styles.BackRow}>
        <p>6</p>
        <p>8</p>
        <p>7</p>
      </div>
      <div className={styles.HalfBacks}>
        <p>9</p>
        <p>10</p>
      </div>
      <div className={styles.Centers}>
        <p>12</p>
        <p>13</p>
      </div>
      <div className={styles.Wings}>
        <p>11</p>
        <p>14</p>
      </div>
      <p className={styles.FullBack}>15</p> */}
    </section>
  );
};

export default Pitch;
