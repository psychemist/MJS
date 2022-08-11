let message = prompt( "What is the \'official\' name of JavaScript?" );
if (message === "ECMAScript") {
    alert( "Right!" );
} else { 
    alert( "You don\’t know? ECMAScript!" );
}


let number = prompt( "Type a secret number" );
if (number > 0) {
    alert("1");
} else if (number < 0) {
    alert("-1");
} else {
    alert("0");
}


let value = (a + b < 4) ? "Below" : "Over";


let result = (login == "Employee") ? "Hello" : 
    (login == "Director") ? "Greetings" :
    (login == "") ? "No login" :
    "";