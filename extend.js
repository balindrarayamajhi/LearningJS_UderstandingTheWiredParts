var person ={
    firstname :'Deafult',
    lastname :'Default',
    getFullname :function(){
        return this.firstname+' '+lastname;
    }
}

var john={
    firstname:'John',
    lastname:'Doe'
}


console.log('Logging John Property');
for(var prop in john){
    console.log(prop+ ' : '+john[prop]);
}
console.log('--------------------');
var jason={
    firstname:'Jason'
}

console.log('Logging Jason Property');
for(var prop in jason){
    console.log(prop +' : '+jason[prop]);
}

console.log('--------------------');

function extend(obj1,obj2){
    for(var prop in obj2){
        if(obj1.hasOwnProperty(prop)) continue;
        obj1[prop]=obj2[prop];
}
}

extend(john,person);

console.log('Logging John Property')
for(var prop in john){
    console.log(prop+ ' : '+john[prop]);
}

console.log('--------------------');