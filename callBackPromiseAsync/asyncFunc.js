/*
  async -> function always returns a promise
  await -> pauses the execution of surrounding async function until the promise is settled
*/

const { reject } = require("async");

 
async function hello() {
  console.log("Hello"); // return a promise
}


function randomApi(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log("weather data");
      resolve(200);
    },2000)
  })
}

async function getWeatherData(){
  await randomApi();
  await randomApi();
} 
getWeatherData();