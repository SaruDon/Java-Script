// Fetch api provides an interface for fetching (sending and receiving) resources

// it uses 'req' and 'res' model

//fetch() method is used top fetch a resource (data)

const URL = "https://cat-fact.herokuapp.com/facts"

// const promise = fetch(URL);
// console.log(promise);

/*

Data format

AJAX : is Asynchronous JS & XML
JSON : is JavaScript Object Notation (This is used) need to convert -> JS object (response.json())

*/


const factPara = document.querySelector("#facts")
const factbtn = document.querySelector("#btn")


 
const getFacts = async()=>{
  console.log("getting data....");
  
  let responce = await fetch(URL) ///getReq fetching takes time to respond so waiting for it
  console.log(responce.status); //response contains data but its not in readable format so 
  let data = await responce.json() // this converts it into a readable format
  console.log(data);
  factPara.innerText = data[0].text; // set innerText
}

btn.addEventListener("click",getFacts) //

