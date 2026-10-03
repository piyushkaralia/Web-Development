// //functions
// //function parameters are local variables of funciton ->block scope.
// //1
// function myFunction() {
//   console.log("my name is piyush");
// }
// myFunction();

// //2
// function sum(x, y) {
//   return x + y;
// }
// let ans = sum(2, 3);
// console.log(ans);


// //Arrow Functions->part of modern javascript
// //1 ->without any parameter
// const print = () => console.log("Hello World");
// print();

// //2 ->Sum Function
// const arrowSum = (a, b) => {
//   console.log(a + b);
// };
// arrowSum(2, 4);

// //3 ->Multiplication Function
// const arrowMul = (a, b) => {
//   console.log(a * b);
// };
// arrowMul(3, 4);




// //forEach loop in arrays->we can call it a method.
// //can only be used for arrays ,not for strings.

// //A HIGHER-ORDER FUNCTION  is a function that either takes one or more functions as arguments, returns a function as its result, or both.

// //1
// let arr=[1,2,3,4,5];
// arr.forEach(function print(val){
//     console.log(val);
// });

// //2
// let arr2=["jammu","kashmir","srinagar"];
// arr2.forEach((val)=>{
//     console.log(val.toUpperCase());
// });
// //or
// // let arr2=["jammu","kashmir","srinagar"];
// // const uppercase= (val)=>{
// //     console.log(val.toUpperCase());
// // }
// // arr2.forEach(uppercase);



// //3
// //there are three parameters which cann be used in forEach loop
// //example
// let arr3=["north","south","east","west"];
// arr3.forEach((val,i,arr3)=>{
//     console.log(val,i,arr3)
// }); 





// //Map->works like forEach ,the diff is it can creates a new array.
// let nums=[22,33,44,55,66,77];
// nums.map((val)=>{
//     console.log(val);
// });
// //we can create a new array by map.
// let newArr=nums.map((val)=>{
//     return val;
// });
// console.log(newArr);




// //Filter->Creates a new array of elements that give true for a condition/filter.
// //example->Filter even numbers.
// let nums=[22,33,44,55,66,77];
// let newArr=nums.filter((val)=>{
//     return val%2==0;
// });
// console.log(newArr); 



// Reduce->Performs some operations & reduces the array to a single value.It returns that single value.

//1->Sum of all elements in array.
let arr=[1,2,3,4,5,6];
let output=arr.reduce((result,current)=>{
    return result+current;
});
console.log(output);

//2->For largest element in an array.
let arr2=[1,2,3,4,5,6];
let output2=arr.reduce((previous,current)=>{
    return previous>current?previous:current;
});
console.log(output2);
