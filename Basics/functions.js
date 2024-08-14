// 7 functions 

{
  //7.1 standard functions
  function add(x,y){
    return x+y
  }

  console.log(add(2,5));
}

{
  //7.2 arrow functions
  const arrowAdd =(x,y)=>{
    return x+y
  }
  console.log(arrowAdd(2,6))
}


{
  /*
  7.3
  forEach loops in Arrays
    arr.forEach(callBackFunction)  
    A callback function is an argument to another function.
  */  

   let arr =[21,4,3,5,322]
   arr.forEach(function printVal(val){
    console.log(val);
   })

   arr.forEach((val)=>{
    console.log(val+1)
   })

   let arrStr= ["delhi","mumbai","surat","chennai"]
   arrStr.forEach((val,indx,arr)=>{
    console.log(val.toUpperCase(),indx)
   })

   //Printing sqaure
   let values =[1,2,3,4,5]
   let ans =[]
   values.forEach((values)=>{
      ans.push(values**2)
   })
   console.log(ans)
}

{
  //7.4 map
  /*
   similar to forEach()
   creates new array with result of some operation
  */
  let arr =[22,32,4,12]
  let ans = arr.map((val)=>{
   return val = val *2
  })
  console.log(ans)
}

{
  //7.4 filters
  /*
    created new array of elements that give true for a condition/filter

  */
  let arr =[12,21,23,343,32,12]
  let newArr = arr.filter((val)=>{
    return val%2==0
  })
  console.log(newArr)
}

{
  /*
  7.5 reduce
  Performs some operations and reduces the array to a single value. it returns that single value
  */


  //add
  let marks= [32,54,22,90,21]
  let sumOfAllNos = marks.reduce((res,curr)=>{
    return res+curr
  })
  console.log(sumOfAllNos)

  //largest
  let largest = marks.reduce((prev,curr)=>{
    return Math.max(prev,curr)
  })
  console.log(largest)
}

{
  //Prac quetions
  //filter out marks of stu who scored 90+

  let marks =[87,93,64,99,86]
  let ans = marks.filter((val)=>{
    return marks>90
  })
  console.log(ans)
}