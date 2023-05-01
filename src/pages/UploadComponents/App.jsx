import Detail from './components/detail'
import Color from './components/color'
import Connect from './components/connectivity'
import Features from './components/features'
import Type from './components/type'
import './App.css'
import { useState } from 'react'
import objData from './objData'
import laptops from './components/data'
import SimilarPost from './components/SimilarPost'
import PictureComponent from './components/PictureComponent'


function App() {

  const [data, setData] = useState({objData})
    
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
    function handleConnectChange(e){
      laptops[0].connectivity = e.target.value;
     

      console.log( "This is what the laptop looks currently",JSON.stringify(laptops[0]))

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
    <div>
      <form action="">
      <Detail onHandle={handleChange} laptop={laptops[0]}/>
        <Color onHandle={handleColorChange} />
        <Connect onHandle={handleConnectChange} />
        <Features onHandle={handleFeatureChange} />
        <Type onHandle={handleTypeChange} />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
     
     <div>
        <PictureComponent sku={ curr_sku } ></PictureComponent>
        <SimilarPost sku={ curr_sku } SearchComplete={handleSimilarPostSearchComplete} ></SimilarPost>
      </div>  
  
    </div>
  )
}

export default App
