// //Arrays ->mutable unlike strings.

// let marks=[89,92,88,78,81];
// console.log(marks);
// marks[0]=91;//changes are allowed.
// console.log(marks);

// let foods=["butter chicken","shawarma roll","egg roll"];
// console.log(foods);

// //loops in array

// //for loop
// for(let i=0;i<foods.length;i++){
//     console.log(foods[i]);
    
// }

// //for in loop
// for(let mark of marks){
//     console.log(mark);
// }

// for(let food of foods){
//     console.log(food);
//     console.log(food.toUpperCase());
    
// }

//Array Methods

// //Push()->add to end.
// let foodItems=["potato","apple","lichi","tomato"];
// console.log(foodItems);
// foodItems.push("chips","burger","tomato");
// console.log(foodItems);

// //Pop()->delete from end & return.
// let foodItems=["potato","apple","lichi","tomato"];
// foodItems.pop();
// console.log(foodItems);

// //toString->converts array to string.
// let foodItems=["potato","apple","lichi","tomato"];
// console.log(foodItems);
// console.log(foodItems.toString());

// let marks=[97,86,81,68];
// console.log(marks);
// console.log(marks.toString());

// //Concat
// let marvelHeroes=["thor","spider-Man","Ironman"];
// let dcHeroes=["superman","batman"];
// let indianHeroes=["shaktiman","krish"];
// let heroes=marvelHeroes.concat(dcHeroes,indianHeroes);
// console.log(heroes);

// //unshift()->add to start.
// let foodItems=["potato","apple","lichi","tomato"];
// console.log(foodItems);
// foodItems.unshift("pizza");
// console.log(foodItems);


// //shift->delete from start and returns the array.
// let foodItems=["potato","apple","lichi","tomato"];
// console.log(foodItems.shift());
// console.log(foodItems);


// //Slice(startidx,endidx)->returns a piece of the array
// //startidx->inclusive,endidx->non-inclusive
// let marvelHeroes=["thor","spider-Man","Ironman","Dr.Strange"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1))
// console.log(marvelHeroes.slice(1,3))

// //slplice(startidx,delCount,newElement)->change original array
// //remover->how much element we have to delete
// let arr=[1,2,3,4,5,6,7];
// console.log(arr);
// arr.splice(2,2,101,102);
// console.log(arr);
// //it can be used for adding element,delete element also , example
// //Adding Element
// arr.splice(4,0,103);
// console.log(arr);

// //Delete Element
// arr.splice(2,1);
// console.log(arr);

// //Replace Element
// arr.splice(3,1,105)
// console.log(arr);
