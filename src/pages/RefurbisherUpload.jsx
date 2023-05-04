import { UploadCsv } from "./rs-api-endpoints"
import { useState } from "react";

export default function RefurbisherUpload(){


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
    <fieldset>
        <legend>Refurbish-Upload</legend>
        <input type="file" onChange={changeHandler}/>
        <input type="button" value="upload csv file" onClick={uploadHandler} />
    </fieldset>
    )
}