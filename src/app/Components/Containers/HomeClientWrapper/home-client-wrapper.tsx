"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import FileUploadContainer from "../FileUploadContainer/FileUploadContainer";
import PanelResult from "../PanelResult/PanelResult";
import styles from "./page.module.css";
import { IPrediction } from "@/app/Interfaces/IPrediction";
import { IRealPrediction } from "@/app/Interfaces/IRealPrediction";

export default function HomeClientWrapper() {
  const searchParams = useSearchParams();
  const showRightContainer = searchParams.get("result") === "true";

  const [results, setResults] = useState<{
    predictions: IPrediction[];
    realPrediction: IRealPrediction | null;
  }>({
    predictions: [],
    realPrediction: null,
  });

  const [uploadedImage, setUploadedImage] = useState<string | null>(null); // State for uploaded image URL

  return (
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
          <FileUploadContainer
            initialData={results}
            setResults={setResults}
            setUploadedImage={setUploadedImage} // Pass the setter for the uploaded image
          />
        </div>
      </div>

      {showRightContainer && (
        <div className={styles.rightBackgroundContainer}>
          <div className={styles.rightContainer}>
            <PanelResult
              predictions={results.predictions}
              realPrediction={results.realPrediction}
              uploadedImage={uploadedImage} // Pass the uploaded image URL
            />
          </div>
        </div>
      )}
    </div>
  );
}