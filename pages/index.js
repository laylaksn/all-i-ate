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
          <p className="recipeSummary">Sharing all our favourite recipes...</p>
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
              <h3><Link href="/ComingSoon">Caramel Cake</Link></h3>
              <Link href="/ComingSoon">
                <img className="recipeImage" src="caramelcake.jpg" alt="Caramel Cake"/>
              </Link>
            </div>
            <div className={styles.recipePic}>
              <h3><Link href="/ComingSoon">Key Lime Cheesecake</Link></h3>
              <Link href="/ComingSoon">
                <img className="recipeImage" src="keylimecheesecake.jpg" alt="Keylime Cheesecake"/>
              </Link>
            </div>
            <div className={styles.recipePic}>
              <h3>Pancakes</h3>
              <Link href="/ComingSoon">
                <img className="recipeImage" src="pancakes.jpg" alt="Pancakes"/>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h2 className="typeOfRecipes">Fave Dinners</h2>
          <div className={styles.description}>
            <div className={styles.recipePic}>
              <h3><Link href="/ComingSoon">Lentil Soup</Link></h3>
              <Link href="/ComingSoon">
                <img className="recipeImage" src="lentilsoup.jpg" alt="Lentil Soup" />
              </Link>
            </div>
            <div className={styles.recipePic}>
              <h3><Link href="/ComingSoon">Root Vegetable Traybake</Link></h3>
              <Link href="/ComingSoon">
                <img className="recipeImage" src="rootvegtraybake.jpg"  alt="Root Vegetable Traybake" />
              </Link>
            </div>
            <div className={styles.recipePic}>
              <h3><Link href="/ComingSoon">Sweet Potato Mac and Cheese</Link></h3>
              <Link href="/ComingSoon">
              <img className="recipeImage" src="sweetpotatomacncheese.jpg" alt="Sweet Potato Mac and Cheese" />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h2 className="typeOfRecipes">Healthzone</h2>
          <div className={styles.description}>
            <div className={styles.recipePic}>
              <h3><Link href="/ComingSoon">Smoothie Bowls</Link></h3>
              <Link href="/ComingSoon">
              <img className="recipeImage" src="smoothiebowl2.jpg" alt="Smoothie Bowls" />
              </Link>
            </div>
            <div className={styles.recipePic}>
              <h3><Link href="/ComingSoon">Ginger and Turmeric Shots</Link></h3>
              <Link href="/ComingSoon">
              <img className="recipeImage" src="gingershots.jpg" alt="Ginger Shots" />
              </Link>
            </div>
            <div className={styles.recipePic}>
              <h3><Link href="/ComingSoon">Fruit Basket</Link></h3>
              <Link href="/ComingSoon">
              <img className="recipeImage" src="fruitbasket.jpg" alt="Fruit Basket" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
