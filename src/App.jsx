import { useState } from "react";
import Search from "./component/Search";
import FoodList from "./component/FoodList";
import Nav from "./component/Nav";
import "./App.css";
import Container from "./component/Container";
import InnerContainer from "./component/InnerContainer";
import FoodDitails from "./component/FoodDitails";
function App() {
  const [FoodData, setFoodData] = useState([]);
  const [FoodId , setFoodId] = useState('642583')
  return (
    <div className="App">
      <Nav />
      <Search FoodData={FoodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} FoodData={FoodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDitails FoodId={FoodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
