var arr=['Rejina','Rajani','Ranjan'];

Array.prototype.customFeature='test feature';
for(var prop in arr){
    console.log(prop+' : '+arr[prop]);
}
  
//in case of array don't use for in ,in case of for in
//if any propert is added to Array by Array.property t and for in 
// also iterate objects prototype property too so it better 
//to use for of in case of an array.

console.log('---------------');

for(var element of arr){
    console.log(element);
}y 