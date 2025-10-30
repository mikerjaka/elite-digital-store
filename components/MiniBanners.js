// components/MiniBanners.js
import React from "react";
import styles from "./MiniBanners.module.css";

const miniBanners = [
  { id: 1, src: "https://i.imgur.com/Lb4HRtn.png", alt: "Netflix" },
  { id: 2, src: "https://i.imgur.com/DfWSVLO.png", alt: "Disney+" },
  { id: 3, src: "https://i.imgur.com/l6RQhzd.png", alt: "Prime Video" },
  { id: 4, src: "https://i.imgur.com/K5J6Jc2.png", alt: "HBO Max" },
  { id: 5, src: "https://i.imgur.com/AgzZyId.png", alt: "Crunchyroll" },
  { id: 6, src: "https://i.imgur.com/EoT0i8d.png", alt: "Paramount+" },
];

export default function MiniBanners() {
  return (
    <div className={styles.scroller}>
      <div className={styles.track}>
        {miniBanners.concat(miniBanners).map((banner) => (
          <div key={banner.id + Math.random()} className={styles.card}>
            <img src={banner.src} alt={banner.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
