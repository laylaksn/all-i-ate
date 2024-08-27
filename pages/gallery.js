import React from 'react';
import Link from 'next/link';
import styles from "@/styles/Home.module.css";
import Navbar from '@/components/Navbar';

const Gallery = () => {
  // list of photos
  const photos = [
    'biscoffcheesecake.png',
    'rootvegtraybake.jpg',
    'celebrationcake.jpg',
    'keylimecheesecake.jpg',
    'coffeecake.jpg',
    'lentilsoup.jpg',
    'smoothiebowl.jpg',
    'millionairesshortbread.jpg',
    'biscoffcheesecake2.jpg',
    'sweetpotatomacncheese.jpg',
    'caramelcake.jpg',
    'gingershots.jpg',
    'millionairesshortbread2.jpg',
    'pancakes.jpg',
    'biscoffcheesecake3.jpg',
    'smoothiebowl2.jpg',
    'fruitbasket.jpg',
    'millionairesshortbread3.jpg',
    // Add more photo URLs here
  ];

  return (
    <div>
      <Navbar/>
      <div className="gallery">
        {photos.map((photo, index) => (
          <div key={index} className="photo">
            <img src={photo} alt={`Photo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
