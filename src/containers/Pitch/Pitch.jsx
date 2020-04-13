import React from "react";
import styles from "./Pitch.module.scss";
import { firestore } from "../../firebase.js"

const Pitch = (props) => {
  const { currentTeam } = props;

  const getSumJsx = (type) => { 
    const currentTeamArray = currentTeam.filter((playerObj) => { 
      return playerObj.hasOwnProperty(type)
    })
    let attackArray = currentTeamArray.map((playerObj) => playerObj[type]);

    let attackSum = attackArray.reduce((accumulator, currentValue) => { 
      return accumulator + currentValue;
    }, 0);
    return Math.floor(attackSum / currentTeamArray.length) || 0;
  }



//   let attackArray = currentTeam.map((playerObj) => playerObj.attacking);
//   // const currentTeamArray = currentTeam.filter((playerObj) => { 
//   //   const attackArray = playerObj.attacking > 0;
//   //   return attackArray
//   // })
//   let attackSum = attackArray.reduce((accumulator, currentValue) => { 
//     return accumulator + currentValue;
//   }, 0);
//   console.log(attackSum)
//   const teamAttackPercentageJsx = Math.floor(attackSum / currentTeam.length);

// // Defence info

//   let defenceArray = currentTeam.map((playerObj) => playerObj.defending)

//   let defenceSum = defenceArray.reduce((accumulator, currentValue) => { 
//     return accumulator + currentValue;
//   }, 0);

//   const teamDefenceJsx = Math.floor(defenceSum / currentTeam.length);

//   // strength info

//   let strengthArray = currentTeam.map((playerObj) => playerObj.strength)

//   let strengthSum = strengthArray.reduce((accumulator, currentValue) => { 
//     return accumulator + currentValue;
//   }, 0);

//   const teamstrengthJsx = Math.floor(strengthSum / currentTeam.length);

//   // speed info
//   let speedArray = currentTeam.map((playerObj) => playerObj.speed)
//   let speedSum = speedArray.reduce((accumulator, currentValue) => { 
//     return accumulator + currentValue;
//   }, 0);

//   const teamspeedJsx = Math.floor(speedSum / currentTeam.length);

//   // experience info
//   let experienceArray = currentTeam.map((playerObj) => playerObj.experience)
//   let experienceSum = experienceArray.reduce((accumulator, currentValue) => { 
//     return accumulator + currentValue;
//   }, 0);

//   const teamexperienceJsx = Math.floor(experienceSum / currentTeam.length);

  const teamScoreJsx = (getSumJsx("attacking") + getSumJsx("defending") + getSumJsx("speed") + getSumJsx("strength") + getSumJsx("experience")) / 5;



  // DB - CRUD 
const addToDb = () => {
  // if (user) { // Dont yet require login
  firestore 
    .collection("team")
    .doc("users")
    .set({currentTeam})
    // .then(() => {
    // })
    .catch(err => {
      console.log(err);
    });
} 


  return (
    <>
      <section className={styles.Pitch}>
        <section className={styles.frontRow}>
          {currentTeam.slice(0, 3).map((playerObj) => (
            <div className={styles.ShirtPlayer}>
              <p>{playerObj.playerName}</p>
              <p>{playerObj.PlayerNum}</p>
            </div>
          ))}
        </section>

        <section className={styles.secondRow}>
          {currentTeam.slice(5, 6).map((playerObj) => (
            <div className={styles.ShirtPlayer}>
              <p>{playerObj.playerName}</p>
              <p>{playerObj.PlayerNum}</p>
            </div>
          ))}

          {currentTeam.slice(3, 5).map((playerObj) => (
            <div className={styles.ShirtPlayer}>
              <p>{playerObj.playerName}</p>
              <p>{playerObj.PlayerNum}</p>
            </div>
          ))}

          {currentTeam.slice(6, 7).map((playerObj) => (
            <div className={styles.ShirtPlayer}>
              <p>{playerObj.playerName}</p>
              <p>{playerObj.PlayerNum}</p>
            </div>
          ))}
        </section>

        <section className={styles.noEight}>
          {currentTeam.slice(7, 8).map((playerObj) => (
            <div className={styles.ShirtPlayer}>
              <p>{playerObj.playerName}</p>
              <p>{playerObj.PlayerNum}</p>
            </div>
          ))}
        </section>

        <section className={styles.scrumHalf}>
          {currentTeam.slice(8, 9).map((playerObj) => (
            <div className={styles.ShirtPlayer}>
              <p>{playerObj.playerName}</p>
              <p>{playerObj.PlayerNum}</p>
            </div>
          ))}
        </section>

        <section className={styles.flyHalf}>
          {currentTeam.slice(9, 10).map((playerObj) => (
            <div className={styles.ShirtPlayer}>
              <p>{playerObj.playerName}</p>
              <p>{playerObj.PlayerNum}</p>
            </div>
          ))}
        </section>

        <section className={styles.centres}>
          {currentTeam.slice(11, 13).map((playerObj) => (
            <div className={styles.ShirtPlayer}>
              <p>{playerObj.playerName}</p>
              <p>{playerObj.PlayerNum}</p>
            </div>
          ))}
        </section>

        <section className={styles.wings}>
          {currentTeam.slice(10, 11).map((playerObj) => (
            <div className={styles.ShirtPlayer}>
              <p>{playerObj.playerName}</p>
              <p>{playerObj.PlayerNum}</p>
            </div>
          ))}

          {currentTeam.slice(13, 14).map((playerObj) => (
            <div className={styles.ShirtPlayer}>
              <p>{playerObj.playerName}</p>
              <p>{playerObj.PlayerNum}</p>
            </div>
          ))}
        </section>

        <section className={styles.fullBack}>
          {currentTeam.slice(14, 15).map((playerObj) => (
            <div className={styles.ShirtPlayer}>
              <p>{playerObj.playerName}</p>
              <p>{playerObj.PlayerNum}</p>
            </div>
          ))}
        </section>
      </section>
      <div className={styles.feedback}>
        <p>Attack: {getSumJsx("attacking")} %</p>
        <p>Defence: {getSumJsx("defending")} %</p>
        <p>Strength: {getSumJsx("strength")} %</p>
        <p>Strength: {getSumJsx("speed")} %</p>
        <p>Strength: {getSumJsx("experience")} %</p>
        <p>Overall: {teamScoreJsx} %</p> */}





        <button id="submitTeam" onClick={addToDb} >Submit Team</button>
      </div>
{/* 
      <div id="myModal" class="modal">
          <div className={styles.modalContent}>
            <span className={styles.close}></span>
            <p>Some text in the Modal..</p>
          </div>

        </div> */}
   
  </>
  );
};

export default Pitch;
