//Arthimetic Operations
/*
let a=4;
let b=5;
console.log("a =",a,"b =",b);
console.log("a + b =",a+b);
console.log("a - b =",a-b);
console.log("a * b =",a*b);
console.log("a / b =",a/b);
console.log("a % b =",a%b);
console.log("a ** b =",a**b);//4^5;
a**=4;//a=a**4;
console.log("a =",a,);
*/
//comparing
let a=5;
let b="5";//string->number (when only no present in string's style)
console.log("a==b",a==b);

//strict comparing 
let c=5;
let d="5";
console.log("a===b",a===b); //dont comapre bw string and number.
console.log("a!==b",a!==b);

//Logical Operators
let e=9;
let f=10;

let cond1=e>f;
let cond2=e==9;
console.log("cond1 && cond2",cond1 && cond2);
console.log("cond1 || cond2",cond1 || cond2);

//conditional statements
let age=20;
//1a
if(age>=18){
    console.log("You are eligible for voting");
}
else{
    console.log("You are not eligible for voting");
}
//1b
if(age<18){
    console.log("junior");
}
else if(age>60){
    console.log("senior");
}
else{
    console.log("middle aged");
}
 
//2
let mode="dark";
let color;
if(mode==="dark"){
    color="black";
}
else{
    color="white";
}
console.log("Color:", color);
//3
let num=4;
if(num%2==0){
    console.log(num,"is even");
}
else{
    console.log(num,"is odd");
}

//ternary operator
let age1=25;
let result= age>=18 ?"adult":"not adult";//prefered 
console.log(result);
//or
age>=18 ? console.log("adult") : conslole.log("not adult") ;//over this 