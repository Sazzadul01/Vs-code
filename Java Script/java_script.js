/*
document.write("this is extranal link <br>");

console.log("private");  // console gele dekha jabe

var name = 'sazzad';
let age = 24;
const pi = 3.14;
document.write(name);
document.write(age);

// var holo funtion a jeta true hobe oi ta nibe
// let blook onu jay kaj korbe

// premitive type
let age2 = 23;
let name2 = "sazzad";
let isdult = true;
let empty = null;
let notAssigned;

// reference type
let object = {name3:"sazzad", age3:30, address:"dhaka", "bangladesh"};
let array = {"red","green","blue"};

document.write(name2);
*/

let age = 20;
if(age>=18){
    document.write("adult");
}

// value janle switch case use korte pari

for (let count = 0; count <10; count++){
    document.write('<br> for loop ',+count);
}
// while
let count = 2;
while(count<=10){
    document.write("<br> While lopp ",+count);
    count++
}
// do while loop
let countDW = 3;
do{
document.write("<br> Do While Loop ",+countDW+"<br>");
countDW = countDW+2;
}while(countDW <= 20);

// for in loop
let student = {name5: "sazzadul",age:23,address: "Rajsashi"};
for(let key in student){
    //document.write(key+"<br>");
    document.write(key+":"+student[key]+"<br>")
}