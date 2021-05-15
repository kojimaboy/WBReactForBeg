import React from "react";
import AddFishForm from "./AddFishForm";

const Inventory = (props) => {
  return(
    <div className="inventory">
      <h2> Inventory! </h2>
      <AddFishForm addFish={props.addFish}></AddFishForm>
    </div>
    
  );
}

export default Inventory;