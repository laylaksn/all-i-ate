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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <Link href={"/"}>Back to home</Link>
          <h1 className="h1page1">Page 2</h1>
          <h2 className="h2page1">
            Roasted squash salad with pomegranate dressing
          </h2>
          <img src="https://realfood.tesco.com/media/images/TESCO-01-Xmas-FestiveMenuHelperRecipes-2910-GM-54718-RoastedSquashSaladWithPomegranteDressingVeganGF-1400x919-1c7e714f-2cc3-4cb7-86e6-7fccd1d28ab5-0-1400x919.jpg" />
          <h4 className="numServings">Currently feeds {counter}</h4>
          <button onClick={handleClick} className="servings">Add serving</button>
          <button onClick={minusClick} className="servings">Minus serving</button>
          <h3 className="h3page1">Ingredients:</h3>
          <ul className="ingpage1">
            <li>{0.25 * counter} medium butternut squash, peeled and chopped</li>
            <li>{0.75 * counter} tbsp olive oil</li>
            <li>{55 * counter}g tomatoes </li>
            <li>{12.5 * counter}g walnuts, roughly chopped </li>
            <li>{37.5 * counter}g baby spinach leaves</li>
            <li>{1.5 * counter} tbsp pomegranate juice </li>
            <li>{0.75 * counter} tbsp extra-virgin olive oil </li>
            <li>{0.25 * counter} tsp Dijon mustard </li>
            <li>{0.5 * counter} tbsp pomegranate seeds </li>
          </ul>
          <h3 className="h3page1">Recipe:</h3>
          <ul>
            <li>
              Preheat the oven to gas 8, 220°C, fan 200°C. Put the butternut
              squash, olive oil and some seasoning in a large roasting tin and
              toss to combine. Roast for 20 mins.
            </li>
            <li>
              Add the tomatoes and walnuts to the tin and return to the oven for
              a further 15 mins until the tomatoes have burst in places and the
              walnuts are toasted.
            </li>
            <li>
              Put the spinach leaves in a large serving bowl and add the hot
              butternut squash, tomatoes and walnuts; toss to wilt the spinach
              slightly.
            </li>
            <li>
              For the dressing, mix together the pomegranate juice, olive oil
              and mustard. Pour half over the salad and toss again.
            </li>
            <li>
              Divide between 4 plates and spoon over the remaining dressing,
              then scatter with the pomegranate seeds to serve.
            </li>
          </ul>
          <h4>You may also like...</h4>
          <div className= "recipeCont">
                <Link href="/page1"> <h6>Creamy vegan mushroom pasta </h6></Link>{" "}
              <Link href="/page2">
                {" "}
                <img className="recipeImageBottom" src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/vegan_mushroom_pasta_28266_16x9.jpg" />
            </Link>
            </div>
        </div>
      </main>
    </>
  );
}
