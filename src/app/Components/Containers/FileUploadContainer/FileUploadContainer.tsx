"use client";
import { useState } from "react";
import FileUploadComponent from "../../FileUploadComponent/FileUploadComponent";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import styles from "./FileUploadContainer.module.css";
import { useRouter } from "next/navigation"; // Updated import

interface Prediction {
  class: string;
  percentage: string;
}

interface RealPrediction {
  info_elemental: string;
  mas_informacion: string;
  percentage: string;
  prediction: string;
  url: string;
}

interface FileUploadContainerProps {
  initialData: {
    predictions: Prediction[];
    realPrediction: RealPrediction | null;
  };
  setResults: React.Dispatch<
    React.SetStateAction<{
      predictions: Prediction[];
      realPrediction: RealPrediction | null;
    }>
  >;
}

export default function FileUploadContainer({
  initialData,
  setResults,
}: FileUploadContainerProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); // Now using the correct router

  const handleAnalyze = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:4000/inference/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Analysis failed");

      const data = await response.json();

      const parsedResults = {
        predictions: data.all_predictions || [],
        realPrediction: data.real_prediction?.[0] || null,
      };

      setResults(parsedResults);

      // Serialize and pass parsedResults in the query string
      const predictions = encodeURIComponent(JSON.stringify(parsedResults.predictions));
      const realPrediction = encodeURIComponent(JSON.stringify(parsedResults.realPrediction));

      router.push(`/?result=true`);

    } catch (error) {
      console.error("Error:", error);
      alert("Analysis failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.leftContainer}>
      <h1 className={styles.headerText}>
        Clasificador de lesiones elementales primarias en la piel
      </h1>

      <FileUploadComponent
        onFileSelect={setFile}
        accept="image/png, image/jpeg, image/jpg"
      />

      <ButtonComponent
        text={isLoading ? "Analizando..." : "Iniciar análisis"}
        onClick={handleAnalyze}
        className={styles.searchButton}
        disabled={!file || isLoading}
      />

      <p className={styles.warningText}>
        *Este es un software que utiliza IA para clasificar las imágenes y es
        solamente para fines académicos.
      </p>
    </div>
  );
}