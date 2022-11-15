import Image from "next/image";
import styles from "./page.module.scss";
import howler from "./howler.min.js";
import Script from "next/script";
const audio = new howler.Howl({ src: ["car-honk.mp3"] });
export default function Home() {
  function horn() {
    audio.play();
  }
  return (
    <>
      <Script id="script_id-1" src="./howler.min.js"/>
      <div className={styles.container}>
        <div className={`${styles.dashboard}`}>
          <div className={`hornhonker`}></div>
        </div>
        <button onClick={horn}>Left Horn</button>
        <button onClick={horn}>Right Horn</button>
      </div>
      ;
    </>
  );
}
