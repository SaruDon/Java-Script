// 6 Arrays collection of items Arrays are special types of obj
/*
  key act as index
*/



{
  // 6.1

  let markList =[98,21,87,74,21]
  let heros =["ironman","hulk","thor","batman"]
  let info =["rahul", 21,"Delhi"] //differnt type of data can also be stored inside arrays

  for (const iterator of info) {
    console.log(iterator);
  }

  /*
  6.2 methods
  - arrays.length
  - access arr[0],arr[1]
  */


  //Finding avg marks of entire class 
  let marks=[85,97,44,37,76,60]
  let sum =0;
  for (const i of marks) {
    sum += i;
  }
  console.log(sum/marks.length)


  // all items have 10% offer then apply change and give final offer
  let prices =[250,645,300,90-0,50]
  let finalPrice = 0;
  for (const i of prices) {
    let offerPrice = i - i*.1
    finalPrice += offerPrice
  }
  console.log(finalPrice)
}


{
  /*
    6.3 common methods
    - Push(): add at end
    - Pop(): delete from end and return
    - toString(): convert it to string
    - concat: joins to arrays
    - unshift: add element to start
    - shift: delete value form start
    - slice: to select subarray similar to substring {no changes in og array}
    - splice: same fun to slice but does changes to og array
      syntax splice(startIndex, deleteCount, replaceWith)

  */


    let foodItems =["lichi", "chips","milk","eggs"]
    foodItems.push("coke")
    foodItems.splice(1,2,"apple","pizza")
    console.log(foodItems)
    console.log(foodItems.slice(1,3))
    console.log(foodItems)

    console.log(foodItems.pop())
    console.log(foodItems.unshift("banana"))
    console.log(foodItems)
    console.log(foodItems.shift())
    console.log(foodItems.toString())


    //concat
    let marvel = ["ironman","spiderman","thor"]
    let dc =["badman","superman"]
    let superheros = marvel.concat(dc)
    console.log(superheros)
}
