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
