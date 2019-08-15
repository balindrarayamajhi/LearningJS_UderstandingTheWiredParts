function Person(firstname,lastname){
    //console.log(this);
    
    this.firstname = firstname;
    this.lastname =lastname;
    
    //console.log('The function is inoked'); 
    
    //function constructor can have return  statement ,if it does not JS
    //Engine will return the newly created object by new keyword placed before function call
//    return {
//        message:'this is retuened object with message'
//    };
}
Person.prototype.address='1000 N 4th st';
Person.prototype.getFullname =function(){
        return this.firstname+' '+this.lastname;
    }

console.log(Person.prototype);
var balindra=new Person('Balindra','Rayamajhi')

console.log(balindra.getFullname());

console.log('balindra-prototype : '+balindra.__proto__);

var fun =function(){
    console.log('function example');
};

console.log('fun-protype : '+fun.__proto__);
console.log('fun-protype : '+fun.prototype);
console.log('function-constuctor-prototype : '+Person.__proto__);
console.log('function-constuctor-prototype : '+Person.prototype);

Person.prototype.getFirstname=function(){
    return this.firstname;
}


console.log(balindra.getFirstname());