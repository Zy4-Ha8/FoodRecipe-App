import Item from "./Item";

export default function ItemList({Recipe,isloading}) {
    return(

        <div>
    {isloading ? 'loading...' : Recipe.extendedIngredients.map((item) => (
        <Item key={item.name} item ={item}/>
    ))}
  </div>
)
}
