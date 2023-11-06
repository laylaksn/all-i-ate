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
        <title>Recipes</title>
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
                <Link href="/index" className="navbara"> Home</Link>
              </li>
              <li className="navbarLi">
                <Link href="/AZRecipes" className="navbara" >A-Z Recipes</Link>
              </li>
              <li className="navbarLi">
                <Link href="/gallery" className="navbara" >Gallery</Link>
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
              <h3><Link href="/VanillaCelebrationCake">Vanilla Celebration Cake</Link></h3>
              <Link href="/VanillaCelebrationCake">
                <img className="recipeImage" src="celebrationcake.jpg" alt="Celebration Cake"/>
              </Link>
            </div>
            <div className={styles.recipePic}>
              <h3><Link href="/MillionairesShortbread">Millionaires Shortbread</Link></h3>
              <Link href="/MillionairesShortbread">
                <img className="recipeImage" src="millionairesshortbread.jpg" alt="Millionaires Shortbread"/>
              </Link>
            </div>
            <div className={styles.recipePic}>
              <h3><Link href="/CoffeeCake">Coffee Cake</Link></h3>
              <Link href="/CoffeeCake">
                <img className="recipeImage" src="coffeecake.jpg" alt="Coffee Cake"/>
              </Link>
            </div>
            <div className={styles.recipePic}>
              <h3><Link href="/KeyLimeCheesecake">Key Lime Cheesecake</Link></h3>
              <Link href="/KeyLimeCheesecake">
                <img className="recipeImage" src="keylimecheesecake.jpg" alt="Keylime Cheesecake"/>
              </Link>
            </div>
            <div className={styles.recipePic}>
              <h3>Cinnamon Rolls</h3>
            </div>
            <div className={styles.recipePic}>
              <h3>Banoffee Pie</h3>
            </div>
            <div className={styles.recipePic}>
              <h3>Chocolate cupcakes</h3>
            </div>
          </div>
        </div>
        <div>
          <h2 className="typeOfRecipes">Fave Dinners</h2>
          <div className={styles.description}>
            <div className={styles.recipePic}>
              <h3><Link href="/LentilSoup">Lentil Soup</Link></h3>
              <Link href="/LentilSoup">
                <img className="recipeImage" src="lentilsoup.jpg" alt="Lentil Soup" />
              </Link>
            </div>
            <div className={styles.recipePic}>
              <h3><Link href="/RootVegTraybake">Root Vegetable Traybake</Link></h3>
              <Link href="/RootVegTraybake">
                <img className="recipeImage" src="rootvegtraybake.jpg"  alt="Root Vegetable Traybake" />
              </Link>
            </div>
            <div className={styles.recipePic}>
              <h3><Link href="/SweetPotatoMacAndCheese">Sweet Potato Mac and Cheese</Link></h3>
              <Link href="/SweetPotatoMacAndCheese">
              <img className="recipeImage" src="sweetpotatomacncheese.jpg" alt="Sweet Potato Mac and Cheese" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
