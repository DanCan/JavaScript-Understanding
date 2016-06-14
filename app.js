var g = G$('John', 'Doe');

//g.greet().setLanguage('es').greet(true).log();

$('#login').click(function(){
   var loginGrts = G$('John', 'Doe');

    $('#logindiv').hide();

    loginGrts.setLanguage($('#lang').val()).HTMLGreeting('#greeting', true).log();
});