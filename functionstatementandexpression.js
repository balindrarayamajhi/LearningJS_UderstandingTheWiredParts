

function callme(a){
    a();
}

callme(function(){
    console.log('hi');
})