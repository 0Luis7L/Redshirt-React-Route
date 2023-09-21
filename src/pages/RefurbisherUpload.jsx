import { UploadCsv } from "./rs-api-endpoints"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScrewdriverWrench, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'

export default function RefurbisherUpload(){
    const Tools = <FontAwesomeIcon icon={faScrewdriverWrench} />
    const UploadIcon = <FontAwesomeIcon icon={faArrowUpFromBracket} />

    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
    const [ uploaded , setUploaded] = useState(false);
    const [ uploadResult, setUploadResult] = useState();
    
	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
        
	};

    const uploadHandler  = async () =>{
            if( isFilePicked){
          const result =   await UploadCsv(selectedFile);
          setUploadResult(result);
            setUploaded(true);
         

            }
    }

      return ( 
        <div>
            <h1>Upload Refurbished Laptops? {Tools}</h1>
            <br />
         
            <div className="Refurbished" alt="blue hexagon image background" href="https://www.vecteezy.com/free-vector/hexagon-wallpaper">
            { !uploaded ?   
              <fieldset className="refurbish">
                    <legend>Refurbish-Upload {UploadIcon}</legend>
                    <input className="btn-file"  type="file" onChange={changeHandler} style={{color: 'white'}} />
                    <input className="btn-file"  type="button" value="upload csv file" onClick={uploadHandler} />
                </fieldset> : 
                <div>
                    <p>
                        <table>
                            <tr>
                                <td>Laptops Added</td>
                                <td>{  uploadResult.laptopsAdded.length } </td>
                            </tr>
                            <tr>
                                <td>
                                    Laptops Updated
                                </td>
                                <td>
                                    { uploadResult.laptopsUpdated.length }
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Laptops with Error
                                </td>
                                <td>
                                    { uploadResult.laptopsWithError }
                                </td>
                            </tr>

                        </table>
             
                    </p>
                    </div>
            }

            </div>


        </div>
    
    )
}
/*
<a href="https://www.vecteezy.com/free-vector/hexagon-wallpaper">Hexagon Wallpaper Vectors by Vecteezy</a>
*/