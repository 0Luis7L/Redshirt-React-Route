import { useState, useEffect} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'


import { GetReviseable } from '../rs-api-endpoints'

export default function SimilarPost ( props ){
    const PostIcon = <FontAwesomeIcon icon={faCopy} />
    /*
    component is used to determine if a laptop is eligible as a quantity 
    update.  Queries the RedshirtApi and dispalys a link to a similar post if 
    found .  otherwise displays no similar post
    */

    // state variable that holds Item
    const [ itemFound, setItemFound] = useState("*** Looking for similar Posts ***")
    const [ itemId, setItemId] = useState("*** Looking for ItemId ***")
    const [ title , setTitle] = useState("*** Looking for similar Posts ***")
 
    const callReviseEligible = async () => {
     
           
        // just return the response , could be an empty item
       
       
      const response = await GetReviseable(props.sku);
      // check if no item found
        
      return response;

    };


    useEffect(() => {
        callReviseEligible().then(
            result => {
                // here we update the dom with 
                let found = false;
                if( result.sku  != 0){
                    // change the link to the item 
                    console.log("found:",result.listingDetails.viewItemURL);
                    setItemFound(result.listingDetails.viewItemURL);
                    // and item id
                    setItemId(result.id);
                    // set the title which will be the text of the link
                    console.log(result.title);
                    setTitle(result.title);

                    // send true back up to the parent component
                    found = true;

                } else{
                    // otherwise just say that no items found
                    setItemFound("No similar items found");
                    setItemId("No similar items found");
                }
                console.log("calling search complete with found:", found);
            // let the parent know we are done
            props.SearchComplete(found);
                
                
            });
           
    },[callReviseEligible]);


    return ( 
            <fieldset className='similarPost'>
                <legend>Similar Post {PostIcon}</legend>
                <a href={ itemFound } > {title } </a>
                 { itemId } 
            </fieldset>)


}