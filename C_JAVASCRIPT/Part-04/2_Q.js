// //Q1
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let val of marks) {
//   sum += val;
// }
// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);

// //Q2
// let prices=[250,645,300,900,50];
// // for(let i=0;i<prices.length;i++){
// //     prices[i]=0.90*prices[i];
// // } 
// //or
// let i=0;
// for(let val of prices){
//     console.log(`value at index ${i}=${val}`);
//     prices[i]=0.90*prices[i];
//     console.log(`value after offer=${prices[i]}`);
//     i++;
// }

//Q3
let arr=["Bllomberg","Microsoft","Uber","Google","IBM","Netflix"];
arr.shift();
console.log(arr);
arr.splice(1,1,"Ola");
console.log(arr);
arr.push("Amazon");
console.log(arr);