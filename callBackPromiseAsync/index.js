/*

 Sync -> Synchronous means code runs in specific order
 Async -> non sync function

 callback -> function passed as an arg
*/

function hello(){
  console.log('hello world');
}

setTimeout(hello,2000) //2 sec = 2000ms

setTimeout(()=>{
  console.log('print after 2 sec');
  
},2000) //2 sec = 2000ms



function getData(data){  //For eg get data from database this process might take time after sometime 2 sec print the data
  setTimeout(()=>{
    console.log("data",data); 
  },2000);
}

/*

if i want data in order
 - data1 
 - data2 
 - data3

for this we can use

*/

function getData1(data,getNextData){  
  setTimeout(()=>{
    console.log("data",data);
    if (getNextData) {
      getNextData(); 
    }
  },2000);
}

// CallBack Hell
// getData1(1,()=>{
//   getData1(2,()=>{
//     getData1(3,()=>{
//       getData1(4);
//     })
//   })
// })

/*

Promises solved callback hell problem
is for eventual completion of task

*/


let promise = new Promise((resolve,reject)=>{
  console.log("I am a promise");
  resolve('success'); // it promise completed
  reject('some error')
})
promise.state


function getData2(dataId, getNextData){
  return new Promise((resolve,reject)=>{  //getData2 wont return immediately it will return a promise
    setTimeout(()=>{
      console.log("data",dataId);
      resolve("success")  // once promise is completed data is printed
      if (getNextData) { 
        getNextData()
      }
    },5000);
  })
}
// but this is still complex :(


const getPromise =()=>{
  return new Promise((resolve,reject)=>{
    console.log("I am a promise");
    resolve("success"); 
  })
}

let promise1 = getPromise();
promise1.then(()=>{
  console.log("promise fullfilled");
})


/*
Some async function


*/


function asyncFunc1(){
  return new Promise((resolve,rejetc)=>{
    setTimeout(()=>{
      console.log("some data1");
      resolve("success");
    },4000)
  })
}

function asyncFunc2(){
  return new Promise((resolve,rejetc)=>{
    setTimeout(()=>{
      console.log("some data2");
      resolve("success");
    },4000)
  })
}

console.log("fetching data1");  //1


let p1 = asyncFunc1();  //2
p1.then((res)=>{
  console.log(res);
})

let p2 = asyncFunc2(); //2
p2.then((res)=>{
  console.log(res);
})