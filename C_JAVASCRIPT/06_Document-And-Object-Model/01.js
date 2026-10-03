// //diff in console.log() and console.dir()
// //console.log()->treats the element like HTML and prints its markup tree.
// //console.dir()->treats the element like a true JavaScript object, bypassing its HTML representation to list all of its internal properties and methods.

// console.dir(window);
// console.dir(window.document);// or console.di r(document);->cuz the window is global.
// console.dir(document.body); 
// console.dir(document.head);




// //DOM MANIPULATION WAYS->

// //1st->(selecting with id), (id->unique)
// let heading=document.getElementById("heading");
// console.dir(heading);//if heading is empty it will return null.

// //2nd->(selecting with class) 
// let headings=document.getElementsByClassName("myClass");//returns an HTMLCOllECTION
// console.dir(headings);//if headings is empty it will return empty HTMLCOllECTION.
// console.log(headings); 

// //3->(selecting with Tag)
// let parahs=document.getElementsByTagName("p");
// console.log(parahs);




// //Query Selecter->returns node list.   
// let firstEl=document.querySelector("p");
// console.dir(firstEl);
// let allEl=document.querySelectorAll("p");
// console.dir(allEl);


// let firstEL1=document.querySelector(".myClass");//in query selector we have to write . before the clss name.
// console.dir(firstEL1);
// let allEl1=document.querySelectorAll(".myClass");
// console.dir(allEl1);


// console.dir(document.querySelector("#heading"));



// //Properties

// //Tagname->returns tag for element nodes.
// let firstEl=document.querySelector("p");
// console.log(firstEl.tagName);

// //innerText->retuens the text content of the element and all its children.
// let div=document.querySelector("#sake");
// console.dir(div);
// console.dir(div.innerText);//write it in console for better understanding.

// //innerHTML->returns the plain text or html contents in the element.
// let div2=document.querySelector("#sake");
// console.dir(div);
// console.dir(div.innerHTML);//write it in console for better understanding.

// //innerText allows us to change or update the visible text of an HTML element dynamically at runtime, even directly from the browser console.
// //ex->div.innerText="pyush"

// //innerHTML allows us to change or update the HTML content inside an HTML element dynamically at runtime, even directly from the browser console.
// //ex->div.innerHTML="<div>inner html</div>"

// //textContent->returns textual content even for hidden elements.
// let head=document.querySelector("h2");
// console.dir(head.innerText);//will print nothing cuz its hidden.
// console.dir(head.textContent);//will print even the hidden text.




//parent- child concept

//Accessing Parent
let p =document.querySelector("h1");
console.dir(p.parentElement);//body

//Accessing child
let c =document.querySelector("div");
console.dir(c.children);

console.dir(c.firstElementChild);//or c.children[0]
console.dir(c.lastElementChild);//or c.children[1]

