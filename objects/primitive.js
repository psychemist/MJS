//Task 1: Write a script that prompts user to enter two numbers and then shows their sum:
// function summation() {
//     let num1 = +prompt("Enter first number")
//     let num2 = +prompt("Enter second number")
//     alert(num1 + num2);
// }

// summation();


//Task 2: Create a function which prompts for a number until a valid numeric value is entered
//The resulting value must be returned as a number
// function readNumber() {
//     let input = +prompt("Enter a valid number")

//     while (isNaN(input) === true) {
//         let input = +prompt("Enter a valid number")

//         if (isNaN(input) === false) {
//             break
//         } 
//     } return parseInt(input)

//     if (input) {
//         alert(`number: ${input}`)
//     } else if (!input) {
//         return null
//     }
// } 

// readNumber();

//SOLUTION:
// function readNumber() {
//     let num;

//     do {
//         num = prompt("Enter a number?", 0);
//     } while (!isFinite(num));

//     if (num === null || num === '') return null;

//     return +num;
// }

// alert(`Read: ${readNumber()}`);


//Task 3: Write a function to generate a random floating-point number from min to max, not including max
// function random(min, max) {
//     // return (Math.random() * max) - min //WRONG
//     return (Math.random() * (max - min)) + min
// }

// alert(random(1, 5));


//Task 4: Create a function that generates a random integer from min to max including both min and max as possible values. Inject equal probability
function random(min, max) {
    // return Math.ceil(Math.random() * (max - min)) + min
    return Math.floor((Math.random() * (max + 1 - min)) + min)
}

alert(random(1, 5));
