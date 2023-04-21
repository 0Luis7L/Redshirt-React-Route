import {laptop_list, CreateItem, ReviseItem} from './UploadComponents/rs-api-mocks'
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
import PostedItem from './UploadComponents/PostedItem';


// The page for posting a specific laptop
function LaptopDetails (){

    // get the index of the laptop from the 
    const params = useParams()

     console.log(params.idx)
    // get the current laptop by idx
    const curr_laptop = laptop_list[params.idx];

    // state variable set to custom flag for laptop
    const [ custom , setCustom ] = useState( curr_laptop.custom)

    // component parent handlers
    // state variable determines if this page is processing a relist or creating a new item
   const [ itemFound , setItemFound] = useState(false);

   // set to true after a successful submit response , false by defualt
   const [ itemPosted, setItemPosted] = useState(false);
    
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
      curr_laptop.type = e.target.value;
      
      showLaptop();
    }
    
  // handles the SimilarPost completion
  function handleSimilarPostSearchComplete( found ){
      
      setItemFound(found);
  }


   // handler passed to detail component 
   // handles change of custom / non-custom
   function handleCustomChange( e){
      curr_laptop.custom = e.target.checked;
      setCustom(curr_laptop.custom);
      console.log("current laptop custom:" , curr_laptop.custom);
   }

   // handler function for the submit buttonClick
   const  handleLaptopSubmit = async (e) =>{
      e.preventDefault();
      // Two different scenarios
      // 1) the laptop is not custom and there is a similar post ( just update)
      console.log("inside form handler")
      let resp = {};
      if( !custom && itemFound){
        resp =  await   ReviseItem(curr_laptop.id);
      } 
      // 2)  just create a new item 
      else{
        resp = await CreateItem(curr_laptop);
      }

      // update the dom , and show the resp 
      setItemPosted(resp);


   }

  const curr_sku = curr_laptop.id;


    return (
      <>
        { !itemPosted ?       
        <div className="Upload-go">
         <h1>Update Laptop</h1>
         <p>Provide laptop details below:</p>
         <Form  onSubmit={ handleLaptopSubmit }>
          
         <Detail onHandle={handleChange} laptop={curr_laptop} customChanged={handleCustomChange} isCustom={custom}/>

        { !itemFound || custom ?  (
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
          <button className='submit' >Submit</button>
         </Form>
      
        </div>  :
        <PostedItem item={itemPosted} ></PostedItem>  }
      
      </>
        
      )

      



}


export default LaptopDetails