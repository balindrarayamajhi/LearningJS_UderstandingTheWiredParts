 console.log(this);

function a(){
    console.log(this);
}

var b=function(){
    console.log(this);
}

a();
b();

var c={
    name:'The c Ojbect',
    log:function(){
        console.log(this);
    var setname=function(newname){
        this.name=newname;
        }
    setname('Updated !, the new c object');
    }
}
c.log();