import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title className="topTitle">Recipes</title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <h1 className="someHeading">All I Ate</h1>
          <form className="search-form" action="#" method="get">
            <input type="text" placeholder="Ingredient, keyword..." />
            <button type="submit">Search</button>
          </form>
        </div>
        <div>
          <nav>
            <ul className="navbarUl">
              <li className="navbarLi">
                <a className="navbara" href="#">Home</a>
              </li>
              <li className="navbarLi">
                <a className="navbara" href="#">A-Z Recipes</a>
              </li>
              <li className="navbarLi">
                <a className="navbara" href="#">Gallery</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h2 className="typeOfRecipes">Sweet Treats</h2>
          <div className={styles.description}>
            <div className={styles.recipePic}>
              <h3><Link href="/BiscoffCheesecake">Biscoff Cheesecake</Link></h3>
              <Link href="/BiscoffCheesecake">
                <img className="recipeImage" src="biscoffcheesecake.png" alt="Biscoff Cheesecake"/>
              </Link>
            </div>
            <div className={styles.recipePic}>
              <h3><Link href="/page2">Vanilla Celebration Cake</Link></h3>
              <Link href="/page2">
                <img className="recipeImage" src="celebrationcake.jpg" alt="Celebration Cake"/>
              </Link>
            </div>
            <div className={styles.recipePic}>
              <h3><Link href="/page4">Millionaires Shortbread</Link></h3>
              <Link href="/page4">
                <img className="recipeImage" src="millionairesshortbread.jpg" alt="Millionaires Shortbread"/>
              </Link>
            </div>
            <div className={styles.recipePic}>
              <h3><Link href="/page4">Coffee Cake</Link></h3>
              <Link href="/page4">
                <img className="recipeImage" src="coffeecake.jpg" alt="Coffee Cake"/>
              </Link>
            </div>
            <div className={styles.recipePic}>
              <h3><Link href="/page4">Key Lime Cheesecake</Link></h3>
              <Link href="/page4">
                <img className="recipeImage" src="keylimecheesecake.jpg" alt="Keylime Cheesecake"/>
              </Link>
            </div>
            <div className={styles.recipePic}>
              <h3>Millionaires Shortbread</h3>
              <Link href="/page4">
                <img className="recipeImage" src="coffeecake.jpg" alt="Coffee Cake" />
              </Link>
            </div>
            <div className={styles.recipePic}>
              <h3>banoffee pie</h3>
            </div>
            <div className={styles.recipePic}>
              <h3>banana bread</h3>
            </div>
          </div>
        </div>
        <div>
          <h2 className="typeOfRecipes">Fave Dinners</h2>
          <div className={styles.description}>
            <div className={styles.recipePic}>
              <h3><Link href="/page1">Lentil Soup</Link></h3>
              <Link href="/page1">
                <img className="recipeImage" src="lentilsoup.jpg" alt="Lentil Soup" />
              </Link>
            </div>
            <div className={styles.recipePic}>
              <h3><Link href="/page2">Root Vegetable Traybake</Link></h3>
              <Link href="/page2">
                <img className="recipeImage" src="rootvegtraybake.jpg"  alt="Root Vegetable Traybake" />
              </Link>
            </div>
            <div className={styles.recipePic}>
              <h3><Link href="/page3">Sweet Potato Mac and Cheese</Link></h3>
              <Link href="/page3">
              <img className="recipeImage" src="sweetpotatomacncheese.jpg" alt="Sweet Potato Mac and Cheese" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
