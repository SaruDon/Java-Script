/*

The Change in state of obj is called as an event

*/

let btn = document.querySelector('#btn')

btn.onclick =() =>{
  console.log("button Clicked")
  let a =26;
  a++;
  console.log(a);
}