import Image from "next/image";
import styles from "./HeaderComponent.module.css";
import Link from "next/link";
export default function HeaderComponent() {
  return (
    <div className={styles["headerContainer"]}>
      <div className={styles["leftLogoContainer"]}></div>
      <div className={styles["rightLogoContainer"]}></div>
    </div>
  );
}
