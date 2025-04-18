import React from "react";
import styles from "./PanelResult.module.css";
import Image from "next/image";
import referenceImage1 from "../../../Assets/Images/reference1.png";

interface PanelResultProps {
  predictions: Array<{ class: string; percentage: string }>;
  realPrediction: any;
}

const PanelResult: React.FC<PanelResultProps> = ({
  predictions = [],
  realPrediction = [],
}) => {
  console.log("PanelResult predictions:", predictions);
  console.log("PanelResult realPrediction:", realPrediction);
  return (
    <div className={styles["panelContainer"]}>
      <div className={styles["predictionContainer"]}>
        <div className={styles["topLeftContainer"]}>
          <div className={styles["imageWrapper"]}>
            <Image
              src={referenceImage1}
              alt="Reference Image"
              className={styles["image"]}
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className={styles["topRightContainer"]}>
          <div className={styles["rightTopContainer"]}>
            <div className={styles["titleContainer"]}>
              <h2 className={styles["title"]}>Clasificación:</h2>
            </div>
            <div className={styles["textContainer"]}>
              <p className={styles["text"]}>
                {realPrediction?.prediction || "No hay predicción disponible"} - {realPrediction?.percentage || "No hay porcentaje disponible"}
              </p>
              </div>
          </div>
          <div className={styles["rightMediumContainer"]}>
            <div className={styles["titleContainer"]}></div>
            <div className={styles["predictionsContainer"]}>
              {predictions.map((prediction, index) => (
                <div key={index} className={styles["predictionContainer"]}>
                  <div className={styles["titleContainer"]}>{prediction.class}</div>
                  <div className={styles["textContainer"]}>{prediction.percentage}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles["rightBottomContainer"]}>
            <div className={styles["titleContainer"]}>Definición Médica:</div>
            <div className={styles["textContainer"]}>
              <p className={styles["text"]}>
               {realPrediction?.info_elemental || "No hay información disponible"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["characteristicsContainer"]}>
        <div className={styles["titleContainer"]}>
          <h2 className={styles["title"]}>Características Clave:</h2>
        </div>
        <div className={styles["textContainer"]}>
          <p className={styles["text"]}>
            {realPrediction?.caracteristicas_clave || "No hay información disponible"}
          </p>
        </div>
      </div>
      <div className={styles["referenceContainer"]}>
        <div className={styles["titleContainer"]}>
          <h2 className={styles["title"]}>Imágenes de Referencia:</h2>
        </div>
        <div className={styles["imagesContainer"]}>
          <div className={styles["topImagesContainer"]}>
            <div className={styles["leftImageWrapper"]}>
              <Image
                src={referenceImage1}
                alt="Reference Image"
                className={styles["image"]}
                width={100}
                height={100}
              />
            </div>
            <div className={styles["mediumImageWrapper"]}>
              <Image
                src={referenceImage1}
                alt="Reference Image"
                className={styles["image"]}
                width={100}
                height={100}
              />
            </div>
            <div className={styles["rightImageWrapper"]}>
              <Image
                src={referenceImage1}
                alt="Reference Image"
                className={styles["image"]}
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className={styles["bottomImagesContainer"]}>
            <div className={styles["leftImageWrapper"]}>
              <Image
                src={referenceImage1}
                alt="Reference Image"
                className={styles["image"]}
                width={100}
                height={100}
              />
            </div>
            <div className={styles["mediumImageWrapper"]}>
              <Image
                src={referenceImage1}
                alt="Reference Image"
                className={styles["image"]}
                width={100}
                height={100}
              />
            </div>
            <div className={styles["rightImageWrapper"]}>
              <Image
                src={referenceImage1}
                alt="Reference Image"
                className={styles["image"]}
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["informationContainer"]}>
        <div className={styles["titleContainer"]}>
          <h2 className={styles["title"]}>Más información:</h2>
        </div>
        <div className={styles["textContainer"]}>
          <p className={styles["text"]}>
            {realPrediction?.mas_informacion || "No hay información disponible"} Conoce más sobre esta enfermedad en el siguiente enlace: <a href={realPrediction?.url || "#"} target="_blank" rel="noopener noreferrer">link</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PanelResult;