let btn1=document.querySelector("#btn1");
let body=document.querySelector("body");
let currentMode="light";

btn1.addEventListener("click",()=>{

    if(currentMode==="light"){
        currentMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currentMode="light";
        body.classList.remove("light");
        body.classList.remove("dark");
    }
    console.log(currentMode);

});
// btn1.addEventListener("click",()=>{

//     if(currentMode==="light"){
//         currentMode="dark";
//         body.style.backgroundColor="black";
//     }
//     else{
//         currentMode="light";
//         body.style.backgroundColor="white";
//     }

// });