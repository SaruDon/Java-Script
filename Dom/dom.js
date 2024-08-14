/*
we can access html from js 
window object represent a open window inside the browser
all html is present inside window
*/

let btn = document.createElement("button")
btn.innerText="Click-me"
btn.style.color ="light-green"
document.querySelector('body').prepend(btn)