import React from "react";
import { getFunName } from "../helpers";

// class StorePicker extends React.Component {
//     myInput = React.createRef();

//     goToStore = event => {
//         event.preventDefault();
//         const storeName = this.myInput.current.value;
//         console.log(this);
//         this.props.history.push(`/store/${storeName}`);
//     };
//     render() {
//     return (
//       <form className="store-selector" onSubmit={this.goToStore}>
//         <h2>Please Enter A Store</h2>
//         <input 
//             type="text" 
//             ref={this.myInput}
//             required 
//             placeholder="Store Name" 
//             defaultValue={getFunName()}
//         />
//         <button type="submit">Visit Store →</button>
//       </form>
//     );
//   }
// }

const StorePicker = (props)=>{
  const myInput = React.createRef();

  const goToStore = (event) => {
    event.preventDefault();
    const storeName = myInput.current.value;
    props.history.push(`/store/${storeName}`);
  };
  return (
    <form className="store-selector" onSubmit={goToStore}>
      <h2>Please Enter A Store</h2>
      <input 
        type="text" 
        ref={myInput}
        required 
        placeholder="Store Name" 
        defaultValue={getFunName()}
      />
      <button type="submit">Visit Store →</button>
    </form>
  )
};

export default StorePicker;
