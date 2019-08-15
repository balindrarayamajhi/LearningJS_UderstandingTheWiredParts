function greet(firstname,lastname,language, ...other){
    console.log(arguments);
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log('--------------------');
    if(arguments.length==4){
        console.log(arguments[3]);
    }
}

greet();
greet('Balindra');
greet('Balindra','Rayamajhi');
greet('Balindra','Rayamajhi','Engligh');
greet('Balindra','Rayamajhi','Engligh','Nepal');



console.log('calling greet1 - function greet1(...other){}')
function greet1(...other){
    
//    if (argument.lenth==0)
//        return;
//    else if(a)
//    console.log(arguments[0]);
//    console.log(firstname);
//    console.log(lastname);
//    console.log(language);
//    console.log('--------------------');
//    if(arguments.length==4){
//        console.log(arguments[3]);
//    }
  if(arguments.length!=0)  
    for(var i=0;i<arguments.length;i++){
        console.log(arguments[i]);
       
    }
     console.log('---------------');
}

greet1();
greet1('Balindra');
greet1('Balindra','Rayamajhi');
greet1('Balindra','Rayamajhi','Engligh');
greet1('Balindra','Rayamajhi','Engligh','Nepal');