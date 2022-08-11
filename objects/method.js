// let user = {};

// function sayHi() {
//   alert("hello");
// }

// user.speak = sayHi;
// user.speak();


//Method Shorthand 1
// let user = {
//     sayHi: function() {
//         alert("Hello");
//     }
// };

// user.sayHi();


//Method Shorthand 2
// let user = {
//     sayHi() {
//         alert("Hi");
//     }
// };

// user.sayHi();


//"this" keyword
// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     // "this" is the "current object"
//     alert(this.name);
//   }

// };

// user.sayHi();

//Create a calculator task
// let calculator = {
//   read(a, b) {
//     a = prompt("Enter first number");
//     b = prompt("Enter second number");
//     return(a, b);
//   },

//   sum(a, b) {
//     return(a + b);
//   },

//   mul(a, b) {
//     return(a * b);
//   }
// };


// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

//Solution
// let calculator = {
//   read() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   },
  
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },

// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


//Chain a stepladder task
let ladder = {
  step: 0,
  
  up() {
    this.step++;
    return this
  },

  down() {
    this.step--;
    return this
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};

ladder.up().up().down().showStep().down().showStep();