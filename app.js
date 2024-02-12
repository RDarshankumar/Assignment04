// Question No 1



// var pass = "abc123";
// var userPass1 = prompt("Enter your password! \n default pass:", "abc123");

// if (userPass1 == "") {
//     alert("⚠ Please enter your password.")

// } else if (userPass1 === pass) {

//     var userPass2 = prompt("Enter your password again!");
//     if (userPass2 === pass) {
//         alert(" your password has been matched.")
//     }
//     else {
//         alert("Your password is wrong")
//     }
// }
// else {
//     alert("Wrong password")
// }


// Question No 2


// var greeting;
// var hours = 13;

// if(hours < 18){
//     greeting = "Good Day";

// }
// else{
//     greeting = "Good Evening";

// }
// alert(greeting)


// Q3


// // a
// var arrStudents = [];


// // b

// var store = ["Medical","Doctor","It"]

// // c
// var string= ["apple", "orange", "mango",];


// // d
// var number = [1, 2, 3, 4];


// // e
// var boolean = [true, false];


// // f
// var mix = ["apple", "orange", 1, 2, true, false];

// // g
// var education = ["SSC", "HSC", "BSC", "BS", "B.COM", "MS", "M.Phil.", "PhD"];


// Question No 4


// var colors = ["red", "green", "blue", "yellow"];
// document.write(colors)


// // a

// var colors = ["red", "green", "blue", "yellow"];
// var userColor = prompt("Enter Your favourtie color to include our colors");
// colors.unshift(userColor);

// document.write(colors);


//b.

// var colors = ["red", "green", "blue", "yellow"];
// var userColor = prompt("Enter your color to add the End of the array");
// colors.push(userColor);

// document.write(colors);
// 

// // c.

// var colors = ["red", "green", "blue", "yellow"];
// colors.unshift("pink", "aqua");

// document.write(colors);


// // d.

// var colors = ["red", "green", "blue", "yellow"];
// colors.shift();

// document.write(colors);


// // e.

// var colors = ["red", "green", "blue", "yellow"];
// colors.pop();

// document.write(colors);


// // f.

// var colors = ["red", "green", "blue", "yellow"];

// var colorIndex = +prompt("Enter index number to add the color.")
// var colorName = prompt("Enter color name.")

// colors.splice(colorIndex, 0, colorName)

// document.write(colors);


// // g.

// var colors = ["red", "green", "blue", "yellow"];

// var colorIndex = +prompt("Enter index number to remove the color.\n [red, green, blue, yellow]")
// var delNum = prompt("How many colors you want to remove.\n [red, green, blue, yellow]")

// colors.splice(colorIndex, delNum)

// document.write(colors);

// Question NO 5


// var score1 = prompt("Entre score 1.");
// var score2 = prompt("Entre score 2.");
// var score3 = prompt("Entre score 3.");

// var studentScore = [];

// var scoredPushed = studentScore.push(score1, score2, score3);
// var scoreSorted = studentScore.sort();

// alert(studentScore);

// Question No 6


// var Products = [" Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write(Products);



// Question No 7

// var userTable = prompt("Enter Table Number.");
// var tableLength = prompt("Enter Table Length.", 10);

// for(var i= 1; i <= tableLength; i++)


// {

//     document.write(userTable + " x " + i + " = " + (userTable*i) + "<br>")

// }


// Question No 8


// a

// for(var i = 1; i <= 15; i++){
//     document.write(i + ", ")
// }


// // b

// for (var i = 10; i > 0; i--) {
//     document.write(i + ", ")
// }


// // c

// for(var i = 0; i <= 20; i++){

//     if(i % 2 == 0){
//         document.write(i + ", ")
//     }
// }


// // d

// for(var i = 0; i < 20; i++){

//     if(i % 2 != 0){
//        document.write(i + ", ")

//     }
// }


// // e

// for(var i = 1; i <= 20; i++){

//     if(i % 2 == 0){
//         document.write(i + "k, ")

//     }
// }


// Q9


// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userPrompt = prompt("Search in Array.").toLowerCase();

// var flag = false;

// for (var i = 0; i < arr.length; i++) {

//     if (userPrompt == arr[i]) {
//         flag = true

//     }
// }

// if (flag) {
//     alert("Right " + userPrompt + " Found.")

// } else {
//     alert("Wrong " + userPrompt + " not Found.")
// }


// Question No 10


// var userText = prompt("Enter a word in capital latters")
// var lowerText = userText.toLowerCase()

// alert(userText + " = " + lowerText)


// // Question NO 11


// var userText = prompt("Enter a word in small letters.");
// var upperText = userText.toUpperCase();

// alert(userText + " = " + upperText);


// Question NO 12


// var usreNum = prompt("Enter a number.");

// var userType;

// if (usreNum % 1 == 0) {
//     userType = Number(usreNum);

// }
// else {
//     userType = usreNum
// }

// alert("The Type Of " + usreNum+ " is: " + typeof userType);