export default function Type (props){
    return (
        <div className="type">
            <fieldset>
            <legend>What type of PC?</legend>
            <input 
                type="radio" 
                id="casual" 
                checked={props.value}
                onChange={props.onHandle}
                name="type"
                value="casual"
            />
            <label htmlFor="casual">Casual computing</label>

            
            

            <input 
                type="radio" 
                id="gaming" 
                checked={props.value}
                onChange={props.onHandle}
                name="type"
                value="gaming"
            />
            <label htmlFor="gaming">Gaming</label>

            
            

            <input 
                type="radio" 
                id="GraphicDesign" 
                checked={props.value}
                onChange={props.onHandle}
                name="type"
                value="GraphicDesign"
            />
            <label htmlFor="GraphicDesign">Graphic Design</label>

            
            

            <input 
                type="radio" 
                id="parts" 
                checked={props.value}
                onChange={props.onHandle}
                name="type"
                value="parts"
            />
            <label htmlFor="parts">Parts</label>

            
            

            <input 
                type="radio" 
                id="workstation" 
                checked={props.value}
                onChange={props.onHandle}
                name="type"
                value="workstation"
            />
            <label htmlFor="workstation">Workstation</label>

            
            

            </fieldset>
        </div>
    );
}

/*
1)  Casual computing 
2)  Gaming 
3)  Graphic Design 
4)  Parts 
5)  Workstation 
*/