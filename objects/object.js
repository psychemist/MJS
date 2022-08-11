// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user["name"] = 'Pete';
// delete user.name;

// alert( user.name );


// function isEmpty(obj) {
//   for (let key in obj) {
//     // if the loop has started, there is a property
//     return false;
//   }
//   return true;
// }

// let schedule = {};
// alert(isEmpty(schedule));

// schedule["8:30"] = "get up";
// alert(isEmpty(schedule));


// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }

// alert( sum );


let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  } 
}

multiplyNumeric(menu);

alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );
