
function sum(){
    console.log(10+20);
}
sum();

// Argument passing value
function sum2(a,b){
    console.log(a+b);
}
sum2(100,45);

// print korle ta dekhay r return korle rekhe dey pore sue kora jay

function greet(name){
    console.log(`assalamualikum ${name}, wel come my home`);
}
greet("reza");

anonymousfun = function(x,y){
    return x*y;
}
console.log(anonymousfun(3,4));

//arrow function
const multipy = (c,d) => c*d;
console.log(multipy(11,3));

const myname = (name6) => console.log("assalamulikum "+name6);
myname("rafi");

//IIFE
(function autocall(){
    console.log("wel come my page");
})();

// return type IIFE
const appi = (function (){
    const api_key = "1232";
    return {api_key};
})();

console.log(appi);

function normal(){
    console.log("hi 1");
    console.log("hi 10");
    console.log("hi 100");
    console.log("hi 1000");
}
normal();

// genarator function
function* genaratorfun(){
       yield "first value";
       yield "2nd value";
       yield "3rd value";
       yield "4th value";
}
const gen = genaratorfun();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

//recursive
function fact (n){
    if(n == 0){
        return 1;
    }
    return n*(fact(n-1));
}
console.log(fact(7));

//fact with for loop
function fact2(n){
    result = 1;
    for(let i=1; i<=n; i++){
    result = result * i;
    }
    return result;
}
console.log(fact2(6));

