import React from 'react';
import Link from 'next/link';
import styles from "@/styles/Home.module.css";

const AZRecipes = () => {
  const recipes = [
    { name: 'Biscoff Cheesecake', link: '/BiscoffCheesecake' },
    { name: 'Ginger Shots', link: '/GingerShots'},
    { name: 'Lentil Soup', link: '/LentilSoup' },
    { name: 'Millionaires Shortbread', link: '/MillionairesShortbread' },
    { name: 'Root Veg Traybake', link: '/RootVegTraybake'},
    { name: 'Sweet Potato Mac and Cheese', link: '/SweetPotatoMacAndCheese'},
    { name: 'Vanilla Celebration Cake', link: '/VanillaCelebrationCake'},
    // Add more recipes here
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
      <h2 className="recipePageTitle">A-Z Recipes</h2>
      <ul className="recipeList">
        {recipes.map((recipe, index) => (
          <li key={index}>
            <Link href={recipe.link}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AZRecipes;
