import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Employee, { EOM } from "./eom";
import { Toolbar } from "../components/toolbar";

export default function Home() {
  return (
    <div className="page-container">
      <Toolbar />

      <div className={styles.main}>
        <h1>黎興</h1>
        <h3>你獲取最新新聞文章嘅一站式商店</h3>
      </div>
    </div>
  );
}
