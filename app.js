var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
};

var john = {
    firstname: 'John',
    lastname: 'Doe'
};

//Do NOT do this EVER! For Demo purposes only!!!
john.__proto__ = person;

console.log(john.getFullName());

for (var prop in john){
    if(john.hasOwnProperty(prop))
        console.log(prop + ': ' + john[prop]);
}

var jane = {
    address: '111 Main St.',
    getFormalFullName: function(){
        return this.lastname + ', ' + this.firstname;
    }
};

var jim = {
    getFirstName: function(){
        return firstname;
    }
};

_.extend(john, jane, jim );

console.log(john);