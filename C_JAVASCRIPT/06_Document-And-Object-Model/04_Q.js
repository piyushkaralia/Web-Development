//Q1
let element=document.createElement("button");
element.innerText="click me";
document.querySelector("body").prepend(element);
element.style.backgroundColor="red";
element.style.color="white";

//Q2
let para=document.querySelector("p");
para.classList.add("newClass");