export default function Connect (props){
    return (
   
        <fieldset className="connectivity">
                <legend>What connets to your device?</legend>
                <input
                type="checkbox"
                id="DisplayPort"
                name="connect"
                onChange={props.onHandle}
                checked={props.value}
                />
                <label htmlFor="DisplayPort">DisplayPort</label>
                <br />
                <input
                type="checkbox"
                id="Ethernet"
                name="connect"
                onChange={props.onHandle}
                checked={props.value}
                />
                <label htmlFor="Ethernet">Gigabit Ethernet</label>
                <br />
                <input
                type="checkbox"
                id="MiniDisplayport"
                name="connect"
                onChange={props.onHandle}
                checked={props.value}
                />
                <label htmlFor="MiniDisplayport">Mini displayport</label>
                <br />
                <input
                type="checkbox"
                id="HDMI"
                name="connect"
                onChange={props.onHandle}
                checked={props.value}
                />
                <label htmlFor="HDMI">HDMI</label>
                <br />
                <input
                type="checkbox"
                id="MicroHDMI"
                name="connect"
                onChange={props.onHandle}
                checked={props.value}
                />
                <label htmlFor="MicroHDMI">Micro-HDMI</label>
                <br />
                <input
                type="checkbox"
                id="MicroUSB"
                name="connect"
                onChange={props.onHandle}
                checked={props.value}
                />
                <label htmlFor="MicroUSB">Micro-USB</label>
                <br />
                <input
                type="checkbox"
                id="MiniUSB"
                name="connect"
                onChange={props.onHandle}
                checked={props.value}
                />
                <label htmlFor="MiniUSB">Mini-USB</label>
                <br />
                <input
                type="checkbox"
                id="USB1.0/1.1"
                name="connect"
                onChange={props.onHandle}
                checked={props.value}
                />
                <label htmlFor="USB1.0/1.1">USB 1.0/1.1</label>
                <br />
                <input
                type="checkbox"
                id="USB2"
                name="connect"
                onChange={props.onHandle}
                checked={props.value}
                />
                <label htmlFor="USB2">USB 2.0</label>
                <br />
                <input
                type="checkbox"
                id="USB3"
                name="connect"
                onChange={props.onHandle}
                checked={props.value}
                />
                <label htmlFor="USB3">USB 3.0</label>
                <br />
                <input
                type="checkbox"
                id="USB3.1"
                name="connect"
                onChange={props.onHandle}
                checked={props.value}
                />
                <label htmlFor="USB3.1">USB 3.1</label>
                <br />
                <input
                type="checkbox"
                id="USB3.2"
                name="connect"
                onChange={props.onHandle}
                checked={props.value}
                />
                <label htmlFor="USB3.2">USB 3.2</label>
                <br />
                <input
                type="checkbox"
                id="usbC"
                name="connect"
                onChange={props.onHandle}
                checked={props.value}
                />
                <label htmlFor="usbC">USB-C</label>
                <br />
                <input
                type="checkbox"
                id="SD"
                name="connect"
                onChange={props.onHandle}
                checked={props.value}
                />
                <label htmlFor="SD">SD Card Slot</label>
                <br />
                <input
                type="checkbox"
                id="MicroSD"
                name="connect"
                onChange={props.onHandle}
                checked={props.value}
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