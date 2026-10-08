// //Event Handeling In JS
let btn1=document.querySelector("#btn1");

// btn1.onclick=()=>{
//     console.log("Btn1 Was CLicked");
// }

// let box=document.querySelector("div");

// box.onmouseover=()=>{
//     console.log('ur cursor just touched div');
// }

// //Event Object
// let btn2=document.querySelector("#btn2");

// btn2.onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// }


//Event Listeners
btn1.addEventListener("click",(evt)=>{
    console.log("button was clicked-handeler1");
    console.log(evt);
});
//the inlne on click will also work this time.//hello
btn1.addEventListener("click",()=>{
    console.log("button was clicked-handeler2");
});
btn1.addEventListener("click",()=>{
    console.log("button was clicked-handeler3");
});
let handeler4=()=>{
    console.log("button was clicked-handeler4");
}
btn1.addEventListener("click",handeler4);

//To Remove Event Listeners
//The callback reference should be same to remove.
btn1.removeEventListener("click",handeler4);