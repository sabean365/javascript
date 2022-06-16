//Use triple = for equal to
if ( 5 === 5) {
    console.log('Yes');
}

//literals
if ( 5 > 19 ) {
    console.log('No');
}
else console.log('False');


//comparing variable to string
let state = 'FL';
let taxPercent = 0;

if (state === 'FL') {
    taxPercent = 7;
}
else if (state === 'NY') {
    taxPercent = 8.875;
}

else {
    taxPercent = 0;
}

console.log(taxPercent);

//comparing variables to numbers
let price = 20.99;

if (price > 15.99) {
    console.log('No discount');
}
if (price < 15.99) { //false
    console.log('Discount'); //will not print
}

//using === and ==
if (1 === '1') {
    console.log('true');
}
else {
    console.log('false');
}

if (1 == '1') {
    console.log('true'); // will evaluate as true due to js typescripting
}
else {
    console.log('false');
}

//ternary operator
//(condition) ? true-statement : false-statement
let msg = (price > 10) ? 'expensive' : 'cheap';
console.log(msg);