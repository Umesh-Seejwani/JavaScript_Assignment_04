// Question no o1:
// var password = "javascript";
// var pass1 = prompt("Enter Password One:");
// var pass2 = prompt("Enter Password Two:");

// if (pass1 === "" && pass2 === "" ){
//     alert("Please Enter Password!");
// }
// else if (pass1 === "javascript" && pass2 === "javascript"){
//     alert("Correct!");
// }
// else {
//     alert("Incorrect Password!");
// }


// Question no o2:
// var greeting;  
// var hour = 13;
//   if (hour < 18) { 
//      console.log("Good day");  
//   }
//      else {
//         console.log("Good Evening");
//     } 
 

// Question no o5:
// var  stuNames = [67,78,96,50,58,63,87,77];
// stuNames.sort((a, b) => a - b);
// console.log(stuNames); 
 


// Question no o7:
// var table = +prompt("Enter Number:");

// for(var i=1; i<=10; i++ ){
//     console.log(table+ " X "+ i + " = " + table*i);
// }

// Question no o8:
// var num = 20;
// for(i=1; i<=num; i++){
//     console.log(i);
// }

// reverse counting:
// for(i=20; i>=1; --i){
//     console.log(i);
// }

//Even numbers:
//  for(i=1; i<=num; i++){
//     if (i % 2 === 0){
//         console.log("Even Numbers:", i);
//     //  console.log(i);
//  }

// }

//ODD Numbers:
// for(i=1; i<=num; i++){
//          if (i % 2 !== 0){
//              console.log("Even Numbers:", i);
//          //  console.log(i);
//       }
    
//      }

// for(i=1; i<=num; i++){
//          if (i % 2 === 0){
//              console.log(i+"K");
//          //  console.log(i);
//       }
    
//      }
//  var user = prompt("Enter Items");
//  var a = ["cake, apple pie, cookie, chips, patties"] ;
// //  console.log(a)
// if (user==="cake"|| user==="apple pie"|| user==="cookie"|| user==="chips"|| user==="patties") {
//     console.log("Yes "+ user + " is found");
// }
// else{
//     console.log("Not Item Found");
// }



// Question no 11:
// var user = prompt("Enter A String:").toUpperCase();
// console.log(user);


// Question no 10:
// var string = prompt("Enter A String");

// var first = string.charAt(0);
// console.log(first.toUpperCase());
// var second = string.slice(1);
// console.log(second);
// var third = first.toUpperCase() + second;
// console.log(third)

// const captalized = function (sentence){
//     let str = sentence.split(" ");
//     console.log(str)
// } 

// console.log(captalized("my name is umesh seejwani"));

// var string = "472";
// console.log(parseInt(string));


// Question no 04:
// var a = prompt("Enter Points Where You Want to Add")
// var user = prompt("Enter Color Name:");

// var color = ["red","green","blue"];
// if(a === "start"){
// color.unshift(user);
// console.log(color);
// }
// else if(a === "end"){
// color.push(user);
// console.log(color);
// }
// else{
//     console.log(color);
// }
// console.log(color);


// Add color
//  var color = ["Brown","White","red","green","blue"];
//  console.log(color);


// Delete
// var color1 = ["Brown","White","red","green","blue"];
// color1.shift("Brown");
// console.log(color1);


// Delete
// var color2 = ["Brown","White","red","green","blue"];
// color2.pop("blue");
// console.log(color2);