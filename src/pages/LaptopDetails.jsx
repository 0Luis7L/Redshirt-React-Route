import laptops from './data/data'
import { Form, redirect } from "react-router-dom";
import Color from './UploadComponents/color'
import Detail from './UploadComponents/detail'
import Features from './UploadComponents/features'
import Connect from './UploadComponents/connectivity'
import Type from './UploadComponents/type'
import PictureComponent from './UploadComponents/PictureComponent'
import SimilarPost from './UploadComponents/SimilarPost';



import { useState } from 'react'


// The page for posting a specific laptop
function LaptopDetails (){

    // component parent handlers
   
    
    function handleChange(event){
      const {name, value, type, checked} = event.target
      setData(prevData => {
        return {
          ...prevData,
          [name]: type === "checkbox" ? checked : value
        }
      })
    }

    function handleSubmit(event){
      event.preventDefault()
      submitToApi(data)
    }

    // handles the update to the color 
    function handleColorChange( e){
      // changing the color of the laptop, just hard-coded for now
      laptops[0].color = e.target.value;
      
      
    }
    function handleConnectChange(connectivity){
      laptops[0].connectivity = connectivity;
      
      console.log(laptops[0].connectivity);
     
      
    }
    function handleFeatureChange(features){
      laptops[0].features = features;
      console.log(laptops[0].features);
    }
    function handleTypeChange(e){
      laptops[0].type = e.target.value;
      
      console.log( "This is what the laptop looks currently",JSON.stringify(laptops[0]))
    }
    
  // handles the SimilarPost completion
  function handleSimilarPostSearchComplete( found ){
      console.log( "item found:", found);

  }

  const curr_sku = laptops[0].id;

  console.log( "Laptop when the page loads",JSON.stringify(laptops[0]))






    return (
        <div className="Upload-go">
         <h1>Here are the inputs</h1>
         <Form method="post" action="/upload/">
          
         <Detail onHandle={handleChange} laptop={laptops[0]}/>

        
         <Color onHandle={handleColorChange} />
        <div className='connectivity--features'>
         <Connect onHandle={handleConnectChange} />

         <Features onHandle={handleFeatureChange} />
         </div>
        <Type onHandle={handleTypeChange} />
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