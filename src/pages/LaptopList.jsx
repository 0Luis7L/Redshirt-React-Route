
import {Link} from 'react-router-dom'
import {  useState,useEffect} from 'react'
import { GetUnlisted } from './UploadComponents/rs-api-mocks';

// this component is used to query the redshirt api 
// for laptop a list of laptops that need to be posted


export default function LaptopsList( ) {

        const [ laptopList , setLaptopList] = useState([]);


    
      //  const restEndpoint =  "https://localhost:7087/api/Laptop/getunlisted"  
        // async function to get json of
        // laptop object from passed sku

        const callGetUnlisted = async () => {
         //   const response = await fetch(restEndpoint);
            const response = await GetUnlisted();
            // just return the response , could be null
         //   const jsonResponse = await response.json();
           // console.log(jsonResponse);
          return response;
        };


        // useEffect for when fetch is done
        useEffect(() => {
                // do rest get unlisted
                callGetUnlisted().then(
                    result => {
                        // call the passed callback with the 
                        // result
                        // map the results to a list of laptops , as links
                        let idx=0;
                        const items = result.map( (lt) => ( 
                          <li key={lt.id}>
                              <Link to={`/upload/${idx++}`}>{lt.id} {lt.make}  {lt.model} {lt.cpu}</Link>


                          </li>
                        
                          
                   ) )
                  // now update the dom

                        
                    setLaptopList(items);
                           
            }  );
           
        },[callGetUnlisted]);

         return ( <>{ laptopList }</> );

};