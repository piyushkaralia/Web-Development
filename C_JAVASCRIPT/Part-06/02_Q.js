//1->“Hello JavaScript”. Append “from Apna College students” to this text using JS.
let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + "from Apna College students";
console.dir(h2.innerText);


//2-> Create 3 divs with common class name -“box”. Access them & add some unique text to each of them.
let div=document.querySelectorAll(".box");
console.dir(div);
//1st way.
// div[0].innerText="new unique value 1";
// div[1].innerText="new unique value 2";
// div[2].innerText="new unique value 3";
//or
//2nd way.
let i=1
for(let d of div){
    d.innerText=`new unique value ${i}`;
    i++;
}




