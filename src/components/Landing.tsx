import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.centerBigText}>
        <h1>JP Science Bowl</h1>
        <p>DATE_HERE</p>
      </div>
      <center>
        <Image width={500} height={500} alt="JP Stevens Science Bowl" src="/scibowllogowebpage.png" />
      </center>
    </div>
  );
}
