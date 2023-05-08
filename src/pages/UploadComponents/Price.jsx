import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'

// allows the user to input the price 
// for the laptop
export default  function Price(props) {
    const MoneyIcon = <FontAwesomeIcon icon={faMoneyBillWave} style={{paddingRight: 10 + 'px'}} />
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
        <div className="price">
            <label className="price-label">{MoneyIcon} Price $</label>
            <br />
            <input type="number" min="1" step="any" value={price} onInput={e => updatePrice(e.target.value)}/>
        </div>
    )



}