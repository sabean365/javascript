//function
function seeMessage() {
    console.log('in a function');
}

//call
seeMessage();

//function expression
let fn = function declareFunction () { //give it a name for debugging -> cannot print out
    console.log('a function');
}
//call
fn();

//passing into calls
function showMessages(messageOne, messageTwo) {
    console.log(messageOne, messageTwo);
}
//call
showMessages("Hello", "Message"); //must pass two arguments -> will get "undefined" if do not

function getSecretCode(value) {
    let code = value * 42;
    return code; //must have return statement if value is being passed and manipulated
}
//call
console.log(getSecretCode(2));