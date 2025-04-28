import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import HomeClientWrapper from "./Components/Containers/HomeClientWrapper/home-client-wrapper";
import styles from "./page.module.css";
import { Suspense } from "react";
import { WelcomeScreenComponent } from "./Components/WelcomeScreenComponent/WelcomeScreenComponent";
export default function Home() {
  return (
    <div>
      <WelcomeScreenComponent />
      <HeaderComponent />
      <div className={styles.mainContainer}>
        <Suspense fallback={<div>Loading...</div>}>
          <HomeClientWrapper />
        </Suspense>
      </div>
    </div>
  );
}
