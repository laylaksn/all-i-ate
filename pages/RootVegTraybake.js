// pages/index.jsx
import Layout from "@/components/Layout";
import RecipeSection from "@/components/RecipeSection";
import { useState } from 'react';


const Home = () => {
    const [counter, setCounter] = useState(4);

    // ... (your existing state and functions)

    return (
        <Layout title="Biscoff Cheesecake">
            <h2 className="recipePageTitle">Biscoff Cheesecake</h2>
            {/* Other content */}
            <RecipeSection title="Base" content={['300g Biscoff biscuits', '125g butter']} />
            <RecipeSection title="Cheesecake Filling" content={['200g white chocolate', '500g full-fat cream cheese (room temp)', '...']} />
            {/* Other sections */}
        </Layout>
    );
};

export default Home;
