import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";
import ItemList from "./ItemList";
export default function FoodDitails({ FoodId }) {
  const URL = `https://api.spoonacular.com/recipes/${FoodId}/information`;
  const API_key = "c74311240f7a47cfb8ed6b50663c9bd9";

  const [Recipe, setRecipe] = useState([]);
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    async function fetchRecipe() {
      const res = await fetch(`${URL}?apiKey=${API_key}`);
      const data = await res.json();
      console.log(data);
      setRecipe(data);
      setIsloading(false);
    }
    fetchRecipe();
  }, [FoodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h2 className={styles.RecipeTitle}>{Recipe.title}</h2>
        <img className={styles.RecipeImage} src={Recipe.image} alt="" />
        <div className={styles.RecipeDetails}>
          <span>
            <strong> ⏱️{Recipe.readyInMinutes} Minutes</strong>{" "}
          </span>

          <span>
            👯 <strong>Serving: {Recipe.servings}</strong>{" "}
          </span>
          <span>
            <strong>
              {Recipe.vegetarian
                ? "🥕 It is Vegetarian"
                : "🍖 It is Not Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{Recipe.vegan ? "🥚 It is vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>$ {Recipe.pricePerServing / 100}</strong>
          </span>
        </div>
        <h2>Ingredient</h2>
        <div>

        <ItemList isloading={isloading} Recipe={Recipe}/>
        </div>
        <h2>Instruction</h2>
        <div className={styles.ReciInstructions}>
          <ol>
            {isloading ? <h2>loading...</h2> :(
              Recipe.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
