import { Howl } from "howler";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaVolumeUp } from "react-icons/fa";
import styles from "../styles/page.module.scss";
import Clock from "react-live-clock";
// App Icons
import what3words from "../public/App Icons/what3words.png";
import googleMaps from "../public/App Icons/googleMaps.png";
import googleAssistant from "../public/App Icons/googleAssistant.png";
export default function Home() {
  const hornlh: any = useRef();
  const hornch: any = useRef();
  const hornrh: any = useRef();

  const audio = new Howl({ src: ["car-honk.mp3"] });



  useEffect(() => {
    hornlh.current.style.opacity = 0;
    hornch.current.style.opacity = 0;
    hornrh.current.style.opacity = 0;
  }, []);

  const handleClick = (side: any) => {
    const resetDisplay = setTimeout(() => {
      side.current.style.opacity = 0;
    }, 3000);
    side.current.style.opacity = 100;
    audio.play();
  };

  return (
    <div>
      <div className={`${styles.dashboard}`}>
        <div className={`${styles.hornhonker}`}>
          <div className={`${styles.homeScreen}`}>
            {/* <div className={`${styles.notifBar}`}>
              <Clock format={"HH:mm A"} ticking={true}  timezone={"Asia/Kolkata"} />
            </div> */}
            <div className={`${styles.app}`}>
              <Image draggable={false} src={what3words} alt={"what3words-app.png"} width={50} height={50} className={`${styles.appIcon}`} />
              <p>What3Words</p>
            </div>
            <div className={`${styles.app}`}>
              <Image draggable={false} src={googleMaps} alt={"google_maps-app.png"} width={50} height={50} className={`${styles.appIcon}`} />
              <p>Google Maps</p>
            </div>
            <div className={`${styles.app}`}>
              <Image draggable={false} src={googleAssistant} alt={"google_assistant-app.png"} width={50} height={50} className={`${styles.appIcon}`} />
              <p>Google Assistant</p>
            </div>
            <div className={`${styles.app}`}>
              <Image draggable={false} src={what3words} alt={"what3words-app.png"} width={50} height={50} className={`${styles.appIcon}`} />
              <p>What3Words</p>
            </div>
            <div className={`${styles.app}`}>
              <Image draggable={false} src={what3words} alt={"what3words-app.png"} width={50} height={50} className={`${styles.appIcon}`} />
              <p>What3Words</p>
            </div>
            <div className={`${styles.app}`}>
              <Image draggable={false} src={what3words} alt={"what3words-app.png"} width={50} height={50} className={`${styles.appIcon}`} />
              <p>What3Words</p>
            </div>
            <div className={`${styles.app}`}>
              <Image draggable={false} src={what3words} alt={"what3words-app.png"} width={50} height={50} className={`${styles.appIcon}`} />
              <p>What3Words</p>
            </div>
            <div className={`${styles.app}`}>
              <Image draggable={false} src={what3words} alt={"what3words-app.png"} width={50} height={50} className={`${styles.appIcon}`} />
              <p>What3Words</p>
            </div>
            <div className={`${styles.app}`}>
              <Image draggable={false} src={what3words} alt={"what3words-app.png"} width={50} height={50} className={`${styles.appIcon}`} />
              <p>What3Words</p>
            </div>
            <div className={`${styles.app}`}>
              <Image draggable={false} src={what3words} alt={"what3words-app.png"} width={50} height={50} className={`${styles.appIcon}`} />
              <p>What3Words</p>
            </div>
            <div className={`${styles.app}`}>
              <Image draggable={false} src={what3words} alt={"what3words-app.png"} width={50} height={50} className={`${styles.appIcon}`} />
              <p>What3Words</p>
            </div>
          </div>

          <div ref={hornlh} id="horn-lh" className={`${styles.hornlh}`}>
            <FaVolumeUp size={25} />
            Left Side
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
