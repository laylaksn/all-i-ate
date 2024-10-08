import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState} from 'react';
import Navbar from "@/components/Navbar";


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
        <title>Biscoff Cheesecake</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
      <div>
        <Navbar />
        </div>
        <div>
          <h2 className="recipePageTitle">Biscoff Cheesecake</h2>
          <img src="BiscoffCheesecake.png" className="topRecipeImage" alt="Top Recipe Image" /> 
          <img src="biscoffcheesecake2.jpg" className="topRecipeImage" alt="Top Recipe Image" /> 
          <img src="biscoffcheesecake3.jpg" className="topRecipeImage" alt="Top Recipe Image" /> 
          <p className="recipeSummary">This is always a winner for a dessert, really easy to make and lots of different ways to decorate! I first made this for Sion&apos;s birthday 2021, 3 weeks after we met! It&apos;s also a Jac Thomas favourite.</p>
          <h3 className="numServings">Serves 12</h3>
          <h4 className="ingredTitle">Ingredients:</h4>
          <h5 className="recipeStep">Base</h5>
          <ul className = "ingredList">
            <li>300g Biscoff biscuits</li>
            <li>125g butter</li>
          </ul>
          <h5 className="recipeStep">Cheesecake Filling</h5>
          <ul className = "ingredList">
            <li>200g white chocolate</li>
            <li>500g full-fat cream cheese (room temp)</li>
            <li>75g icing sugar</li>
            <li>1 tsp vanilla</li>
            <li>300ml double cream</li>
            <li>200g Biscoff spread</li>
          </ul>
          <h5 className="recipeStep">Decoration</h5>
          <ul className = "ingredList">
            <li>More biscoff, or some white chocolate, crumbled up biscuits...</li>
            <li>Or whipping 150ml double cream and 2 tbsp icing sugar and pipe swirls</li>
          </ul>
          <h4 className="ingredTitle">Recipe:</h4>
          <h5 className="recipeStep">Base</h5>
          <ul className = "ingredList">
            <li>Blitz your biscuits to a fine crumb in a food processor.</li>
            <li>Add in your melted butter, and mix again.</li>
            <li>Press into the bottom of a 20cm/8inch deep springform tin.</li>
          </ul>
          <h5 className="recipeStep">Cheesecake Filling</h5>
          <ul className ="ingredList">
            <li>Melt your white chocolate until smooth - I do this in the microwave. Leave it to cool for about 10 minutes.</li>
            <li>Add your cream cheese, icing sugar and vanilla to a bowl and whisk until smooth.</li>
            <li>Add in your cooled white chocolate, and whisk again.</li>
            <li>Add in your double cream, and whisk again until thick.</li>
            <li>Once thick, dollop in your biscoff spread - fold through with a spatula briefly so it swirls through the mixture!</li>
            <li>Spread the mixture onto your base, making sure to fill the tin properly around the edges to avoid any gaps.</li>
            <li>Set the cheesecake in the fridge for a minimum of 6-8 hours, but preferably overnight.</li>
            </ul>
          <h5 className="recipeStep">Decoration</h5>
          <ul className ="ingredList">
          <li>Decorate however!</li>
          </ul>
          <h4 className="ingredTitle">Extra Notes:</h4>
          <ul className = "ingredList">
            <li>If you want to use less biscuits, you will need less butter. This does make quite a thick base.</li>
            <li>Lasts 3 days in the fridge.</li>
            <li>Must use full-fat ingredients to help it set, and make sure the cream cheese is at room temp.</li>
            <li>Can use crunchy or smooth spread.</li>
            <li>If you want a smaller cheesecake, half the mixture and use a 6inch tin.</li>
          </ul>
        </div>
      </main>
    </>
  );
}
