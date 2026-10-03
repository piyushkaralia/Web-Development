// //DOM PART-2
// //Accessing the attributes by getAttribute(attr).
// let div=document.querySelector("div");
// console.dir(div);

// //Accessing id
// let id= div.getAttribute("id");
// console.dir(id);

// //Accessing name
// let name= div.getAttribute("name");
// console.dir(name);


// //Accessing class of p.
// let para=document.querySelector("p");
// console.dir(para.getAttribute("class"));




// //Changing the attributes by setAttribute(attr,value). 
// let para=document.querySelector("p");
// console.dir(para.setAttribute("class","newClass"));//shows undefined at console but changes are vissible in Elements.



// //Style
// let div=document.querySelector("div");
// console.log(div.style);
// //accessing the style 
// div.style.backgroundColor="red";
// div.style.fontSize="23px";
// // div.style.visibility="hidden";



// //Insert Elements
// //1st Example
// //creating a new element.
// let newBtn=document.createElement("button");
// console.dir(newBtn);
// newBtn.innerText="click me";

// let d=document.querySelector("#box2");
// //node.append()->Adds at the end of the node(inside).
// //d.append(newBtn);

// //node.prepend(el)->Adds at the start of the node(inside).
// //d.prepend(newBtn);

// //node.before()->adds before the node(outside).
// // d.before(newBtn);

// //node.after()->adds after the node(outside).
// d.after(newBtn);


// //2nd Example->add newHeading at the top of the page.
// let newHeading=document.createElement("h1");
// newHeading.innerHTML="<i>Hi, Whats up </i>";
// document.querySelector("body").prepend(newHeading);

// //Delete Element
// document.querySelector("p").remove();//deletes the paragraph.


