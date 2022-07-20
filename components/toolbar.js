import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Toolbar.module.css";
import Facebook from "../components/facebook";

export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div onClick={() => router.push("/")}>Home</div>
      <div onClick={() => router.push("/feed/1")}>News</div>
      <div onClick={() => router.push("/developer")}>Developer</div>
      <Facebook />
    </div>
  );
};
