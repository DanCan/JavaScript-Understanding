(function(global, $){

    var Greetr = function (firstName, lastName, language){
        // This is not called until the function is executed.
        return new Greetr.init(firstName, lastName, language);
    };

    Greetr.prototype = {

    };

    // Separate function constructor.
    Greetr.init = function(firstName, lastName, language){
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, jQuery));