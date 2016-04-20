// Function Constructor
function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('Invoked');
}

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
};

// new
var john = new Person('John', 'Doe');
console.log(john);


Person.prototype.getFormalFullName = function() {
    return this.lastname + ' ' + this.firstname;
};

console.log(john.getFormalFullName());