var a=new Number(3);
console.log(a);
Number.prototype.isEven=function(){
    return this%2==0;
}
console.log(a.isEven());

var b=new String('Balindra');
console.log(b.indexOf('a'));

var c=new Date("7/1/2019");

String.prototype.add=function(str){
    return this+str;
}

console.log(b.add(' Rejina'));