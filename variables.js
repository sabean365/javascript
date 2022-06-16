
//using let kword
let total = 14999.99, //number
    product = 'Nebula', //string
    discounted = true; //boolean

//variable names start with underscore, $, and letter
let valid_variables = '_var $var or avar';

// Errors if you do not declare it.
var price = 25;

let cost = 20.99;

//shows type of variable
console.log(typeof cost);

//Constants can only be declared once -- must be initialized to a value
//cannot do const price;
const totals = 1000000.00;

//division
price = price/5;
console.log(price);

//modulus operator
var price = 25;
price = price % 12;
console.log(price);

//negatives
let amount = 20 - (-2);
console.log(amount);

console.log(--amount);

//Strings with \
let message = "Hello \"Universe\"!";
console.log(message);

let title = "Michael\'\s"
console.log(title);

let greeting = "How's it going?";

//concat
greeting = message + " " + greeting;
console.log(greeting);

//Upper case
console.log(greeting.toUpperCase());

//substring
console.log(greeting.substring(2));

//length
console.log(greeting.length);

//typeof
console.log(typeof greeting);

//casting
let count = 55;
count = count.toString();
console.log(typeof count);

//parsing
let pfloat = Number.parseFloat("123.12")
console.log(typeof pfloat);

//Will not work due to A at beginning
let ppfloat = Number.parseFloat("A123.12")
console.log(ppfloat);

//Will work if letter is at end of float
let pafloat = Number.parseFloat("123.12A")
console.log(pafloat);

//using null
pafloat = null;
console.log(pafloat);

//falsy: false, 0, ""(empty string), null, undefined, NaN
//truthy: Everything not falsy: true, any number not equal to 0, "0"

if ("0") {
    console.log('true');
}

if (0) {
    console.log('false'); //will not print because 0 is false
}

if (1.1 + 1.3 !== 2.4) { //considers that they are not equal
    console.log('true');
}
//must use toFixed and the syntax below to get a true
if (+(1.1 + 1.3).toFixed(2) === 2.4) {
    console.log('True');
}




