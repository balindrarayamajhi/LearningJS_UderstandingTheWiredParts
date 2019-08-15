//function buildFunction(){
//
//    var arr=[];
//     
//    for(var i=0; i<3; i++){
//        arr.push(
//            function(){
//                console.log(i);
//            }
//        )
//    }
//    
//    return arr;
//
//}
//
//var fs=buildFunction();
//console.log('buildFunction()');
//fs[0]();
//fs[1]();
//fs[2]();
//
//console.log('---------------------');
//console.log('buildFunction()2');


function buildFunction2(){

    var arr=[];
     
//    for(var i=0; i<3; i++){
//        let j=i;
//        arr.push(
//            function(){
//                console.log(j);
//            }
//        )
//    }
    
    for(let i=0; i<3; i++){
       // let j=i;
        arr.push(
            function(){
                console.log(i);
            }
        )
    }
    return arr;

}

var fs2=buildFunction2();
fs2[0]();
fs2[1]();
fs2[2]();

//console.log('--------------------');
//console.log('buildFunction()3');
//function buildFunction3(){
//
//    var arr=[];
//     
//    for(var i=0; i<3; i++){
//        arr.push((
//            function(j){
//                console.log(i);
//                return i;
//            }(i))
//        )
//    }
//    console.log(arr);
//    return arr;
//
//}
//
//var fs3=buildFunction3();
//console.log('--------------------');
//console.log(fs3[0]);
//console.log(fs3[1]);
//console.log(fs3[2]);
//console.log('--------------------');
//
//console.log(buildFunction3);