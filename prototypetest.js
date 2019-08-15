function Foo(y){
    this.y=y;
}

Foo.prototype.x=10;
Foo.prototype.calculate=function(z){
    
    return this.x+this.y+z;

}

console.log(Foo.prototype);