
import {Link} from 'react-router-dom'
import {  useState,useEffect} from 'react'
// import { GetUnlisted } from './UploadComponents/rs-api-mocks';

import { callGetUnlisted} from './rs-api-endpoints'
import useLaptops from '../hooks/useLaptops';

// this component is used to query the redshirt api 
// for laptop a list of laptops that need to be posted


export default function LaptopsList( ) {

        const [ laptopList , setLaptopList] = useState([]);

        // for setting the global laptops
        const { setLaptops } = useLaptops();
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
                          <li className='Laptop' key={lt.id}>
                              <Link  to={`/upload/${idx++}`}>{lt.id} {lt.make}  {lt.model} {lt.cpu}</Link>


                          </li>

                      
                        
                          
                   ) )
                  // now update the dom

                      setLaptops(result);
                    setLaptopList(items);
                           
            }  );
           
        },[]);

         return (
          <div>
            <h1>Laptop List</h1>
            <p style={{marginTop: ('20px')}}>Here are the listed laptops that need to be checked:</p>
            <div className="Laptops">
              <>{ laptopList }</>
            </div>
          </div>
         );

};