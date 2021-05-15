import React from 'react';
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

const App = () => { 
  
  const addFish = (fish) =>{
    console.log("adding a fish!")
  };

  return(
    <div className="catch-of-the-day">
      <div className="menu">
        <Header tagline="Fresh Seafood Market" age={100} />
      </div>
      <Order />
      <Inventory addFish={addFish} />
    </div>
  )   
}

export default App;