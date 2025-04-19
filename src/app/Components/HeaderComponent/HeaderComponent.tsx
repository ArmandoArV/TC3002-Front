import Image from "next/image";
import styles from "./HeaderComponent.module.css";
import logo from "../../../../public/Images/dermatossLogo.png";
import logo2 from "../../../../public/Images/logoTec.png";
export default function HeaderComponent() {
  return (
    <div className={styles["headerContainer"]}>
      <div className={styles["leftLogoContainer"]}>
        <Image src={logo} alt="Logo" className={styles["logo"]} />
      </div>
      <div className={styles["rightLogoContainer"]}>
        <Image src={logo2} alt="Logo" className={styles["logo"]} />
      </div>
    </div>
  );
}
