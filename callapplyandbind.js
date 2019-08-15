var person={
    firstname:'Balindra',
    lastname:'Rayamajhi',
    getFullname :function(){
        var fullname=this.firstname+' '+this.lastname;
        return fullname;

    }
}

var log=function(lang1,lang2){
    console.log('Logged: '+this.getFullname());
    console.log('Arguments : '+lang1+' '+lang2);
    console.log('-------------------------');

}
var logPerson=log.bind(person);

logPerson();
logPerson('English');

log.call(person,'English','Spanish');
log.apply(person,['English','Spanish']);


(function(lang1,lang2){
    console.log('Logged: '+this.getFullname());
    console.log('Arguments : '+lang1+' '+lang2);
    console.log('-------------------------');

}).call(person,'Nepali','Hindhi');

(function(lang1,lang2){
    console.log('Logged: '+this.getFullname());
    console.log('Arguments : '+lang1+' '+lang2);
    console.log('-------------------------');

}).apply(person,['Nepali','Hindhi']);