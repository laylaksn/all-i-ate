import React from 'react';
import Link from 'next/link';
import styles from "@/styles/Home.module.css";

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
    'millionairesshortbread3'
    // Add more photo URLs here
  ];

  return (
    <div>
      <nav>
        <ul className="navbarUl">
          <li className="navbarLi">
            <Link href="/index" className="navbara">Home</Link>
          </li>
          <li className="navbarLi">
            <Link href="/AZRecipes" className="navbara">A-Z Recipes</Link>
          </li>
          <li className="navbarLi">
            <Link href="/gallery" className="navbara">Gallery</Link>
          </li>
        </ul>
      </nav>
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
