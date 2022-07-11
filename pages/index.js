import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Employee, { EOM } from "./eom";
import { Toolbar } from "../components/toolbar";
import Footer from "../components/footer";
// import { bgWrap } from "../styles/bgWrap.module.css";


export default function Home() {
  return (
    <>
      {/* <div className={bgWrap}>
        <Image
          alt="travel"
          src="https://image-component.nextjs.gallery/_next/image?url=%2Fmountains.jpg&w=1920&q=100"
          layout="fill"
          objectFit="cover"
          quality={100}
        /> */}
        {/* </div> */}
        <div className="page-container">
          <Toolbar />

          <div className={styles.main}>
            <h1>黎興</h1>
            <h3>你獲取最新新聞文章嘅一站式商店</h3>
          </div>
          <Footer />
        </div>
      
    </>
  );
}
