"use client";
import React, { useState } from "react";
import styles from "./WelcomeScreenComponent.module.css";
import infoJson from "../../../info.json";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

export const WelcomeScreenComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Convert steps object to an array of values
  const stepsArray = Object.values(infoJson.steps);

  const toggleScreenContainer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && (
        <>
          <div className={styles["backgroundContainer"]}></div>
          <div className={styles["modalContainer"]}>
            <div className={styles["titleContainer"]}>
              <h1 className={styles["title"]}>{infoJson.name}</h1>
            </div>
            <div className={styles["objectiveContainer"]}>
              <p className={styles["objectiveText"]}>{infoJson.objective}</p>
            </div>
            <div className={styles["howContainer"]}>
              <div className={styles["howTitle"]}>
                <h2 className={styles["howTitleText"]}>¿Cómo utilizarlo?</h2>
              </div>
              <div className={styles["howOptions"]}>
                <ul className={styles["howOptionsList"]}>
                  {stepsArray.map((item, index) => (
                    <li key={index} className={styles["howOptionsItem"]}>
                      <span className={styles["howOptionsItemText"]}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles["buttonContainer"]}>
              <ButtonComponent
                text="Empezar"
                onClick={() => toggleScreenContainer()}
                className={styles["button"]}
              />
            </div>
            <div className={styles["disclaimer"]}>
              <p className={styles["disclaimerText"]}>{infoJson.disclaimer}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
