//5 Strings

{
  //5.1 String
  let str = "Hi I am Sarvesh"
  console.log(str)

}

{
  //5.2 Template Literals: variables and templates can be written inside template literals
  let specialString = `This is special type of string`;
  console.log(specialString);
  console.log(typeof specialString);

  let obj ={
    item:"pen",
    price:10
  }

  //$ are called Template Literals

  let output = `price of ${obj.item} is ${obj.price}`
  console.log(output);
}

{
  //5.3 String functions
  let str = "I am learning js"
  console.log(str.length);
  console.log(str.toUpperCase())// these funtions never change the og str it will return a newstr new value
  // this is coz Strings are immutable in js
  console.log(str.trim())// removes all empty spaces at front and back
  console.log(str.slice(1,3)) //1 inclusive and 3 is excluded
}
