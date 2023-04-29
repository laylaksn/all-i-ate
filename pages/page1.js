import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState} from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [counter, setCounter] = useState(4);
    //useState(0) indicates counter starting point
    const handleClick = () => {
      setCounter(counter + 1);
    };
    const minusClick = () => {
      setCounter(counter - 1);
    };
  return (
    <>
      <Head>
        <title>Creamy vegan mushroom pasta</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <Link href={"/"}>Back to home</Link>
          <h1 className="h1page1">Page 1</h1>
          <h2 className="h2page1">Recipe for creamy vegan mushroom pasta</h2>
          <h4 className="numServings">Currently feeds {counter}</h4>
          <button onClick={handleClick} className="servings">Add serving</button>
          <button onClick={minusClick} className="servings">Minus serving</button>
          <h3 className="h3page1">Ingredients:</h3>
          <ul className="ingpage1">
            <li>dash of olive oil</li>
            <li>{1 * counter} cloves of garlic (or more if you love garlic), crushed</li>
            <li>{1/4 * counter} onion, finely chopped</li>
            <li>{62.5 * counter}g mushrooms, chopped</li>
            <li>{125 * counter}ml of mushroom stock</li>
            <li>{87.5 * counter}ml of plant milk</li>
            <li>{125 * counter}g of pasta (penne)</li>
            <li>salt to taste</li>
            <li>black pepper and dried oregano to taste</li>
            <li>{0.125 * counter} tablespoon of nutritional yeast</li>
          </ul>
          <h3 className="h3page1">Recipe:</h3>
          <ul>
            <li>Heat the olive oil in a large pot over medium heat</li>
            <li>
              Add the garlic and onion with some salt and cook until the garlic
              is translucent
            </li>
            <li>
              Add the mushroom stock, milk, pasta, salt, pepper and dried
              oregano and bring to a boil
            </li>
            <li>Once boiling, reduce to a simmer and cover with a lid</li>
            <li>In a separate frying pan, saute the mushrooms in a dash of olive oil and a pinch of salt</li>
            <li>Cook for about 20 minutes, or until the pasta is al dente</li>
            <li>Stir in the nutritional yeast and mushrooms</li>
            <li>Serve and enjoy :) </li>
          </ul>
          <h4>You may also like...</h4>
          <Link href="/page2">Roasted squash salad</Link>
        </div>
      </main>
    </>
  );
}
