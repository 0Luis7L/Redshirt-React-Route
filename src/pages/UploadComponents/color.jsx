import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrush } from '@fortawesome/free-solid-svg-icons'

export default function Color (props){

    const BrushIcon = <FontAwesomeIcon icon={faBrush} style={{paddingRight: 10 + 'px'}} />
    
    
    return (
        <div className='color'>
            <label className="color--label" htmlFor="color"> {BrushIcon} Select A Color?</label>
            <br />
            <select 
            data-testid="color"
            id="color"
            name="color"
            value={props.value}
            onChange={props.onHandle}
            >
                <option value="">-- Chose A Color --</option>
                <option value="Beige">Beige</option>
                <option value="Black">Black</option>
                <option value="Blue">Blue</option>
                <option value="Brown">Brown</option>
                <option value="Clear">Clear</option>
                <option value="Gold">Gold</option>
                <option value="Gray">Gray</option>
                <option value="Green">Green</option>
                <option value="Multicolor">Multicolor</option>
                <option value="Orange">Orange</option>
                <option value="Pink">Pink</option>
                <option value="Purple">Purple</option>
                <option value="Red">Red</option>
                <option value="Silver">Silver</option>
                <option value="Yellow">Yellow</option>
            </select>

        </div>
    );
}
/*
Beige
black  
blue  
brown  
clear 
gold 
gray 
green  
multicolor 
orange 
pink  
purple  
red  
silver 
white 
yellow 
*/