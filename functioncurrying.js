function volume(l, w, h) {
  return l * w * h;
}

console.log(volume(2,5,10))

function volume1(length) {
  return function(width) {
    return function(height) {
      return height * width * length;
    }
  }
}
console.log(volume1(2)(5)(10));

var curried1=volume1(2);
var curried2=curried1(5);
console.log(curried2(10));

function multiply(a,b){
    console.log('In function mutliplyBy'+ a);
    return a*b;
}

var multiplyByTwo=multiply.bind(this,2);
var multiplyByThree=multiply.bind(this,3);
console.log(multiplyByTwo(4));
console.log(multiplyByThree(3));