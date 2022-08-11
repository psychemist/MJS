// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
// }

// Rewrite the above using the tenary operator (?) and the OR logical operator (||)

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Did parents allow you?');
// }

// function checkAge(age) {
//     return (age > 18) || confirm('Did parents allow you?');
// }

// checkAge(12);


// function isLesser(a, b) {
//     if (a < b) {
//         return +(a);
//     }
//     else if (b < a) {
//         return +(b);
//     }
// }


// function isLesser (a, b) {
//     return (a < b) ? a : b;
// }

// let result = isLesser(32, -89);
// alert(result);


// function pow(x, n) {
//     if (n > 1) {
//         return (x ** n);
//     }
//     else return;
// }

// let x = prompt("Choose x!", '');
// let n = prompt("Choose n!", '');

// let result = pow(x, n);
// alert(result);


function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}
  
ask(
    "Do you agree?",
    () => { alert("You agreed."); },
    () => { alert("You canceled the execution."); }
);