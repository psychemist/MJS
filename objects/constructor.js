//Constructor Syntax:

// function User(name) {
//     this.name = name;

//     this.sayHi = function () {
//         alert(`HI ${this.name} !`);
//     }
// }

// let user = new User("Belema");
// user.sayHi();


//Task 2: Create a calculator function using an object constructor

// function Calculator() {
//     this.read = function () {
//         this.a = +prompt("First value?");
//         this.b = +prompt("Second value?");
//     };

//     this.sum = function () {
//         return this.a + this.b;
//     };

//     this.mul = function () {
//         return this.a * this.b;
//     }
// }

// let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());


//Task 3: Create an Accumulator constructor function

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += +prompt("Add a number, watch it grow.");
    };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();
accumulator.read();

alert(accumulator.value);