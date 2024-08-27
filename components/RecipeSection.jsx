// components/RecipeSection.jsx
const RecipeSection = ({ title, content }) => (
    <div>
        <h5 className="recipeStep">{title}</h5>
        <ul className="ingredList">{content.map(item => <li key={item}>{item}</li>)}</ul>
    </div>
);

export default RecipeSection;
