const a = 5;
const b = 2;
let myName = "Dan";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("Hello " + myName);

myName = "Daehyun"

console.log("Your new name is " + myName);


const amIFat = true;
console.log(amIFat);



const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(daysOfWeek);

//Add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek);

const player = {
    name: "DH",
    points: 10,
    fat: true,
};
console.log(player);
player.points = player.points + 15;
console.log(player);

function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + "and I am " + age +" years old");
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);


function plus(a, b){
    console.log(a + b)
}
function divide(a, b){
    console.log(a / b);
}
plus(1, 3)
plus(12, 3)
divide(50, 10)

const player = {
    name: "Otani",
    sayHello: function (otherPesronsName) {
        console.log("Hello!" + otherPesronsName + " nice to meet you");
    },
};

console.log(player.name);
player.sayHello("tlynn");


const calculator = {
    add: function (a , b) {
    console.log(a + b);
    },
    minus: function (a , b) {
    console.log(a - b);
    },
    divide: function (a , b) {
    console.log(a / b);
    },
    powerOf: function (a , b) {
    console.log(a ** b);
    },
};

calculator.add(2 , 2);
calculator.minus(2 , 2);
calculator.divide(2 , 2);
calculator.powerOf(2 , 2);

const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        returne a - b;
    },
    times: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    power: function (a, b) {
        return a ** b;
    },
};

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const dividResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(dividResult, minusResult);


const age = prompt("how old are you?");

console.log(age);


const age = parseInt(prompt("how old are you?"));

if(isNaN(age)){
    console.log("Please write a number");
} else if(age < 18) {
    console.log("You are too young");
} else {
    console.log("You can drink");
}


const age = parseInt(prompt("how old are you?"));

if(isNaN(age) || age < 0){
    console.log("Please write a real positive number");
} else if(age < 18) {
    console.log("You are too young");
} else if(age >= 18 && age <= 50) {
    console.log("You can drnik");
} else if(age > 50 && age <= 80) {
    console.log("You better stop drinking");
} else if(age === 100) {
    console.log("wow you are wise");
} else if(age > 80) {
    console.log("You can do whatever you want");
}


const title = document.getElementById("title");

title.innerText = "Got you"



const title = document.querySelector(".hello h1")

console.log(title);








const h1 = document.querySelector(".hello h1");

function handleTitleClick(){
    h1.style.color = "blue";
};

function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
};

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";  
};

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("Copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI")
}

function HandleWindowOnline(){
    alert("all good")
}


h1.addEventListener("click", handleTitleClick);  // Same as-> title.onclick = handleTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter); // Same as-> title.onmouseenter = handleMouseEnter;
h1.addEventListener("mouseleave", handleMouseLeave); // Same as-> title.onmouseleave = handleMouseLeave;

//EventLisener is better because you can use '.removeEventListener' to adjust codes.

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", HandleWindowOnline);