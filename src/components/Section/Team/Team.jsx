import React from "react";
import styles from "./Team.module.css";
import ActionAreaCard from "../../MiniCard/MiniCard";
import ImageOne from "../../../assets/team1.png";
import ImageTwo from "../../../assets/team2.png";
import ImageThree from "../../../assets/team3.png";
import ImageFour from "../../../assets/team4.png";
import ImageFive from "../../../assets/team5.png";
import ImageSix from "../../../assets/team6.png";

export default function Team() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <p>Our Team</p>
      </div>
      <div className={styles.cardsContainer}>
        <ActionAreaCard image={ImageOne} title="Danial Def" subTitle="301 Cases"/>
        <ActionAreaCard image={ImageTwo} title="Sanfole" subTitle="850 Cases"/>
        <ActionAreaCard image={ImageThree} title="Cesforila" subTitle="470 cases"/>
        <ActionAreaCard image={ImageFour} title="Colleen" subTitle="180 cases"/>
        <ActionAreaCard image={ImageFive} title="Haldone" subTitle="212 cases"/>
        <ActionAreaCard image={ImageSix} title="Nik Jeo" subTitle="350 cases"/>
      </div>
    </div>
  );
}
