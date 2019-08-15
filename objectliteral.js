var person =new Object();
person['firstname']='Balindra';
person.lastname='Rayamajhi';
console.log(person.firstname+' '+person['lastname']);

person={};
person.firstname='Rejina',
person.lastname='Shrestha';
console.log(person.firstname+' '+person['lastname']);

person ={
    lastname:'Koirala',
    firstname:'Girija Prasad',
    print:function (){
    console.log(this.firstname+' '+this.lastname);
    }
}
console.log(person);
person.print();

function greet(person){
    console.log('Hello '+person.firstname+ ' !');
}

var testfunc={
    firstname:'Rahul',
    lastname:'Dravid'
}
greet(testfunc);

var testFuncUndefiend={
    lastname:'Tendulkar'
}
greet(testFuncUndefiend);

greet(
    {
        'firstname':'Balindra',
        'lastname':'Raymajhi'
    }
)
person.address ={
    street: 'Maharajgung',
    City:'kathmandu',
    Country:'Nepal'
}
console.log(person);
person.age=96;
console.log(person);