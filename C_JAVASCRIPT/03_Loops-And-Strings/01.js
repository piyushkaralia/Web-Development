//Loops

//For Loop
/*
for(let i=0;i<5;i++){
    console.log("Piyush Karalia");
}
//sum of 1 to 5
let sum=0;
for(let i=1;i<=5;i++){
    sum=sum+i;
}
console.log("Sum of first 5. no is",sum);
//if we use var instead of let , that that variable will work even outside the loop
*/


//while loop
/*
let i=1;
while(i<=5){
    console.log("i=",i);
    i++;
}
*/


//for-of loop
/*
let str="Javascript";
let size =0;
for(let val of str){
    console.log("i=",val);
    size++
}
console.log("size of str->",size);
*/


//for-in loop
/*
let student={
    name:"pyush",
    age:20,
    cgpa:7.14,
    isPass:true,
};

for(let key in student){
    console.log("key=",key,"value=",student[key]);
}
*/


//strings
/*
let str1="piyush";
let str2='piyush'; 
console.log(str[2]);

//Tempelate Literals
let specialString= `This Is A Special String`;
console.log(specialString);
//advantage of temperal literals
let obj={
    item:"pen",
    price:10,
}
console.log(`the cost of ${obj.item} is ${obj.price} rupees`);
*/



//String Methods In JS

//str.toUpperCase()->convert lowercase to uppercase
let str3="pyush karalia"//originsl string is im mutable.
let str4=str3.toUpperCase();//these function cant change the original string , to make change we have to do str=str.toUpperCase() or make a new string var and save in it
console.log(str3);
console.log(str4);



//str.tri()->removes white spaces from start and end.
let str5="           pyush karalia              ";
str5=str5.trim();
console.log(str5);


//str.slice(start,end)->returns part of string
let str6="Myself Pyush";
console.log(str6.slice(2,5)); // 2 is inclusive here and 5 is exclusive


//str1.concat(str2)->joins str2 with str1
let str7="pyush";
let str8="karalia";
str7=str7.concat(str8);
//or -> str7=str7+str8;
console.log(str7);


//str.replace(searchVal,newvalue)-> replaces the character
let str9="hellololo";
console.log(str9.replace("lo","p"));
console.log(str9.replaceAll("lo","p"));



//str.charAt(index)->returns the valur at that index
let str0="vastegonna";
console.log(str0.charAt(3));
