/*
    Change in state of object is known as event
    - Mouse Clicks 
    - Keyboard events
    - Form Events 
    - Print events


    syntax

    node.event=()=>{
        handle here    
    }
    
    1) we can handle events inside inline or inside js code 
    2) priority is given to js file
    3) once event is handle inside the js file we can not handle it again the last handler is considered

*/

let btn1 = document.querySelector("#btn"); //accessing btn id
btn1.onclick = () => {
  console.log("btn was clicked");
  let a = 26;
  a++;
  console.log(a);
};

document.addEventListener("DOMContentLoaded", () => {
  let box = document.querySelector("#box");
  if (box) {
    box.onmouseover = () => {
      console.log("we are inside div");
    };
  } else {
    console.error("Element with ID 'box' not found");
  }
});

/*
    
    Event Object
        -It has the special obj that has details about the event 

    All the events handler have access to the Event Object's Properties and methods

    for eg
    node.event=(e)=>{
        handle here
    }
    
    e.type
    e.target


*/

btn1.onclick = (e) => {
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX);
};

/*

    Event Listeners

    node.addEventListener(event,callback);

    node.removeEventListener(event,callback);
*/

let add = document.querySelector("#event");

add.addEventListener("click", () => {
  console.log("addEventListener Clicked- handler -1");
});

add.addEventListener("click", () => {
  console.log("addEventListener again!! Clicked  handler -2");
});

const handler3 = () => {
  console.log("addEventListener again!! Clicked  handler -3");
};
add.addEventListener("click", handler3);

add.addEventListener("click", () => {
  console.log("addEventListener again!! Clicked  handler -4");
});

add.removeEventListener("click", handler3);

/*



*/

let currentMode = "light";
let body = document.querySelector("body");
let mode = document.querySelector("#mode");

mode.addEventListener("click", () => {
  if (currentMode === "light") {
    body.classList.add("dark");
    body.classList.remove("light");
    currentMode = "dark";
  } else {
    body.classList.add("light");
    body.classList.remove("dark");
    currentMode = "light";
  }
  console.log(currentMode);
});
