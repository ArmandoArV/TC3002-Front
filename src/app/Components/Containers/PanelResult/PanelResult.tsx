import React from "react";
import styles from "./PanelResult.module.css";
import Image from "next/image";
import referenceImage1 from "../../../Assets/Images/reference1.png";

const PanelResult = () => {
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
              <div className={styles["leftPrediction"]}></div>
              <div className={styles["rightPrediction"]}></div>
            </div>
          </div>
          <div className={styles["rightMediumContainer"]}>
            <div className={styles["titleContainer"]}></div>
            <div className={styles["predictionsContainer"]}>
              <div className={styles["predictionContainer"]}>
                <div className={styles["titleContainer"]}>Roncha -</div>
                <div className={styles["textContainer"]}>99</div>
              </div>
              <div className={styles["predictionContainer"]}>
                <div className={styles["titleContainer"]}>Roncha -</div>
                <div className={styles["textContainer"]}>99</div>
              </div>
              <div className={styles["predictionContainer"]}>
                <div className={styles["titleContainer"]}>Roncha -</div>
                <div className={styles["textContainer"]}>99</div>
              </div>
              <div className={styles["predictionContainer"]}>
                <div className={styles["titleContainer"]}>Roncha -</div>
                <div className={styles["textContainer"]}>99</div>
              </div>
            </div>
          </div>
          <div className={styles["rightBottomContainer"]}>
            <div className={styles["titleContainer"]}>Definición Médica:</div>
            <div className={styles["textContainer"]}>
              <p className={styles["text"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidunt, nunc at venenatis facilisis, nunc nisl aliquet nunc,
                eget aliquam nisl nunc eget nunc. Sed tincidunt, nunc at
                venenatis facilisis, nunc nisl aliquet nunc, eget aliquam nisl
                nunc eget nunc.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, nunc at venenatis facilisis, nunc nisl aliquet nunc, eget
            aliquam nisl nunc eget nunc. Sed tincidunt, nunc at venenatis
            facilisis, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, nunc at venenatis facilisis, nunc nisl aliquet nunc, eget
            aliquam nisl nunc eget nunc. Sed tincidunt, nunc at venenatis
            facilisis, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PanelResult;
