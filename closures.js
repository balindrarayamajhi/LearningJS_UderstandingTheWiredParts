function greet(whattosay){
    return function(name){
        console.log(whattosay+' '+name+'!');
    }
}



var sayHi=greet('Hi');
testingBreak();
sayHi('Balindra');

function testingBreak(){
    console.log('running testingBreak()');
}