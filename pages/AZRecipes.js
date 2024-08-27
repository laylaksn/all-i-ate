import Head from "next/head";
import React from 'react';
import Link from 'next/link';
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";

const AZRecipes = () => {
  const recipes = [
    { name: 'Biscoff Cheesecake', link: '/BiscoffCheesecake' },
    { name: 'Caramel Cake', link: '/ComingSoon'},
    { name: 'Coffee Cake', link: '/ComingSoon'},
    { name: 'Ginger Shots', link: '/ComingSoon'},
    { name: 'Keylime Cheesecake', link: '/ComingSoon'},
    { name: 'Lentil Soup', link: '/ComingSoon' },
    { name: 'Millionaires Shortbread', link: '/MillionairesShortbread' },
    { name: 'Pancakes', link: '/ComingSoon'},
    { name: 'Root Veg Traybake', link: '/ComingSoon'},
    { name: 'Smoothie Bowls', link: '/ComingSoon'},
    { name: 'Sweet Potato Mac and Cheese', link: '/ComingSoon'},
    { name: 'Vanilla Celebration Cake', link: '/VanillaCelebrationCake'},
    // Add more recipes here
  ];

  return (
    <>
      <Head>
        <title>AZ Recipes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar/>
      </div>
      <main className={`${styles.main}`}>
        <div>
          <h2 className="recipePageTitle">A-Z Recipes</h2>
          <ul className="numServings">
            {recipes.map((recipe, index) => (
              <li key={index}>
                <Link href={recipe.link}>{recipe.name}</Link>
              </li>
            ))}
          </ul>
          </div>
      </main>
      </>
  );
};

export default AZRecipes;
