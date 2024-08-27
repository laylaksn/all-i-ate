// components/Slideshow.js

import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/celebrationcake.jpg",
  "/coffeecake.jpg",
  "/biscoffcheesecake.png",
  "/millionairesshortbread.jpg",
  "/fruitbasket.jpg",
  // Add more images as needed
];

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <Image
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        width={500}
        height={300}
        className="slideshow-image"
      />
    </div>
  );
}
