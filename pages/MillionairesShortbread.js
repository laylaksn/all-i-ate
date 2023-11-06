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
        <title>Millionaires Shortbread</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <Link href={"/"}>Back to home</Link>
          <h2 className="recipePageTitle">Millionaires Shortbread</h2>
          <img src="https://www.janespatisserie.com/wp-content/uploads/2020/04/IMG_9753_1-768x1152.jpg" /> 
          <p>Theres a million ways to serve these. Can feather with dark or white chocolate, do christmas decorations etc..
            Can also make it with caramel base and cover top wwith choc, then turn over a cover bottom with choc. 
          </p>
          <h3 className="numServings">Serves 12</h3>
          <h4 className="ingredList">Ingredients:</h4>
          <ul className="ingpage1">
            <li>Caster Sugar</li>
          </ul>
          <h4 className="ingredList">Recipe:</h4>
          <ul className = "ingpage1">
            <li>First step... </li>
          </ul>
        </div>
      </main>
    </>
  );
}