import Head from "next/head";
import styles from "../styles/Home.module.css";
import Employee, { EOM } from "./eom";
import { Toolbar } from "../components/toolbar";
import Footer from "../components/footer";
import Background from "../components/background";

export default function Home() {
  return (
    <>
      <div className="page-container">
        <Toolbar />
        <Background />
        <div className={styles.main}>
          <h1>黎興</h1>
          <h3>你獲取最新新聞文章嘅一站式商店</h3>
        </div>

        <Footer />
      </div>
    </>
  );
}
