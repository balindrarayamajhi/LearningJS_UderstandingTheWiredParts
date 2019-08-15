//Object.create()--Pure Prototypal inheritance

var person ={
    firstname:'Deafault',
    lastname:'Default',
    greet:function(){
        console.log('Hello '+this.firstname +' !');
    }
}
//Object.create an object with prototype pointing whatever object 
//you passed 
var a=Object.create(person);
console.log(a);
console.log(a.__proto__);
console.log(a.prototype);

a.greet();

a.firstname='Balindra';
a.lastname='Rayamajhi';
a.greet();

a.greet=function(){
    console.log('Hello '+this.lastname +'!');
}
 a.greet();

a.test=function(){
    console.log(this.firstname+' '+this.lastname);
}

a.test();
// you can not use prototype property 
//instead use __proto__ property
a.__proto__.check=function(){
    console.log(this.lastname+ ' '+this.firstname);
}
 a.check();

//Object.create() a newer thing  , new browser i.e having newer JS
// engine implementing it however older browser or older 
//environment with older version of JS egnine may not implemt it .

//POLYFILL
// code that adds a feature which the engine may lack.

