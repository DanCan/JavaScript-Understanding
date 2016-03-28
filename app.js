var firstname = 'John';

(function(name) {
    var greeting = 'Inside IIFFE: Hello';
    console.log(greeting + ' ' + name);
}
//Classic example; Wrapped ALL in the paren
(firstname));

firstname = 'Dan';

(function(global, name) {
    var greeting = 'Inside IIFFE: Goodbye';
    console.log("Global greeting:", global.greeting);
    console.log(greeting + ' ' + name);
})
//Envoked outside paren
(window, firstname);