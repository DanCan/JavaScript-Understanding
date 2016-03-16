function waitthreeSeconds(){
    var ms = 3000 + new Date().getTime();
    while(new Date() < ms){}
    console.log('finished Function');
}

function clickHandler(){
    console.log('click event!');
}

document.addEventListener('click', clickHandler);

waitthreeSeconds();
console.log('finished execution');