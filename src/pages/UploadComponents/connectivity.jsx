export default function Connect (props){
      //handler for onChange 
      function connectivityChangeHandler(){
        // find all the input checkboxes that are currently selected (features)
        var checkedBoxes = document.querySelectorAll('input[name=connect]:checked');
        
        // just for debugging
        console.log("connectivity checked:",checkedBoxes.length);
        // an array holding the values of the currently selected features
        let features = []
        
        // iterate to get the values and add to features
        for (let i = 0; i < checkedBoxes.length; i++) {
            let item = checkedBoxes[i];
            
            features.push(item.id);

          }
          // call parent hadler to update features
          props.onHandle(features);
        

        
    }

    return (
   
        <fieldset className="connectivity" onChange={connectivityChangeHandler}>
                <legend>What connects to your device?</legend>
                <input
                type="checkbox"
                id="DisplayPort"
                name="connect"
                className="Hope"
               
                />
                <label htmlFor="DisplayPort">DisplayPort</label>
                <br />
                <input
                type="checkbox"
                id="Ethernet"
                name="connect"
                
               
                />
                <label htmlFor="Ethernet">Gigabit Ethernet</label>
                <br />
                <input
                type="checkbox"
                id="MiniDisplayport"
                name="connect"
                value="Mini displayport"
        
                />
                <label htmlFor="MiniDisplayport">Mini displayport</label>
                <br />
                <input
                type="checkbox"
                id="HDMI"
                name="connect"
                
                />
                <label htmlFor="HDMI">HDMI</label>
                <br />
                <input
                type="checkbox"
                id="MicroHDMI"
                name="connect"

                />
                <label htmlFor="MicroHDMI">Micro-HDMI</label>
                <br />
                <input
                type="checkbox"
                id="MicroUSB"
                name="connect"
  
                />
                <label htmlFor="MicroUSB">Micro-USB</label>
                <br />
                <input
                type="checkbox"
                id="MiniUSB"
                name="connect"
       
                />
                <label htmlFor="MiniUSB">Mini-USB</label>
                <br />
                <input
                type="checkbox"
                id="USB1.0/1.1"
                name="connect"
     
                />
                <label htmlFor="USB1.0/1.1">USB 1.0/1.1</label>
                <br />
                <input
                type="checkbox"
                id="USB2"
                name="connect"
    
                />
                <label htmlFor="USB2">USB 2.0</label>
                <br />
                <input
                type="checkbox"
                id="USB3"
                name="connect"
            
                />
                <label htmlFor="USB3">USB 3.0</label>
                <br />
                <input
                type="checkbox"
                id="USB3.1"
                name="connect"
         
                />
                <label htmlFor="USB3.1">USB 3.1</label>
                <br />
                <input
                type="checkbox"
                id="USB3.2"
                name="connect"
             
                />
                <label htmlFor="USB3.2">USB 3.2</label>
                <br />
                <input
                type="checkbox"
                id="usbC"
                name="connect"
           
                />
                <label htmlFor="usbC">USB-C</label>
                <br />
                <input
                type="checkbox"
                id="SD"
                name="connect"
           
                />
                <label htmlFor="SD">SD Card Slot</label>
                <br />
                <input
                type="checkbox"
                id="MicroSD"
                name="connect"
             
                />
                <label htmlFor="MicroSD">MicroSD Card Slot</label>
                <br />
            </fieldset>
    
    );
}

/*
DisplayPort
Gigabit Ethernet
Mini displayport 
HDMI
Micro-HDMI  
Micro-USB,  
Mini-USB 
USB 1.0/1.1 
USB 2.0  
USB 3.0
USB 3.1 
USB-C 
SD Card Slot 
MicroSD Card Slot 
USB 3.2 
*/