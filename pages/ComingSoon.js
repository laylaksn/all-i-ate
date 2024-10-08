import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import RecipeSection from "@/components/RecipeSection";
import { Inter } from "next/font/google";
import { useState } from 'react';

import Image from "next/image";
import Link from "next/link";

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
        <title>Florentine pizza</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
      <div>
         <Navbar />
      </div>
        <div>
        <h4 className="numServings">Coming soon...</h4>
        </div>
      </main>
    </>
  );
}
