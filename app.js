// Gets a new object (the architecture allows us to not have to use the 'new' keyword here)
var g = G$('John', 'Doe');

// use our chainable methods
//g.greet().setLanguage('es').greet(true).log();

// Let's use our object on the click of the login button
$('#login').click(function(){

    // Create a new 'Greetr' object (let's pretend we know the name from the login)
    var loginGrts = G$('John', 'Doe');

    // Hide the login on the screen
    $('#logindiv').hide();

    // Fire off an HTML greeting, passing the '#greeting' as teh selector and the chosen language,
    // and log the welcome as well.
    loginGrts.setLanguage($('#lang').val()).HTMLGreeting('#greeting', true).log();
});