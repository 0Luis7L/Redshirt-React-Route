export default function Features (props){

    //handler for onChange 
    function featuresChangeHandler(){
        // find all the input checkboxes that are currently selected (features)
        var checkedBoxes = document.querySelectorAll('input[name=features]:checked');
        
        // just for debugging
        console.log("features checked:",checkedBoxes.length);
        // an array holding the values of the currently selected features
        let features = []
        
        // iterate to get the values and add to features
        for (let i = 0; i < checkedBoxes.length; i++) {
            let item = checkedBoxes[i];
            
            features.push(item.value);

          }
          // call parent hadler to update features
          props.onHandle(features);
        

        
    }

    return (
    
            <fieldset onChange={featuresChangeHandler} className='features'>
                <legend>What are the features of the device?</legend>

                <input
                type="checkbox"
                id="LanCard"
                name="features"
            
                value="10/100 Lan card"
                />
                <label htmlFor="LanCard">10/100 Lan card</label>
                <br />

                <input
                type="checkbox"
                id="3dCamera"
                name="features"
       
                value="3dCamera"
                />
                <label htmlFor="3dCamera">3d camera</label>
                <br />

                <input
                type="checkbox"
                id="5g"
                name="features"

                value="5g"
                />
                <label htmlFor="5g">5g</label>
                <br />

                <input
                type="checkbox"
                id="Backlitkeyboard"
                name="features"
    
                value="Backlit keyboard"
                />
                <label htmlFor="Backlitkeyboard">Backlit keyboard</label>
                <br />

                <input
                type="checkbox"
                id="Bluetooth"
                name="features"
    
                value="Bluetooth"
                />
                <label htmlFor="Bluetooth">Bluetooth</label>
                <br />

                <input
                type="checkbox"
                id="Mic"
                name="features"
     
                value="Mic"
                />
                <label htmlFor="Mic">Built-in Microphone</label>
                <br />

                <input
                type="checkbox"
                id="webcam"
                name="features"
           
                value="Built-in webcam"
                />
                <label htmlFor="webcam">Built-in webcam</label>
                <br />

                <input
                type="checkbox"
                id="2in1"
                name="features"
        
                value="Convertible 2-in-1 Laptop/Tablet"
                />
                <label htmlFor="2in1">Convertible 2-in-1 Laptop/Tablet</label>
                <br />

                <input
                type="checkbox"
                id="DoubleScreen"
                name="features"
          
                value="Double Screen"
                />
                <label htmlFor="DoubleScreen">Double Screen</label>
                <br />

                <input
                type="checkbox"
                id="ForceTouchTrackpad"
                name="features"
         
                value="Force Touch Trackpad"
                />
                <label htmlFor="ForceTouchTrackpad">Force Touch Trackpad</label>
                <br />

                <input
                type="checkbox"
                id="HSDPA"
                name="features"
          
                value="HSDPA"
                />
                <label htmlFor="HSDPA">HSDPA</label>
                <br />

                <input
                type="checkbox"
                id="LTE"
                name="features"
              
                value="LTE"
                />
                <label htmlFor="LTE">LTE</label>
                <br />

                <input
                type="checkbox"
                id="MultiTouchTrackpad"
                name="features"
         
                value="Multi-Touch Trackpad"
                />
                <label htmlFor="MultiTouchTrackpad">Multi-Touch Trackpad</label>
                <br />

                <input
                type="checkbox"
                id="OptaneMemory"
                name="features"
              
                value="Optane Memory"
                />
                <label htmlFor="OptaneMemory">Optane Memory</label>
                <br />

                <input
                type="checkbox"
                id="OpticalDrive"
                name="features"
      
                value="Optical Drive"
                />
                <label htmlFor="OpticalDrive">Optical Drive</label>
                <br />

                <input
                type="checkbox"
                id="Rugged"
                name="features"
           
                value="Rugged"
                />
                <label htmlFor="Rugged">Rugged</label>
                <br />

                <input
                type="checkbox"
                id="Stylus"
                name="features"
        
                value="Stylus"
                />
                <label htmlFor="Stylus">Stylus</label>
                <br />

                <input
                type="checkbox"
                id="TouchBar"
                name="features"
                value="Touch Bar"
                />
                <label htmlFor="TouchBar">Touch Bar</label>
                <br />

                <input
                type="checkbox"
                id="TouchID"
                name="features"
             
                value="Touch ID"
                />
                <label htmlFor="TouchID">Touch ID</label>
                <br />

                <input
                type="checkbox"
                id="Touchscreen"
                name="features"
           
                value="Touchscreen"
                />
                <label htmlFor="Touchscreen">Touchscreen</label>
                <br />

                <input
                type="checkbox"
                id="vrReady"
                name="features"
         
                value="Virtual Reality Ready"
                />
                <label htmlFor="vrReady">Virtual Reality Ready</label>
                <br />

                <input
                type="checkbox"
                id="Widescreen"
                name="features"
      
                value="Widescreen Display"
                />
                <label htmlFor="Widescreen">Widescreen Display</label>
                <br />

                <input
                type="checkbox"
                id="WiFi"
                name="features"
         
                value="Wi-Fi"
                />
                <label htmlFor="WiFi">Wi-Fi</label>
                <br />

            </fieldset>
    
    );
}

/*
10 / 100 Lan card
3d camera 
5g 
Backlit keyboard 
Bluetooth 
Built-in Microphone  
Built-in webcam 
Convertible 2-in-1 Laptop/Tablet 
Double Screen 
Force Touch Trackpad 
HSDPA 
LTE 
Multi-Touch Trackpad 
Optane Memory 
Optical Drive 
Rugged 
Stylus 
Touch Bar 
Touch ID 
Touchscreen 
Virtual Reality Ready 
Widescreen Display 
Wi-Fi 
*/