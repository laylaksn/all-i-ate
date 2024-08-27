// pages/index.js

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Slideshow from "@/components/Slideshow"; // Import the Slideshow component

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Recipes</title>
      </Head>

      <div>
        <Navbar />
      </div>

      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.contentContainer}>
          <div className={styles.textContainer}>
            <h1 className="someHeading">All I Ate</h1>
            <p className="recipeSummary">Sharing all our fave recipes...</p>
          </div>
          <div className={styles.slideshowContainer}>
            <Slideshow />
          </div>
        </div>
      </main>
    </>
  );
}
