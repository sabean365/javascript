//declare object
let person = {
    fname: 'Nikola',
    lname: 'Tesla',
    age: 166,
    partTime: false
};

//shows that person is object
console.log(typeof person);

//print only fname
console.log(person.fname);

//boolean
console.log(person.partTime);

//change it outside the object
person['age'] = 44;
console.log(person.age);

//symbols for hidden information
let mySymbol = Symbol();

let person2 = {
    fname: 'Nikola',
    lname: 'Tesla',
    age: 166,
    partTime: false,
    [mySymbol]: 'my secret', //will not be able to access without mySymbol
    showInfo: function() {
        console.log('in showInfo');
    },
    showName: function() {
        console.log(this.fname); //must use "this" to work with the current object
    }
};

person2.showInfo();

person2.showName();

//DOM ~ Document Object Model

