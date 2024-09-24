import styles from './foodItem.module.css'
export default function FoodItem({Food,setFoodId}){
    return <div className={styles.itemContainer}>
        <img src={Food.image} alt="" />
        <div className={styles.itemContent}>
        <p className={styles.itemName}>{Food.title}</p>
        </div>
        <div className={styles.itemButtonContainer}>
        <button onClick={()=>{setFoodId(Food.id)}} className={styles.itemButton}>View Recipe</button>
        </div>
    </div>
}