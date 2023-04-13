import laptops from './data/data'
import { Form, redirect } from "react-router-dom";
import Color from './UploadComponents/color'
import Detail from './UploadComponents/detail'
import Features from './UploadComponents/features'
import Connect from './UploadComponents/connectivity'
import Type from './UploadComponents/type'
import PictureComponent from './UploadComponents/PictureComponent'
import SimilarPost from './UploadComponents/SimilarPost';


import { useParams } from "react-router-dom";
import { useState } from 'react'


// The page for posting a specific laptop
function LaptopDetails (){

    // get the index of the laptop from the 
    const params = useParams()

    // get the current laptop by idx
    const curr_laptop = laptops[params.idx];

    // component parent handlers
    // state variable determines if this page is processing a relist or creating a new item
   const [ itemFound , setItemFound] = useState(false);
    
    function handleChange(event){
      const {name, value, type, checked} = event.target
      setData(prevData => {
        return {
          ...prevData,
          [name]: type === "checkbox" ? checked : value
        }
      })
    }

    // function for debugging
    // just shows the info about curr_laptop
    function showLaptop(){
        console.log(JSON.stringify(curr_laptop));

    }

    function handleSubmit(event){
      event.preventDefault()
      submitToApi(data)
    }

    // handles the update to the color 
    function handleColorChange( e){
      // changing the color of the laptop, just hard-coded for now
      curr_laptop.Color = e.target.value;

      showLaptop();
      
    }
    function handleConnectChange(connectivity){
      curr_laptop.connectivity = connectivity;
      
      showLaptop();
     
      
    }
    function handleFeatureChange(features){
      curr_laptop.features = features;
      showLaptop();
    }
    function handleTypeChange(e){
      curr_laptop = e.target.value;
      
      showLaptop();
    }
    
  // handles the SimilarPost completion
  function handleSimilarPostSearchComplete( found ){
      
      setItemFound(found);
  }

  const curr_sku = curr_laptop.id;








    return (


        <div className="Upload-go">
         <h1>Here are the inputs</h1>
         <Form method="post" action="/upload/">
          
         <Detail onHandle={handleChange} laptop={laptops[0]}/>

        { !itemFound ? (
         <><Color onHandle={handleColorChange} /><div className='connectivity--features'>
              <Connect onHandle={handleConnectChange} />

              <Features onHandle={handleFeatureChange} />
            </div><Type onHandle={handleTypeChange} /></>
        ):<></>}
          <div className="pic">
          <PictureComponent sku={ curr_sku } ></PictureComponent>
       
          </div>
          <div className="pic">
          <SimilarPost sku={ curr_sku } SearchComplete={handleSimilarPostSearchComplete} ></SimilarPost>
          </div>
          <br />
          <button>Submit</button>
         </Form>
    
        </div>
      )

      



}


export default LaptopDetails