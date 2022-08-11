//Symbol creation syntax:
let id = Symbol();

let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 === id2); //false


//Storing symbols as object properties
let prop1 = Symbol();

let user = {
    name: "Jachi",
    [prop1]: 1
}

let prop2 = Symbol();
user[prop2] = -1;


//Reading and creating global symbols. This returns symbol name with key
let role1 = Symbol.for("admin");
let role2 = Symbol.for("admin");

alert(role1 === role2); //true


//Returning a symbol key with name
// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
alert(Symbol.keyFor(sym)); // name
alert(Symbol.keyFor(sym2)); // id


//keyFor only works for global symbols
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert(Symbol.keyFor(globalSymbol)); // name, global symbol
alert(Symbol.keyFor(localSymbol)); // undefined, not global

//Symbol description property works for both types of symbols
alert(globalSymbol.description); //name
alert(localSymbol.description); // name