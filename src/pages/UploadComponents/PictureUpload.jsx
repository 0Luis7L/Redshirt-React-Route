import React, {useState, useEffect} from 'react';
import { AddPic } from './rs-api-mocks';

function PictureUpload(props){
	
	// state vars for the file picker 
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
	
	

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);

	};




	// api template function
	async function addPicHandler() {
		// just output the file name for debugging
		console.log( selectedFile );
		const jsonData = await AddPic();
  
		// call passed handler
		props.uploadComplete(jsonData);
		
      }

    
    
	return (
   <div>
			<input type="file" name="file" onChange={changeHandler} />
			{isFilePicked ? (
				
					<p>Filename: {selectedFile.name}</p>
				
				
				
			) : (
				<p>Select a file to show details</p>
			)}
			<div>
				<input type="button" onClick={ addPicHandler } value="Add pic" /> 

			</div>
		</div>
	)
}
export default PictureUpload