
//function statement
function greet(name){
    console.log('Hello '+name);
}

greet('Balindra');

//using function expression
var greetFunction=function(name){
    console.log('Hello '+name);
}

greetFunction('Rejina');

var greeting =function(name){
    console.log('Hello '+name);
    return 'hello '+name;
}('Balindra');

console.log(greeting);

(function(name){
    console.log('Hello '+name);
    return 'hello '+name;
}('Balindra'));