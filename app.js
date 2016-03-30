// Call, Apply, and Bind

var person = {
    firstname: 'Dan',
    lastname: 'Can',
    getFullName: function(){

        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;

    }
}

var logName = function(lan1, lan2){
    console.log('Logged:', this.getFullName());
    console.log('Arguments:', lan1, lan2);
    console.log('--------');
}
git
//Bind
var logPersonName = logName.bind(person);
logPersonName('en');

//Call
logName.call(person, 'en', 'es');

//Apply
logName.apply(person, ['fr', 'de']);

//Function Borrow
var person2 = {
    firstname: 'Jon',
    lastname: 'Doe'
}
console.log(person.getFullName.apply((person2)));

//Function currying
function multiply(a,b){
    return a*b;
}

var multiplyByTwo = multiply.bind(this, 2);
console.log("Result:", multiplyByTwo(3));

