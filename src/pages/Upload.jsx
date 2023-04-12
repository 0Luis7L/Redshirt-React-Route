import { Form, redirect } from "react-router-dom";
// results //
export const uploadAction = async ({ request }) => {
  console.log(request);
  const data = await request.formData()
  const formDetails = {sku: data.get('sku'), make: data.get('make'), model: data.get('model'), resolution: data.get('resolution'), cpu: data.get('cpu'), ram: data.get('ram'), storage: data.get('storage'), gpu: data.get('gpu'), os: data.get('os'), notes: data.get('notes'), screensize: data.get('screensize'), custom: data.get('custom')}
  const formColor = {color: data.get('color')}
  const formConnectivity = {connect: data.get('connect')}
  const formFeatures = {features: data.get('features')}
  const formType = {type: data.get('type')}
  console.log(formDetails)
  console.log(formColor)
  console.log(formConnectivity)
  console.log(formFeatures)
  console.log(formType)
  // send post request down here //

  // Redirect the User//
  return redirect('/')
}
export default function Upload() {

  return (
    <div className="Upload-go">
     <h1>Here are the inputs</h1>
     <Form method="post" action="/upload/">
      
      <div className="details">
        <input 
          type="text"
          placeholder='SKU'
          name="sku"
        />
        <input 
          type="text"
          placeholder="Make"
          name="make"
        />
        <input 
          type="text"
          placeholder="model"
          name="model"
        />
        <input 
          type="text"
          placeholder="resolution"
          name="resolution"
        />
        <input 
          type="text"
          placeholder="cpu"
          name="cpu"
        />
        <input 
          type="text"
          placeholder="ram"
          name="ram"
        />
        <input 
          type="text"
          placeholder="storage"
          name="storage"
        />
        <input 
          type="text"
          placeholder="gpu"
          name="gpu"
        />
        <input 
          type="text"
          placeholder="os"
          name="os"
        />
        <input 
          type="text"
          placeholder="notes"
          name="notes"
        />
        <input 
          type="text"
          placeholder="screensize"
          name="screensize"
        />
        <input 
          type="text"
          placeholder="custom"
          name="custom"
        />
      </div>
      <div className="color">
        <label htmlFor="color">Select A Color?</label>
        <select id="color" name="color">
          <option value="" style={{color: "#2b3452"}}>--Chose a color--</option>
          <option value="Beige" style={{color: "#2b3452"}}>Beige</option>
          <option value="Black" style={{color: "#2b3452"}}>Black</option>
          <option value="Blue" style={{color: "#2b3452"}}>Blue</option>
          <option value="Brown" style={{color: "#2b3452"}}>Brown</option>
          <option value="Clear" style={{color: "#2b3452"}}>Clear</option>
          <option value="Gold" style={{color: "#2b3452"}}>Gold</option>
          <option value="Gray" style={{color: "#2b3452"}}>Gray</option>
          <option value="Green" style={{color: "#2b3452"}}>Green</option>
          <option value="Multicolor" style={{color: "#2b3452"}}>Multicolor</option>
          <option value="Orange" style={{color: "#2b3452"}}>Orange</option>
          <option value="Pink" style={{color: "#2b3452"}}>Pink</option>
          <option value="Purple" style={{color: "#2b3452"}}>Purple</option>
          <option value="Red" style={{color: "#2b3452"}}>Red</option>
          <option value="Silver" style={{color: "#2b3452"}}>Silver</option>
          <option value="Yellow" style={{color: "#2b3452"}}>Yellow</option>
        </select>
      </div>
      <div className="connectivity--features">
        <fieldset className="connectivity">
          <legend>What connets to your device?</legend>
          <input
            type="checkbox"
            value="DisplayPort"
            name="connect"
          />
          <label htmlFor="DisplayPort">DisplayPort</label>
          <br />
          <input
            type="checkbox"
            value="Ethernet"
            name="connect"
          />
          <label htmlFor="Ethernet">Gigabit Ethernet</label>
          <br />
          <input
            type="checkbox"
            value="MiniDisplayport"
            name="connect"
          />
          <label htmlFor="MiniDisplayport">Mini displayport</label>
          <br />
          <input
            type="checkbox"
            value="HDMI"
            name="connect"
          />
          <label htmlFor="HDMI">HDMI</label>
          <br />
          <input
            type="checkbox"
            value="MicroHDMI"
            name="connect"
          />
          <label htmlFor="MicroHDMI">Micro-HDMI</label>
          <br />
          <input
            type="checkbox"
            value="MicroUSB"
            name="connect"
          />
          <label htmlFor="MicroUSB">Micro-USB</label>
          <br />
          <input
            type="checkbox"
            value="MiniUSB"
            name="connect"
          />
          <label htmlFor="MiniUSB">Mini-USB</label>
          <br />
          <input
            type="checkbox"
            value="USB1.0/1.1"
            name="connect"
          />
          <label htmlFor="USB1.0/1.1">USB 1.0/1.1</label>
          <br />
          <input
            type="checkbox"
            value="USB2"
            name="connect"
          />
          <label htmlFor="USB2">USB 2.0</label>
          <br />
          <input
            type="checkbox"
            value="USB3"
            name="connect"
          />
          <label htmlFor="USB3">USB 3.0</label>
          <br />
          <input
            type="checkbox"
            value="USB3.1"
            name="connect"
          />
          <label htmlFor="USB3.1">USB 3.1</label>
          <br />
          <input
            type="checkbox"
            value="USB3.2"
            name="connect"
          />
          <label htmlFor="USB3.2">USB 3.2</label>
          <br />
          <input
            type="checkbox"
            value="usbC"
            name="connect"
          />
          <label htmlFor="usbC">USB-C</label>
          <br />
          <input
            type="checkbox"
            value="SD"
            name="connect"
          />
          <label htmlFor="SD">SD Card Slot</label>
          <br />
          <input
            type="checkbox"
            value="MicroSD"
            name="connect"
          />
          <label htmlFor="MicroSD">MicroSD Card Slot</label>
          <br />
        </fieldset>
        <fieldset className="features">
          <legend>What are the features of the device?</legend>
          <input
            type="checkbox"
            value="10/100 Lan card"
            name="features"
          />
          <label htmlFor="LanCard">10/100 Lan card</label>
          <br />

          <input
            type="checkbox"
            value="3dCamera"
            name="features"
          />
          <label htmlFor="3dCamera">3d camera</label>
          <br />

          <input
            type="checkbox"
            value="5g"
            name="features"
          />
          <label htmlFor="5g">5g</label>
          <br />

          <input
            type="checkbox"
            value="Backlit keyboard"
            name="features"
          />
          <label htmlFor="Backlitkeyboard">Backlit keyboard</label>
          <br />

          <input
            type="checkbox"
            value="Bluetooth"
            name="features"
          />
          <label htmlFor="Bluetooth">Bluetooth</label>
          <br />

          <input
            type="checkbox"
            value="Mic"
            name="features"
          />
          <label htmlFor="Mic">Built-in Microphone</label>
          <br />

          <input
            type="checkbox"
            value="Built-in webcam"
            name="features"
          />
          <label htmlFor="webcam">Built-in webcam</label>
          <br />

          <input
            type="checkbox"
            value="Convertible 2-in-1 Laptop/Tablet"
            name="features"
          />
          <label htmlFor="2in1">Convertible 2-in-1 Laptop/Tablet</label>
          <br />

          <input
            type="checkbox"
            value="Double Screen"
            name="features"
          />
          <label htmlFor="DoubleScreen">Double Screen</label>
          <br />

          <input
            type="checkbox"
            value="Force Touch Trackpad"
            name="features"
          />
          <label htmlFor="ForceTouchTrackpad">Force Touch Trackpad</label>
          <br />

          <input
            type="checkbox"
            value="HSDPA"
            name="features"
          />
          <label htmlFor="HSDPA">HSDPA</label>
          <br />

          <input
            type="checkbox"
            value="LTE"
            name="features"
          />
          <label htmlFor="LTE">LTE</label>
          <br />

          <input
            type="checkbox"
            value="Multi-Touch Trackpad"
            name="features"
          />
          <label htmlFor="MultiTouchTrackpad">Multi-Touch Trackpad</label>
          <br />

          <input
            type="checkbox"
            value="Optane Memory"
            name="features"
          />
          <label htmlFor="OptaneMemory">Optane Memory</label>
          <br />

          <input
            type="checkbox"
            value="Optical Drive"
            name="features"
          />
          <label htmlFor="OpticalDrive">Optical Drive</label>
          <br />

          <input
            type="checkbox"
            value="Rugged"
            name="features"
          />
          <label htmlFor="Rugged">Rugged</label>
          <br />

          <input
            type="checkbox"
            value="Stylus"
            name="features"
          />
          <label htmlFor="Stylus">Stylus</label>
          <br />

          <input
            type="checkbox"
            value="TouchBar"
            name="features"
          />
          <label htmlFor="TouchBar">Touch Bar</label>
          <br />

          <input
            type="checkbox"
            value="TouchID"
            name="features"
          />
          <label htmlFor="TouchID">Touch ID</label>
          <br />

          <input
            type="checkbox"
            value="Touchscreen"
            name="features"
          />
          <label htmlFor="Touchscreen">Touchscreen</label>
          <br />

          <input
            type="checkbox"
            value="vrReady"
            name="features"
          />
          <label htmlFor="vrReady">Virtual Reality Ready</label>
          <br />

          <input
            type="checkbox"
            value="Widescreen"
            name="features"
          />
          <label htmlFor="Widescreen">Widescreen Display</label>
          <br />

          <input
            type="checkbox"
            value="WiFi"
            name="features"
          />
          <label htmlFor="WiFi">Wi-Fi</label>
          <br />
        </fieldset>
      </div>
      <div className="type">
        <fieldset>
          <legend>What type of PC?</legend>
          <input 
            type="radio" 
            value="casual"
            name="type"
          />
          <label htmlFor="casual">Casual computing</label>
          <input 
            type="radio" 
            value="gaming"
            name="type"
          />
          <label htmlFor="gaming">Gaming</label>
          <input 
            type="radio" 
            value="Graphic Design" 
            name="type"
          />
          <label htmlFor="GraphicDesign">Graphic Design</label>
          <input 
            type="radio" 
            value="parts" 
            name="type"
          />
          <label htmlFor="parts">Parts</label>
          <input 
            type="radio" 
            value="workstation" 
            name="type"
          />
          <label htmlFor="workstation">Workstation</label>
        </fieldset>
      </div>
      <div className="pic">
        <fieldset>
          <legend>upload images</legend>
          <input type="file" name="file"/>
        </fieldset>
      </div>
      <br />
      <button>Submit</button>
     </Form>

    </div>
  )
}
