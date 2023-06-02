import { useState, useEffect} from 'react'
import PictureUpload from './PictureUpload';
import { GetPics } from '../rs-api-endpoints'


export default function PictureComponent(props){

 



    // index for the picture list id, increments on addpic
    let idx_id = 1;

    const addToList = (item) =>{
     
        // change to updated list 
        // get the length of apiResponse
        let next_id = apiResponse.length + 1;
        console.log("next_id:", next_id);
        console.log("item:", item)
        // items should be a list of images on s3
        // iterate thru
        let imgList = [...apiResponse];
        for(let i = 0; i < item.length; i++){
          console.log(item[i]);
           imgList = [...imgList, <img key={next_id} src={item[i]} height="75" width="100" /> ]
          // increment next_id
          next_id+= 1;
        }
        console.log("imgList after:", imgList);
       
       setApiResponse(imgList);
      // console.log(apiResponse);
      // increment the number of pictures
      setPicsCount( picsCount + item.length)
    }


    const callRestApi = async () => {
     

      const jsonResponse = await GetPics(props.sku)
      console.log("before idx_id:",idx_id);
     const arrayOfLists = jsonResponse.map(
        record => <img key={idx_id++} src={record} widht="100" height="75" />
      )
      console.log("after idx_id:",idx_id);
      return arrayOfLists;
    };
    
     
 
      const [apiResponse, setApiResponse] = useState(["*** now loading ***"]);
      const [ picsCount, setPicsCount] = useState( 0)
      
      useEffect(() => {
          callRestApi().then(
              result => {
                setApiResponse(result);
                setPicsCount( result.length)

              });
             
      },[]);
    
     
      return(
          <fieldset className='uploadImg'>
            <legend>Upload Images</legend>
              
              <p>{ apiResponse } </p>
                
              { picsCount > 5 ?
 <>
 <h3>Pictures Found</h3>
 </>
:
<PictureUpload sku={ props.sku } uploadComplete={ addToList }/>
}
      
              
         
              </fieldset>
      );
    };

