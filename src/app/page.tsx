// app/page.tsx (still a Server Component)
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import HomeClientWrapper from "./Components/Containers/HomeClientWrapper/home-client-wrapper";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <HeaderComponent />
      <HomeClientWrapper />
    </div>
  );
}
