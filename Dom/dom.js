/*
we can access html from js 
window object represent a open window inside the browser
all html is present inside window
*/

<<<<<<< HEAD
let btn = document.createElement("button")
btn.innerText="Click-me"
btn.style.color ="light-green"
document.querySelector('body').prepend(btn)
=======
/*

8.0 DOM Manipulation

- Selecting with ID
  document.getElementById('id_name')

- Selecting with Class
  document.getElementByClassName('class_name')

- Selecting with tag
  document.getElementByTagName('p')

*/

/*
8.1 Query Selector

- document.querySelector('id/myClass/tag')

document.querySelector('.myClass') //use .class_name to use it as class
*/
let element = document.querySelector(p);
console.log(p);

let elements = document.querySelectorAll(p);
console.log(p);

/*

8.2 Getting and setting and updating in tags

- tagName : returns the tagname
- innerText : return the text content of all elements  of  itself and children elements
- innerHTML : return the HTML content of all elements  of  itself and children elements
- textContent : return textual content of hidden element

let element1 = document.getElementsById(para);
console.loh(element1.tagName);

para.innerHtml = "<p>Hello world<p/>"
*/

/*

8.3 Attribute 
    
    We can access attributes of the the tags using this
    .getAttribute("attribute_name")
    .setAttribute("attribute_you_want_to_Change,new_value")


    Changing value of style
*/

const div = document.querySelector(p);
let attribute = div.getAttribute("id"); //stores the attribute id value
console.log(attribute);
>>>>>>> 826b5abb8ed4b957c41e5019a4d698462669abb4
