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
        <title>CFG recipes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1 id="greeting">Welcome to my website!</h1>
        <p>Here are recipes</p>
        <div className={styles.description}>
          <h1 className="popularTitle">What's popular</h1>
          <Link href="/page1">creamy vegan mushroom pasta</Link>
          <Link href="/page2">recipe 2</Link>
          <Link href="/page2">recipe 3</Link>
        </div>
        <div className={styles.description}>
          <h1 className="veganTitle">Vegan recipes</h1>
          <Link href="/page1">creamy vegan mushroom pasta</Link>
        </div>
      </main>
    </>
  );
}
