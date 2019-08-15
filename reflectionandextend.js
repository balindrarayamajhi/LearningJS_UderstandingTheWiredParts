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

john.__proto__=person;

for(var prop in john){
    console.log(prop+ ' : '+john[prop]);
}

var jason={
    firstname:'Jason'
}

jason.__proto__=john;

for(var prop in jason){
    console.log(prop +' : '+jason[prop]);
}

for(var prop in jason){
    if(jason.hasOwnProperty(prop)){
        console.log(prop +' : '+jason[prop]);
    }
}

