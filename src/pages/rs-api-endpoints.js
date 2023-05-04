

// post a new laptop 
// HOPEFULLY takes laptop object as body
// returns an ebay item with itemid and some other details
export async function CreateItem( laptop){

    // dev server uri
    const uri = 'https://localhost:7087/api/Laptop/createitem';
    console.log("inside createitem (real)");
    const resp = await fetch( uri, {
        method: 'POST',
        body: JSON.stringify(laptop),
        headers: {
              
			'Content-Type': 'application/json'
			} 
    });
    // get the item
    const item = await resp.json();

    // return item
    return item;


}

// updates a laptop with the passed id
// this assumes a similar post component
// has found a similar post , so the api
// just expects an id and returns the item object that was found previously
export async function ReviseItem( id){

    const uri = "https://localhost:7087/api/Laptop/revise/" + id;

    const resp = await fetch(uri,{
        method:'POST'
    });
    // get the item
    const item = await resp.json();

    return item;

}

// add a new pic
export const callAddPic = async (selectedFile,sku) => {
    const formData = new FormData();

    formData.append('File', selectedFile);
    const add_pic_url = "https://localhost:7087/addpic/" + sku ;
    const resp = await 	fetch(
        add_pic_url,
        {
            method: 'POST',
         //   mode:'no-cors',
            body: formData,
        }
    );

    const pic_url = await resp.text();
    return pic_url

//   return txt;
};

// get pics
export const GetPics = async ( sku) => {

        // todo : set the endpoint with sku appended
        const getpics_url = "https://localhost:7087/api/Laptop/getpics/" + sku;
      const response = await fetch(getpics_url);
      const jsonResponse = await response.json();
      


 
    return jsonResponse;
  };


// get unlisted
const getUnlistedurl =  "https://localhost:7087/api/Laptop/getunlisted"  
// async function to get json of
// laptop object from passed sku

export const callGetUnlisted = async () => {
    const response = await fetch(getUnlistedurl);

    // just return the response , could be null
    const jsonResponse = await response.json();
   // console.log(jsonResponse);
  return jsonResponse;
};


export const GetReviseable = async (sku) => {
     
           
    // just return the response , could be null
const getreviseable_url = "https://localhost:7087/api/Laptop/getreviseable/"+ sku;
      const response =  await fetch(getreviseable_url);

  
    const jsonResponse =  response.json();
    console.log(jsonResponse);
  return jsonResponse;
  
};

// upload a csv , for refurbisher only
export const UploadCsv = async ( csv) => {
    const formData = new FormData();

    formData.append('File', csv);
    const add_pic_url = "https://localhost:7087/api/Laptop/uploadcsv";
    const resp = await 	fetch(
        add_pic_url,
        {
            method: 'POST',
         //   mode:'no-cors',
            body: formData,
        }
    );

    const laptops_added = await resp.text();
    return laptops_added;


}