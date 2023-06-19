import {laptop_list} from './UploadComponents/rs-api-mocks'
import { CreateItem, ReviseItem, ToggleCustom } from './rs-api-endpoints';
import { Form, redirect } from "react-router-dom";
import Color from './UploadComponents/color'
import Detail from './UploadComponents/detail'
import Features from './UploadComponents/features'
import Connect from './UploadComponents/connectivity'
import Type from './UploadComponents/type'
import PictureComponent from './UploadComponents/PictureComponent'
import SimilarPost from './UploadComponents/SimilarPost';
import Price from './UploadComponents/Price';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faAngleDown } from '@fortawesome/free-solid-svg-icons'

import { useParams } from "react-router-dom";
import { useState } from 'react'
import PostedItem from './UploadComponents/PostedItem';
import useLaptops from '../hooks/useLaptops';
import LaptopsContext from '../context/LaptopProvider';


// The page for posting a specific laptop
function LaptopDetails (){

  const { laptops } = useLaptops();

    const ArrowIcon = <FontAwesomeIcon icon={faAngleDown} />

    // get the index of the laptop from the 
    const params = useParams()

     console.log(params.idx)
    // get the current laptop by idx
    const curr_laptop = laptops[params.idx];

    // state variable set to custom flag for laptop
    // Luis- I had to replace [curr_laptop.custom] with an empty array
    const [ custom , setCustom ] = useState([])

    // component parent handlers
    // state variable determines if this page is processing a relist or creating a new item
   const [ itemFound , setItemFound] = useState(false);

   // set to true after a successful submit response , false by defualt
   const [ itemPosted, setItemPosted] = useState(false);
    
    function handleChange(event){
    /*  const {name, value, type, checked} = event.target
      setData(prevData => {
        return {
          ...prevData,
          [name]: type === "checkbox" ? checked : value
        }
      })  */
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

  function handlePriceChange( price){
    // set the price of the curr_laptop to 
    // what the control says
    curr_laptop.price = price;
    showLaptop();

  }


   // handler passed to detail component 
   // handles change of custom / non-custom
   const  handleCustomChange = async( e) =>{
      ToggleCustom(curr_laptop.id);
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
   //const curr_sku = curr_laptop.id something is wrong with the id. retuns as id undifined?
  const curr_sku = curr_laptop.id;
   

    return (
   
      <>
        { !itemPosted ?       
        <div className="Upload-go">
         <h1>Provide laptop details below: <FontAwesomeIcon icon={faCircleInfo} size="2xs" style={{paddingTop: 20 + "px"}} /></h1>
         <Form  onSubmit={ handleLaptopSubmit }>

          <div className="Input-Page" alt="cyper circuit board " href="https://www.vecteezy.com/free-vector/hexagon">
            <Detail onHandle={handleChange} laptop={curr_laptop} customChanged={handleCustomChange} isCustom={custom}/>
            { !itemFound || custom ?  ( 
            <>
              <div className="color--price">
                <Color onHandle={handleColorChange} />
                <Price onChange={handlePriceChange} />
              </div>
              <div className='connectivity--features'>
                <Connect onHandle={handleConnectChange} />
                <Features onHandle={handleFeatureChange} />
              </div>
              <Type onHandle={handleTypeChange} />
            </>
  
              ):<></>}
              <div className="pic">
                <PictureComponent sku={ curr_sku } ></PictureComponent>
              </div>
              <div className="pic">
                <SimilarPost sku={ curr_sku } SearchComplete={handleSimilarPostSearchComplete} ></SimilarPost>
              </div>
              <br />
              <div className="submit-btn">
                <button className='submit' >Submit {ArrowIcon}</button>
                <button onClick={function AuctionClick () {alert("This action will remove the current laptop from the unlisted page")}} 
                  className='submit' >Auction {ArrowIcon}
                </button>
              </div>
          </div>

         </Form>
        </div>  :
        <PostedItem item={itemPosted} ></PostedItem>  }
        
      </>
        
      )

      



}


export default LaptopDetails
/*
<a href="https://www.vecteezy.com/free-vector/hexagon">Hexagon Vectors by Vecteezy</a>
*/