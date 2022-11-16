import { Howl } from "howler";
import { useEffect, useRef } from "react";
import { FaVolumeUp } from "react-icons/fa";
import styles from "../styles/page.module.scss";

export default function Home() {
  const hornlh: any = useRef();
  const hornch: any = useRef();
  const hornrh: any = useRef();

  const audio = new Howl({ src: ["car-honk.mp3"] });

  useEffect(() => {
    hornlh.current.style.display = "none";
    hornch.current.style.display = "none";
    hornrh.current.style.display = "none";
  }, []);

  const handleClick = (side: any) => {
    const resetDisplay = setTimeout(() => {
      side.current.style.display = "none";
    }, 3000);
    side.current.style.display = "flex";
    audio.play();
  };

  return (
    <div>
      <div className={`${styles.dashboard}`}>
        <div className={`${styles.hornhonker}`}>
          <div ref={hornlh} id="horn-lh" className={`${styles.hornlh}`}>
            <FaVolumeUp size={25} />
            Left Side 1
          </div>
          <div ref={hornch} id="horn-ch" className={`${styles.hornch}`}>
            <FaVolumeUp size={25} />
            Back
          </div>
          <div ref={hornrh} id="horn-rh" className={`${styles.hornrh}`}>
            <FaVolumeUp size={25} />
            Right Side
          </div>
        </div>
      </div>
      
      <div className={`${styles.buttonRow}`}>
        <button id="horn-l" onClick={() => handleClick(hornlh)}>
          Left Horn
        </button>
        <button id="horn-c" onClick={() => handleClick(hornch)}>
          Back Horn
        </button>
        <button id="horn-r" onClick={() => handleClick(hornrh)}>
          Right Horn
        </button>
      </div>
    </div>
  );
}