var person={
    firstname:'Balindra',
    lastname:'Rayamajhi',
    getFullname :function(){
        var fullname=this.firstname+' '+this.lastname;
        return fullname;

    }
}

var anotherPerson={
    firstname:'John',
    lastname:'Deo'
}

console.log(person.getFullname.call(anotherPerson));