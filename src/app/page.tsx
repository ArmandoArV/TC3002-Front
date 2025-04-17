"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import FileUploadComponent from "./Components/FileUploadComponent/FileUploadComponent";
import ButtonComponent from "./Components/ButtonComponent/ButtonComponent";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import PanelResult from "./Components/Containers/PanelResult/PanelResult";
export default function Home() {
  const [showRightContainer, setShowRightContainer] = useState(false);

  const handleFileSelect = (file: File | null) => {
    console.log("Selected file:", file);
  };

  return (
    <div>
      <HeaderComponent />
      <div
        className={
          showRightContainer ? styles.splitContainer : styles.leftContainerOnly
        }
      >
        <div
          className={`${styles.leftContainerBackground} ${
            showRightContainer ? styles.leftShifted : ""
          }`}
        >
          <div className={styles.leftContainer}>
            <h1 className={styles.headerText}>
              Clasificador de lesiones elementales primarias en la piel
            </h1>

            <FileUploadComponent onFileSelect={handleFileSelect} />

            <ButtonComponent
              text="Iniciar análisis"
              onClick={() => setShowRightContainer(true)}
              className={styles.searchButton}
            />

            <p className={styles.warningText}>
              *Este es un software que utiliza IA para clasificar las imágenes y
              es solamente para fines académicos.
            </p>
          </div>
        </div>

        {showRightContainer && (
          <div className={styles.rightBackgroundContainer}>
            <div className={styles.rightContainer}>
              <PanelResult />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
