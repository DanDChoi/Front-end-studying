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