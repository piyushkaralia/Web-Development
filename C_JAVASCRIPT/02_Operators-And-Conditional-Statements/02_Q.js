// prompt("hello");//takes input
/*
//Q1
let num=prompt("Enter a Number");
if(num%5===0){
    console.log(num,"is a multiple of 5");
}
else{
    console.log(num,"is not a multiple of 5");
}
*/
//Q2
let marks=prompt("Enter Ur Marks");
let grade;
if(marks>=90 && marks<=100){
    grade="A";
}
else if(marks>=70 && marks<90){
    grade="B";
}
else if(marks>=60 && marks<70){
    grade="C";
}
else if(marks>=50 && marks<60){
    grade="D";
}
else{
    grade="F";
}
console.log("ur grade is",grade);