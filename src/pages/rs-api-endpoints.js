const debug = true;
let base_url = "https://lgtolr.net/";

if( debug)
  base_url = "https://localhost:7087/"


function getToken(){
  return localStorage.getItem("rs-token");
}

// post a new laptop 
// HOPEFULLY takes laptop object as body
// returns an ebay item with itemid and some other details
export async function CreateItem( laptop){

    const auth_token = "Bearer " + getToken();
    // dev server uri
    const uri = base_url + 'api/Laptop/createitem';
    console.log("inside createitem (real)");
    const resp = await fetch( uri, {
        method: 'POST',
        body: JSON.stringify(laptop),
        headers: {
      'Authorization': auth_token,
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

  const auth_token = "Bearer " + getToken();
    const uri = base_url + "api/Laptop/revise/" + id;

    const resp = await fetch(uri,{
        method:'POST',
        headers: { 'Authorization': auth_token}
    });
    // get the item
    const item = await resp.json();

    return item;

}

// add a new pic
export const callAddPic = async (selectedFile,sku) => {
    const formData = new FormData();
    const auth_token = "Bearer " + getToken();
    // append selectedFile as array of files
    for(const file of selectedFile){
      console.log(file.name)
    formData.append('files', file, file.name);
    }

    
    console.log("formData:", formData)
    const add_pic_url = base_url +"api/Laptop/addpic/" + sku ;
    const resp = await 	fetch(
        add_pic_url,
        {
            method: 'POST',
         //  mode:'no-cors',
            body: formData,
            headers: { 'Authorization': auth_token}
        }
    );

   const pic_url = await resp.json();
   
    return pic_url;

//   return txt;
};

// get pics
export const GetPics = async ( sku) => {
  const auth_token = "Bearer " + getToken();
        // todo : set the endpoint with sku appended
        const getpics_url = base_url + "api/Laptop/getpics/" + sku;
      const response = await fetch(getpics_url, {
        headers: { 'Authorization': auth_token}
      });
      const jsonResponse = await response.json();
      


 
    return jsonResponse;
  };


// get unlisted
const getUnlistedurl = base_url +  "api/Laptop/getunlisted"  
// async function to get json of
// laptop object from passed sku

export const GetUnlisted = async () => {
  const auth_token = "Bearer " + getToken();
    const response = await fetch(getUnlistedurl, {
      headers: { 'Authorization': auth_token}
    });

    // just return the response , could be null
    const jsonResponse = await response.json();
   // console.log(jsonResponse);
  return jsonResponse;
};


export const GetReviseable = async (sku) => {
     
  const auth_token = "Bearer " + getToken();
    // just return the response , could be null
const getreviseable_url = base_url + "api/Laptop/getreviseable/"+ sku;
      const response =  await fetch(getreviseable_url, {
        headers:{ 'Authorization': auth_token}
      });

  
    const jsonResponse =  response.json();
    console.log(jsonResponse);
  return jsonResponse;
  
};

// upload a csv , for refurbisher only
export const UploadCsv = async ( csv) => {
    const formData = new FormData();
    const auth_token = "Bearer " + getToken();
    formData.append('File', csv);
    const add_pic_url = base_url +  "api/Laptop/uploadcsv";
    const resp = await 	fetch(
        add_pic_url,
        {
            method: 'POST',
         //   mode:'no-cors',
            body: formData,
            headers: { 'Authorization': auth_token}
        }
    );

    const laptops_added = await resp.text();
    return laptops_added;


}

export const ToggleCustom = async( id ) =>{

  const auth_token = "Bearer " + getToken();
    const chg_custom_url = base_url + "api/Laptop/changecustom/" + id;

    const resp = await fetch(chg_custom_url,
    {method:'POST',
      headers: { 'Authorization': auth_token}});

    
}


const TOKEN_ROLES = [
    { 
      user: "poster1",
      token: "289rfoijewoi32u0",
      roles: [2000]
    },

    { 
      user:"refurbisher1",
      token:"20934r0329uewiofj02u",
      roles: [3000]
    } 

  ];

// mock function for logging in returns a token and a role code

export const CallLogin = async ( creds) =>{
    console.log('inside CallLogin');
    let token_role = {}
    // check the creds 
    // poster
    console.log("Inside CallLogin")
    console.log(creds);
    const login_url = base_url + "api/Login/login";
   const resp =  await fetch(login_url, {
        method: 'POST',
        body: JSON.stringify(creds),
    //    mode: 'no-cors',
       headers: { 'Content-Type': 'application/json'}
        
    });
    // get the json
    const data = await resp.json();
    // check about the roles
    if( data.role== "refurbisher")
            data.roles = [3000];
    else if( data.role == "poster")
            data.roles = [2000];
    else
            data.roles = null;
    data.role = "";
    return data;
}