// components/Slider.js
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Slider.module.css";

const banners = [
  { id: 1, src: "https://i.imgur.com/HCX6Z5R.jpg", alt: "Netflix Premium" },
  { id: 2, src: "https://i.imgur.com/ccA4J9T.jpg", alt: "Disney Plus" },
  { id: 3, src: "https://i.imgur.com/pR6CjGE.jpg", alt: "Prime Video" },
  { id: 4, src: "https://i.imgur.com/2I1lQ8K.jpg", alt: "HBO Max" },
  { id: 5, src: "https://i.imgur.com/QmKjxLD.jpg", alt: "Crunchyroll" },
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className={styles.slider}>
      <button className={styles.prev} onClick={prevSlide}>❮</button>
      <div className={styles.imageContainer}>
        <Image
          src={banners[index].src}
          alt={banners[index].alt}
          layout="fill"
          objectFit="cover"
          className={styles.image}
          priority
        />
      </div>
      <button className={styles.next} onClick={nextSlide}>❯</button>
    </div>
  );
}
