c = 5;
var b = 7;
var a = function () {
    console.log(100);
}

function f(a,b) {
    b = 20;
    console.log(c);
    console.log(b);
    g(8,9,10);
    var  c = 0;
    console.log(c);

}

function g() {
    b = a;
    console.log(b);
    b = c;
}

f(1,2,3);
console.log(b);
console.log(c);
