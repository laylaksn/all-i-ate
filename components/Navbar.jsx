// components/Navbar.jsx
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => (
    <nav>
        <ul className={`navbarUl ${inter.className}`}>
            <li className="navbarLi">
                <Link href="/" className="navbara">Home</Link>
            </li>
            <li className="navbarLi">
                <Link href="/AZRecipes" className="navbara">A-Z Recipes</Link>
            </li>
            <li className="navbarLi">
                <Link href="/gallery" className="navbara">Gallery</Link>
            </li>
            <form className="search-form" action="#" method="get">
            <input type="text" placeholder="Ingredient, keyword..." />
            <button type="submit">Search</button>
          </form>
        </ul>
    </nav>
);

export default Navbar;
