import React, { useState } from "react";
import styles from "./Pitch.module.scss";
// import PlayerPosition from "../../components/PlayerPosition";

const Pitch = props => {
  const { currentTeam } = props;

  // let attackArray = currentTeam.forEach(playerObj => {
  // playerObj.attacking
  //  });

  // console.log(attackArray);

  return (
    <>
    <section className={styles.Pitch}>
       <section className={styles.players}>
         <section className={styles.Forwards}>
         <section className={styles.frontRow}>
               {currentTeam.slice(0, 3).map(playerObj => (
               <div className={styles.ShirtPlayer}>
                  <p>{playerObj.playerName}</p>
                  <p>{playerObj.PlayerNum}</p>
               </div>
            ))}
            </section>

            <section className={styles.secondRow}>
                {currentTeam.slice(5, 6).map(playerObj => (
                 <div className={styles.ShirtPlayer}>
                   <p>{playerObj.playerName}</p>
                   <p>{playerObj.PlayerPosition}</p>
                 </div>
               ))}

                 {currentTeam.slice(3, 5).map(playerObj => (
                     <div className={styles.ShirtPlayer}>
                     <p>{playerObj.playerName}</p>
                     <p>{playerObj.PlayerPosition}</p>
                 </div>
               ))}

               {currentTeam.slice(6, 7).map(playerObj => (
                 <div className={styles.ShirtPlayer}>
                   <p>{playerObj.playerName}</p>
                   <p>{playerObj.PlayerPosition}</p>
                 </div>
               ))}


           </section>

           <section className={styles.backRow}>
           {currentTeam.slice(7, 8).map(playerObj => (
             <div className={styles.ShirtPlayer}>
               <p>{playerObj.playerName}</p>
               <p>{playerObj.PlayerPosition}</p>
             </div>
           ))}
           </section>
        </section>
          
          <section className={styles.scrumHalf}> 
      {currentTeam.slice(8, 9).map(playerObj => (
        <div className={styles.ShirtPlayer}>
          <p>{playerObj.playerName}</p>
          <p>{playerObj.PlayerPosition}</p>
        </div>
      ))}
      </section>


        <section className={styles.flyHalf}>
          {currentTeam.slice(9, 10).map(playerObj => (
            <div className={styles.ShirtPlayer}>
              <p>{playerObj.playerName}</p>
              <p>{playerObj.PlayerPosition}</p>
            </div>
          ))}
      </section>

      <section className={styles.Centres}>
      {currentTeam.slice(11, 13).map(playerObj => (
            <div className={styles.ShirtPlayer}>
              <p>{playerObj.playerName}</p>
              <p>{playerObj.PlayerPosition}</p>
            </div>
          ))}
      </section>
      
      <section className={styles.Wings}>
          {currentTeam.slice(10, 11).map(playerObj => (
            <div className={styles.ShirtPlayer}>
              <p>{playerObj.playerName}</p>
              <p>{playerObj.PlayerPosition}</p>
            </div>
          ))}

          {currentTeam.slice(13, 14).map(playerObj => (
            <div className={styles.ShirtPlayer}>
              <p>{playerObj.playerName}</p>
              <p>{playerObj.PlayerPosition}</p>
            </div>
          ))}
      </section>

      <section className={styles.fullBack}>      
         {currentTeam.slice(14, 15).map(playerObj => (
           <div className={styles.ShirtPlayer}>
             <p>{playerObj.playerName}</p>
             <p>{playerObj.PlayerPosition}</p>
           </div>
         ))}
      </section>

      </section>

    </section>
    <section>
      {/* <p>Attacking: {attackArray}</p> */}
    </section>

    </>
    
  );
};


export default Pitch;
