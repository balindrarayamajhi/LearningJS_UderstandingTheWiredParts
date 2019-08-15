var c={
    name:'The c Ojbect',
    log:function(){
        console.log(this);
    var setname=function(newname){
        this.name='newname';
        }
    setname('Updated !, the c object');
    }
}
c.log();
console.log(c.name);

var d={
    
    name:'This is d Ojbect',
    log:function(){
        var self = this;
        console.log(this);
    var setname=function(newname){
        self.name=newname;
        }
    setname('Updated !, the new  d object');
    }
}
d.log();

console.log(d.name);