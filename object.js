// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user["name"] = 'Pete';
// delete user.name;

// alert( user.name );


// function isEmpty(obj) {
//   if (key === undefined) {
//     return true;
//   }
// }


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

function multiplyNumeric(menu) {
  for(let key in menu) {
    menu[key] *= 2;
    return;
  }
}

for (let key in menu){
  console.log(menu[key]);
}
