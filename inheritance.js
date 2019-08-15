var person ={
    firstname:'Default',
    lastname:'Default',
    getFullname:function(){
        return this.firstname+' '+this.lastname;
    }
}

var john={
    firstname:'John',
    lastname:'Doe'
}

//don't do this ever this is for demo purpose only.

john.__proto__=person;

console.log(john.getFullname());

var jason={
    firstname:'Jason'
}

jason.__proto__=john;

console.log(jason.getFullname());