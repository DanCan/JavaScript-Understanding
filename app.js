var firstname = 'John';

(function(name) {
    var greeting = 'Inside IIFFE: Hello';
    console.log(greeting + ' ' + name);
}
//Classic example; Wrapped ALL in the paren
(firstname));

firstname = 'Dan';

(function(name) {
    var greeting = 'Inside IIFFE: Goodbye';
    console.log(greeting + ' ' + name);
})
//Envoked outside paren
(firstname);

//WHICH EVER Makes the Most Sense. Both work but be consistent.