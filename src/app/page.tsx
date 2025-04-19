// app/page.tsx (still a Server Component)
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import HomeClientWrapper from "./Components/Containers/HomeClientWrapper/home-client-wrapper";
import styles from "./page.module.css";
import { Suspense } from "react";
export default function Home() {
  return (
    <div>
      <HeaderComponent />
      <div className={styles.mainContainer}>
        <Suspense fallback={<div>Loading...</div>}>
          <HomeClientWrapper />
        </Suspense>
      </div>
    </div>
  );
}
