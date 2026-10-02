// //1->count vowels throught function

// function vowels1(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] == "a" ||
//       str[i] == "e" ||
//       str[i] == "i" ||
//       str[i] == "o" ||
//       str[i] == "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// let str1 = "piyush karalia";
// let ans = vowels1(str1);
// console.log(ans);



// //2->count vowels throught arrowFunction
// const vowels2 = (str) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] == "a" ||
//       str[i] == "e" ||
//       str[i] == "i" ||
//       str[i] == "o" ||
//       str[i] == "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// };

// let str2 = "hello";
// let ans2 = vowels2(str2);
// console.log(ans2);




// //3->print square using forEach loop of an array.
// let arr=[1,2,3,4,5];
// arr.forEach((val)=>{
//   console.log(val*val);
// });




// //4
// let arr=[88,99,92,77,89];
// let newArr = arr.filter((val)=>{
//   return val>90;
// });
// console.log(newArr);


//5
let input=prompt("Enter n");
let arr=[];
for(let i=1;i<=input;i++){
    arr[i-1]=i;
}
console.log(arr);
let sum=arr.reduce((prev,curr)=>{
  return prev+curr;
})
console.log(sum);

let product=arr.reduce((prev,curr)=>{
  return prev*curr;
})
console.log(product);