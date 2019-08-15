var a=3;
var b;
b=3;
console.log("a = "+a);
console.log("b = "+b);

a=1;

console.log("a = "+a);
console.log("b = "+b);

var c={
    greeting:'hi'
}
var d=c;
console.log(c.greeting);
console.log(d.greeting);

d.greeting ='hello';
console.log(c.greeting);
console.log(d.greeting);

function changeGreeting(obj){
    obj.greeting='Hola';
}

changeGreeting(d);
console.log(c.greeting);
console.log(d.greeting);

var greet=function(){
    console.log("In function greet");
}
var greet1=greet;

console.log("Function greet : "+greet);
console.log("Function greet1 : "+greet);

greet=function(){
    console.log("greet is referencing another function");
}

console.log("Function greet : "+greet);
console.log("Function greet1 : "+greet);




