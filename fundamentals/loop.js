// for (let n = 0; n <= 10; n++) {
//     if (n === 0 || n % 2 === 1) {
//         continue; }
//     alert (n);
// }


// let i = 0;
// while (i < 3) {
//     alert(`number ${i}!`);
//     i++;
// }


// while (true) {
//     let number = prompt("Write a number greater than 100", '0');

//     if (number > 100 || !num) break;
// }


// const n = parseInt(prompt( "Input a number", '' ));
// console.log( `The prime numbers between 2 and ${n} are:` );

// for ( let i = 2; i <= n; i++ ) {
//     let group = 0;

//     for ( let j = 2; j < i; j++ ) {
//         if ( i % j === 0 ) {
//             group = 1;
//             break;
//         }
//     }

//     if ( i > 1 && group === 0) {
//         console.log(i);
//     }
// }

const n = parseInt(prompt( "Input a number", '' ));

appleSauce: for ( let i = 2; i <= n; i++ ) {

                for ( let j = 2; j < i; j++ ) {
                    if ( i % j === 0 )
                        continue appleSauce;
                }
                alert(i);
}