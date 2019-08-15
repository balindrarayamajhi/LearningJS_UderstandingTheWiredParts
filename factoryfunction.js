function makeGreeting(language){
    return function(firstname,lastname){
        if(language=='en'){
            console.log('Hello '+firstname+' '+lastname);
        }
        if(language=='es'){
            console.log('Hola '+firstname+' '+lastname);
        }
    }
}

var greetEnlish=makeGreeting('en');
var greetSpanish=makeGreeting('es');

greetEnlish('Balindra','Rayamajhi');
greetSpanish('Balindra','Rayamajhi');