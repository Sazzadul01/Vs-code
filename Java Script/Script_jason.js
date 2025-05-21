// let myObj = {
//     key:value1,   // value te ja khusi rakha jay 
//     key: value2
// } 

// 
let car = {
    brand: "toyota",
    model: "corolla",
    year: 2025,
    feature: ["ac", "blutooth","hybrid"], // array
    start: function(){
        console.log("car start");
    }
};
console.log(car);
console.log(car.brand);
console.log(car.feature[1]);
car.start();
//jeson 
let carjeson = {
    
        "brand": "toyota",
        "model": "corolla",
        "year": 2025,
        "feature": ["ac", "blutooth","hybrid"]
}
let car2 = {
    brand: "toyota",
    model: "corolla",
    year: 2025,
    feature: ["ac", "blutooth","hybrid"]
}
let carjason = JSON.stringify(car2);
console.log(carjason);

//Array
let fruits = ["apple","orrange","Banana","Mango"];
console.log(fruits[3]);
console.log(fruits.length);

fruits.push("watermalon");
console.log(fruits)
fruits.pop();
fruits.unshift("fast add"); //faste add 
console.log(fruits);
fruits.forEach(fruit => console.log(fruit)); // line by line dekhabe
let fruitsUpper = fruits.map(fruit => fruit.toUpperCase()); // sob upper case hobe
console.log(fruitsUpper);

let fruitSorting = fruits.sort(); // a theke sajabe
console.log(fruitSorting);
console.log(fruits.reverse());

//String
let string = 'assalamualikum'
let templateliteral = `vai ${string}`;
console.log(templateliteral);
console.log(string.length);
console.log(string[3]);

let stringTrimmed = string.trim(); //space chara string trim
console.log(stringTrimmed);
let name = "     sazzad     "
console.log(name.trimStart());  // faster space kate
console.log(name.trimEnd());    // last space kate
let name2 = "Sazzadul Islam"
let nameReplace = name2.replace("Islam","Rahman"); //name replace kora jay 
console.log(nameReplace); 

//Data and Time
let now = new Date();
console.log(now);
console.log(now.getFullYear()); 
console.log(now.getMonth()); 
console.log(now.getHours());

// Math object
console.log(Math.PI);
let price = 455.7
let priceRound = Math.round(price); //random dhorbe 
console.log(priceRound);

let priceRoundFloor = Math.floor(price); //nicher ta nibe
console.log(priceRoundFloor);

let priceRoundCeil = Math.ceil(price);
console.log(priceRoundCeil);

let randomNumber = Math.random()*100;
console.log(randomNumber);

//Window
console.log(window.innerHeight); // console er sada part er height dekhabe
console.log(window.location);
console.log(window.document.title);

// alart
// window.alert("alert");

// window.confirm("are you sure ?");
// window.prompt("enter your name");
//window.open("ostad.app");

// setInterval(
//     () => document.write("assalamualikum <br>"),2000
// );

// setTimeout(() => document.write("Time Out"),4000);

//navigator
console.log(navigator.appName);
console.log(navigator.appVersion);
console.log(navigator.userAgent);
console.log(navigator.platform);
console.log(navigator.hardwareConcurrency);




