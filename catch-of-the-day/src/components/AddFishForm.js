import React from "react";

const AddFishForm = () =>{
  const nameRef = React.createRef();
  const priceRef = React.createRef();
  const statusRef = React.createRef();
  const descRef = React.createRef();
  const imageRef = React.createRef();

  const createFish = (event) => {
    event.preventDefault();
    console.log(nameRef)
    // NEED TO READ UP ON USING REFS WITH FUNCTIONAL COMPONENTS!!!!!!
  };
  
  return(
    <form className="fish-edit" onSubmit={createFish}>
        <input name="name" ref={nameRef} type="text" placeholder="Name"/>
        <input name="price" ref={priceRef} type="text" placeholder="Price"/>
        <select name="status" ref={statusRef}>
          <option value="available"> Fresh! </option>
          <option value="unavailable"> Sold Out </option>
        </select>
        <textarea name="desc" ref={descRef} placeholder="Description"></textarea>
        <input name="image" ref={imageRef} type="text" placeholder="Image"/>
        <button type="submit"> + Add Fish + </button>
    </form>
  );
};

export default AddFishForm;