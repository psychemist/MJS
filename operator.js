// if (age >= 14 && age <= 90);

// if (age < 14 || age > 90);
// if (!(age >= 14 && age <= 90));


let login = prompt( "What is your rank?", 'Enter rank' );

if (login == "Admin") {
    let pass = prompt( "Enter password" );

        if (pass == "TheMaster") {
            alert( "Welcome!" );
        } else if (pass == "" || pass == null) {
            alert( "Canceled" );
        } else {
            alert( "Wrong password" );
        }

} else if ( login == "" || login == null ) {
    alert( "Canceled" );
} else {
    alert( "I don't know you" );
} 