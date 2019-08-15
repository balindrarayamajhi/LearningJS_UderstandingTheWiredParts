function Person(firstname,lastname){
    //console.log(this);
    
    this.firstname = firstname;
    this.lastname =lastname;
    this.getFullname =function(){
        return this.firstname+' '+this.lastname;
    }
    //console.log('The function is inoked'); 
    
    //function constructor can have return  statement ,if it does not JS
    //Engine will return the newly created object by new keyword placed before function call
//    return {
//        message:'this is retuened object with message'
//    };
}

var balindra=new Person('Balindra','Rayamajhi')

console.log(balindra.getFullname());

var rejina= new Person('Rejina','Shrestha');
console.log(rejina.getFullname());
console.log('balindra-prototype : '+balindra.__proto__);


