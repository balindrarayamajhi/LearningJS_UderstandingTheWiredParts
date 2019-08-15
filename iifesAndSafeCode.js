var greeting ='Hola';
console.log('greeting : '+greeting);

function greet(){
    
    var greeting ='hello'
    console.log('invoikng greet () function-----');
}

greet();
console.log('greeting : '+greeting);

(function(name){
    var greeting='HOLA'
    console.log('invoking iife---------------');

}())

console.log('greeting : '+greeting);
console.log('------------');
            

var obj={
    name:'Balindra'
}

console.log(obj);

(function(object){
    object.name='Rejina';
    console.log(object.name);
}(obj));
console.log(obj);

