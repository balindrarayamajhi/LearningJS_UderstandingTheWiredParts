//long running function

function waitForThreeSeconds(){
    var ms=3000+new Date().getTime();
    while(new Date()<ms){
        console.log('finished function');
    }
}

function clickHandler(){
    console.log('click Event');
}

//listen for the click event
document.addEventListener('click',clickHandler);

waitForThreeSeconds();
console.log('finished execution');