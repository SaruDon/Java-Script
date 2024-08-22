/* This prints data at once */
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

// console.log("fetching data1");


// let p1 = asyncFunc1();
// p1.then((res)=>{
//   console.log(res);
// })

// let p2 = asyncFunc2();
// p2.then((res)=>{
//   console.log(res);
// })


/*
  1st print data1  then data 2
*/

// console.log(`fetching data1`);
// let p1 = asyncFunc1();
// p1.then((res)=>{
//   console.log(res);
//   console.log(`fetching data2...`);
//   let p2 = asyncFunc2();
//   p2.then((res)=>{
//   })
// })


/*  
  Better syntax
*/

// console.log(`fetching data1`);
// asyncFunc1().then((res)=>{
//   console.log(res);
//   console.log(`fetching data2...`);
//   asyncFunc2().then((res)=>{
//   })
// })


/*
  Promise chaining
*/

function getData(dataId){
  return new Promise((resolve,rejetc)=>{
    setTimeout(()=>{
      console.log("data",dataId);
      resolve("success")
    },5000)
  })
}

// getData(1).then((res)=>{
//   console.log(res);
//   getData(2).then((res)=>{
//     console.log(res);
//   })  
// })

/*
  Better syntax
*/

getData(1)
  .then((res)=>{
    return getData(2);
  })
  .then((res)=>{
      return getData(3)
  })
  .then((res)=>{
      console.log('success');
  })  