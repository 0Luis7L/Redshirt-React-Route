
import {Link} from 'react-router-dom'
import {  useState,useEffect} from 'react'
import { GetUnlisted } from './UploadComponents/rs-api-mocks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck, faSquareCheck, faLaptop } from '@fortawesome/free-solid-svg-icons'


// this component is used to query the redshirt api 
// for laptop a list of laptops that need to be posted


export default function LaptopsList( ) {
        const check = <FontAwesomeIcon icon={faSquareCheck} />;
        const List = <FontAwesomeIcon icon={faListCheck} />
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
          // set laptops to response
         
          return response;
        };

        const LaptopIcon = <FontAwesomeIcon icon={faLaptop} style={{marginRight: 10 + 'px'}}/>
        // useEffect for when fetch is done
        useEffect(() => {
                // do rest get unlisted
                callGetUnlisted().then(
                    result => {
                        // call the passed callback with the 
                        // result
                        // map the results to a list of laptops , as links
                        let idx=0;
                        const items =  result.map( (lt) => ( 
                          <li className='Laptop' key={lt.id}>
                              <Link   to={`/upload/${idx++}`}>{LaptopIcon} {lt.id} {lt.make}  {lt.model} {lt.cpu}</Link>
                          </li>
                        
                          
                   ) )
                  // now update the dom

                        
                    setLaptopList(items);
                           
            }  );
           
        },[]);

         return (
          <div>
            <h1>Laptop List {List}</h1>
            <p style={{marginTop: ('20px')}}>Here are the listed laptops that need to be checked {check} to the <a href="C:\Users\hayat\OneDrive\Documents\update\Redshirt-React-Route\src\pages\UploadComponents">Posted</a> page</p>
              <div className="List" alt="Blue and green background" href="https://www.vecteezy.com/free-vector/technology">
                <div className="Laptops">
                  <>{ laptopList }</>
                </div>
              </div>
              <div className="footer">
                <a class="previous" href="#">&laquo; Previous</a>
                <a class="next" href="#">Next &raquo;</a>
              </div>
          </div>
         );

};
/*
<a href="https://www.vecteezy.com/free-vector/technology">Technology Vectors by Vecteezy</a>
*/