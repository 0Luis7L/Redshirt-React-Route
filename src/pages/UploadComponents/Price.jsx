import { useState } from "react";

// allows the user to input the price 
// for the laptop
export default  function Price(props) {

    // state variables for price change
    const [price, setPrice] = useState(100.00);

    // change the price state variable and update the laptop object
    const updatePrice = (curr_val) =>{
        // update price
       setPrice(curr_val)

        // call the handler in parent component
        props.onChange(curr_val);

    }

    return (
        <fieldset className="type">
        <legend>Price</legend>
        <input type="number" min="1" step="any" value={price} onInput={e => updatePrice(e.target.value)}/>
        </fieldset>
    )



}