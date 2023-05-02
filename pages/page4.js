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
        <title>Teriyaki Mushroom and Brown Rice Bowls</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <Link href={"/"}>Back to home</Link>
          <h2 className="recipePageTitle">
           Teriyaki Mushroom and Brown Rice Bowls
          </h2>
          <h3 className="ingList">...Coming soon...</h3>
        </div>
      </main>
    </>
  );
}
