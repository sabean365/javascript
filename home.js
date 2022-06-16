//This is a function called showMessage which will replace the existing text on an HTML page
alert('This is an easy program...');


let welcome = 'Welcome, Välkommen, Bienvenu, Willkommen, Yōkoso, Bienvenidos, Huānyíng, Benvenuto, Svaagat He, Laskavo Prosymo, Hwan-Yeonghada!';
showMessage(welcome);

changePercentOff(30);

//Changing the style by overwriting the CSS
const header = document.getElementById('message');
header.style.color = "blue";
header.style.fontWeight = '700';  // any element with a hyphen needs to be replaced with camelCase

//JS button
const button = document.getElementById('see-review');

//listener for click event
button.addEventListener('click', function() {
    console.log('click');
});