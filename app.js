
// This will be hoisted to the top and declared
function mapForEach(arr, fn){
    var newArr = [];
    for ( var i=0; i<arr.length; i++){
        newArr.push(
            fn(arr[i])
        );
    }
    return newArr;
}

var arr1 = [1,2,3];
console.log(arr1);

var arr2 = mapForEach(arr1, function(item){
    return item * 2;
});
console.log(arr2);


var arr3 = mapForEach(arr1, function(item){
    return item > 2;
});
console.log(arr3);

// This variable will be hoisted to the top as undefined.
// Then when this code is reached by the browser, only then will it be declared.
var checkPastLimit = function(limiter, item){
    return item > limiter;
}
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);


var boundPastLimit = function(limiter){
    // function is not being executed, simply creating the function object b/c it isn't being executed.
    return function(limiter, item){
        return item > limiter;
    }.bind(this, limiter);
};

// A modular way of reusing functions with bind.
// This overrides the previous assignment.
boundPastLimit = function(limiter) {
    return checkPastLimit.bind(this, limiter);   
}

var arr5 = mapForEach(arr1, boundPastLimit(1));
console.log(arr5);
