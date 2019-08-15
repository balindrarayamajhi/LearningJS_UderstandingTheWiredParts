var arr=[1,2,3,4];
function mapForEach(arr1,fn){
    let newArr=[];
   for(let i=0;i<arr1.length;i++){
       newArr.push(fn(arr1[i]));
   }
    return newArr;
};

var newArray=mapForEach(arr,function(item){
    return item*2;
});
console.log(arr);
console.log(newArray);

var divideArray=mapForEach(newArray,function(item){
    return item/2;
});

console.log(divideArray);

var booleanArray= mapForEach(newArray,function(item){
    return item>5;
});

console.log(booleanArray);

var checkPastLimit=function(limiter,item){
    return item>limiter;
}

var arr2=mapForEach(newArray,checkPastLimit.bind(this,3));
console.log(arr2);

var multiplyBy=function(n){
    return function(n,item){
        return n*item;
}.bind(null,n);
};

var multestarray=mapForEach(newArray,multiplyBy(10));
console.log(multestarray);
