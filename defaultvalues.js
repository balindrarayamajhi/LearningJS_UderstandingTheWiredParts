function greet(name){
//    name=name||'<Your name here>';
    if(name==undefined){
        name='<Your name here>';
    }

    console.log('Hello '+name +' !');

}

greet('Balindra');
greet();
greet(0);
greet(null);
greet(undefined);
greet('undefined');