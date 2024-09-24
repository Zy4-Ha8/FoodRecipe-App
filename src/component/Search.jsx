import { useEffect, useState } from "react";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_key = "c74311240f7a47cfb8ed6b50663c9bd9";
import styles from "./search.module.css";
export default function Search({ FoodData, setFoodData }) {
  const [query, setquery] = useState("pasta");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_key}`);
      // console.log(`${URL}?query=${query}&apiKey=${API_key}`)
      const data = await res.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        value={query}
        onChange={(e) => setquery(e.target.value)}
        type="text"
      />
    </div>
  );
}
