// this file is going to stub out all the rest calls to redshirt-api

export let laptop_list = [];

// gets the unlisted laptops
export const  GetUnlisted =  async () =>{


     let remote_laptops = [
      {
        "id": 10001,
        "make": "Dell",
        "model": "Latitude E5570",
        "resolution": "1920 x 1080",
        "cpu": "i5-6300HQ",
        "speed": "2.30 GHz",
        "ram": 16,
        "storage": "256 GB SSD",
        "gpu": "",
        "os": "Microsoft Windows 10 Pro",
        "notes": "Backlit keyboard",
        "screenSize": "15.6",
        "custom": false,
        "features": [],
        "connectivity": [],
        "price": 0,
        "color": ""
      },
      {
        "id": 10002,
        "make": "HP",
        "model": "Elitebook 850 G2",
        "resolution": "1920 x 1080",
        "cpu": "i5-5200U",
        "speed": "2.20 GHz",
        "ram": 12,
        "storage": "256 GB SSD",
        "gpu": "",
        "os": "Microsoft Windows 10 Pro",
        "notes": "brand new battery",
        "screenSize": "14",
        "custom": true,
        "features": [],
        "connectivity": [],
        "price": 0,
        "color": ""
      },
      
      {
        "id": 10003,
        "make": "HP",
        "model": "Spectre x360",
        "resolution": "1920 x 1080",
        "cpu": "i5-5200U",
        "speed": "2.20 GHz",
        "ram": 16,
        "storage": "512 GB SSD",
        "gpu": "NVIDIA GeForce GTX",
        "os": "Microsoft Windows 10 Pro",
        "notes": "backlit keyboard",
        "screenSize": "15.6",
        "custom": false,
        "features": [],
        "connectivity": [],
        "price": 0,
        "color": ""
      }

      ];
    laptop_list = remote_laptops;
    return remote_laptops;
  
  }
  
  // look for pictures for a given laptop , returns a list
  export const GetPics = async ( sku ) => {
    // based on the sku return some or none
    let res ;
    // found some
    if ( sku === 10001){
      res = [  "https://ebay-imgs.s3.us-east-2.amazonaws.com/dell/xps-12-ultrabook/intel-core-i5-7th-gen/OIP1.jpg",
        "https://ebay-imgs.s3.us-east-2.amazonaws.com/dell/xps-12-ultrabook/intel-core-i5-7th-gen/OIP2.jpg",
        "https://ebay-imgs.s3.us-east-2.amazonaws.com/dell/xps-12-ultrabook/intel-core-i5-7th-gen/OIP3.jpg" ];
    } else{
  
        // none found
        res = [];
    }
    return res;
  }
  
  // adding a picture for a laptop
  /*
    dummy data to pass back, these pics already exist on s3
  */
  const extra_pics = [
    "https://ebay-imgs.s3.us-east-2.amazonaws.com/dell/xps-12-ultrabook/intel-core-i5-7th-gen/OIP4.jpg",
    "https://ebay-imgs.s3.us-east-2.amazonaws.com/dell/xps-12-ultrabook/intel-core-i5-7th-gen/OIP5.jpg",
    "https://ebay-imgs.s3.us-east-2.amazonaws.com/dell/xps-12-ultrabook/intel-core-i5-7th-gen/OIP6.jpg"
  ];
  
  let idx = 0;
  
  // mocking add pic
  export const AddPic = async () => {
  
      const next_pic = extra_pics[idx];
      // increment idx , no more than 3
      idx +=  1;
      idx  %=  2;
        
      return next_pic;
  
  }
  
  
  
  
  
  
  
  
  
  //export const fetchData = async (args) => {
  
  // check if laptop is reviseable
  export const  GetReviseable =  async ( sku ) => {
      //  10001 is reviseable , otherwise no
      let res;
      if ( sku === 10001 ){
        res = {
                   id:   111111,
                   title:   "Dell Latitude E5570 i5-6300HQ 16 GB RAM 256 GB SSD Windows 10 Pro",
                   sku:   "10000",
                   quantity:   1,
                   url:   "https://ebay.com"
        };
      }     else   {
        res = {
          id:   0,
          title:   "",
          sku:   "",
          quantity:   0,
          url:   ""
        };
      }
  
      return res;
  }
  
  
  const ROLE_CREDS = [
      { user: "poster1",
        pwd:"poster1"},
      { user: "refurbisher1",
        pwd: "refurbisher1"}

  ];

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
      if ( creds.user == 'poster1' && creds.pwd == 'poster1'){
          token_role = TOKEN_ROLES[0];
  
      }
      // refurbisher
      else if ( creds.user == 'refurbisher1' && creds.pwd == 'refurbisher1'){
        token_role = TOKEN_ROLES[1];
     
      }
      
      return await token_role;
  }

  // constants for debugging
  const posted_items = [
    { id: 123456,
      title:"This is a completely new item",
      sku:"4/23 10001",
      url:"https://ebay.com"},
    {
      id: 123457,
      title:"This is an updated item",
      sku:"4/23 10000, 10002",
      url:"https://ebay.com"
    }

  ];

  // function for creating a new Item 
  // returns an item object
  export async function CreateItem( laptop){
      // just returning a dummy item for now
      return await posted_items[0];
  }


  // mock function for updating an item
  // returns an item object
  export async function ReviseItem( id){
      // just returning a dummy item for now
      return await posted_items[1];
  }


// refurbisher upload callback

export async function UploadCsv( file ){
    // just mocking this for now
    // but very similar to picture upload

    return  await 3;

}
