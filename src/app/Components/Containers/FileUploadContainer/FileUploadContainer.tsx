"use client";
import { useState } from "react";
import FileUploadComponent from "../../FileUploadComponent/FileUploadComponent";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import styles from "./FileUploadContainer.module.css";
import { useRouter } from "next/navigation"; // Updated import
import { IPrediction } from "@/app/Interfaces/IPrediction";
import { IRealPrediction } from "@/app/Interfaces/IRealPrediction";

interface FileUploadContainerProps {
  initialData: {
    predictions: IPrediction[];
    realPrediction: IRealPrediction | null;
  };
  setResults: React.Dispatch<
    React.SetStateAction<{
      predictions: IPrediction[];
      realPrediction: IRealPrediction | null;
    }>
  >;
  setUploadedImage: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function FileUploadContainer({
  initialData,
  setResults,
  setUploadedImage, // Added prop for setting the uploaded image URL
}: FileUploadContainerProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [analysisCompleted, setAnalysisCompleted] = useState(false); // New state to track analysis completion

  const router = useRouter(); // Now using the correct router

  const handleAnalyze = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    setIsLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_REACT_ENDPOINT_URL}/inference/predict`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Analysis failed");

      const data = await response.json();

      const parsedResults = {
        predictions: data.all_predictions || [],
        realPrediction: Array.isArray(data.real_prediction)
          ? data.real_prediction[0]
          : data.real_prediction || null,
      };

      setResults(parsedResults);

      // Serialize and pass parsedResults in the query string
      const predictions = encodeURIComponent(
        JSON.stringify(parsedResults.predictions)
      );
      const realPrediction = encodeURIComponent(
        JSON.stringify(parsedResults.realPrediction)
      );

      router.push(`/?result=true`);
      setAnalysisCompleted(true);
    } catch (error) {
      console.error("Error:", error);
      alert("Analysis failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileSelect = (file: File | null) => {
    if (file) {
      setUploadedImage(URL.createObjectURL(file)); // Update the uploaded image URL
    } else {
      setUploadedImage(null);
    }
    setFile(file);
  };

  const handleNewAnalysis = () => {
    setFile(null); // Reset the file state
    setUploadedImage(null); // Reset the uploaded image state
    setAnalysisCompleted(false); // Reset analysis completion state
    router.push("/"); // Navigate to the root route
  };

  return (
    <div className={styles.leftContainer}>
      <h1 className={styles.headerText}>
        Clasificador de lesiones elementales primarias en la piel
      </h1>
      {!analysisCompleted && (
        <FileUploadComponent
          onFileSelect={handleFileSelect}
          accept="image/png, image/jpeg, image/jpg"
        />
      )}

      {!analysisCompleted && (
        <ButtonComponent
        text={isLoading ? "Analizando..." : "Iniciar análisis"}
          onClick={handleAnalyze}
          className={styles.searchButton}
          disabled={!file || isLoading} // Disable if no file or loading
        />
      )}
      {isLoading && <div className={styles.loadingText}>Cargando...</div>}

      {analysisCompleted && (
        <ButtonComponent
          text="Nuevo análisis"
          onClick={handleNewAnalysis}
          className={styles.newAnalysisButton}
        />
      )}

      <p className={styles.warningText}>
        *Este es un software que utiliza IA para clasificar las imágenes y es
        solamente para fines académicos.
      </p>
    </div>
  );
}
