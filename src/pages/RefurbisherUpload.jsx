import { UploadCsv } from "./rs-api-endpoints"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScrewdriverWrench, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'

export default function RefurbisherUpload(){
    const Tools = <FontAwesomeIcon icon={faScrewdriverWrench} />
    const UploadIcon = <FontAwesomeIcon icon={faArrowUpFromBracket} />

    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
    
	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);

	};

    const uploadHandler  = async () =>{
            if( isFilePicked){
            UploadCsv(selectedFile);
            }
    }

    return ( 
        <div>
            <h1>Upload Refurbished Laptops? {Tools}</h1>
            <br />
            <div className="Refurbished" alt="blue hexagon image background" href="https://www.vecteezy.com/free-vector/hexagon-wallpaper">
                <fieldset className="refurbish">
                    <legend>Refurbish-Upload {UploadIcon}</legend>
                    <input className="btn-file"  type="file" onChange={changeHandler} style={{color: 'white'}} />
                    <input className="btn-file"  type="button" value="upload csv file" onClick={uploadHandler} />
                </fieldset>
            </div>
        </div>
    
    )
}
/*
<a href="https://www.vecteezy.com/free-vector/hexagon-wallpaper">Hexagon Wallpaper Vectors by Vecteezy</a>
*/