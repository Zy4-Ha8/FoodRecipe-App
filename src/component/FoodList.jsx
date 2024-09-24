import FoodItem from "./FoodItem";

export default function FoodList({FoodData , setFoodId}){
    return <div>
        {FoodData.map((Food)=>
        <FoodItem setFoodId={setFoodId} key={Food.id}Food={Food}/>
        )}
    </div>
}