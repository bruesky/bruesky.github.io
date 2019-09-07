// "use strict";
//this, at the module level, is actually the exports object.
function demo_primitive() {
    // string
    // number
    // boolean
    // undefined
    console.log(typeof 1);
    console.log(typeof 'str');
    console.log(typeof demo_primitive);
    console.log(typeof null);
    console.log(typeof NaN);
    console.log(typeof true);
    console.log(typeof undefined);
    console.log(null==undefined);
    console.log(null===undefined);
}

function demo_array() {
    var arr = [1,2,3];
    console.log(arr.length);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.dir(Array)
    var arr2 = new Array();
    arr2.push(2);
    arr2.push(1);
    // arr2.pop()
    arr2.forEach(
        (v,i)=>console.log(v)
    )
    // console.log(arr2)
}

function test(...arg) {
    console.log(this.lastName)
    arg.forEach(
        v=>console.log(v)
    )
}

function demo_object() {
    var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
    console.log(typeof person);
    console.log(person['firstName']);
    test.apply(person);
    test.call(person,2,3,4,5);
    var t = test.bind(person);
    t();
    console.log(this===global)//strict false or true
}

function main() {
    // demo_primitive()
    // demo_array()
    console.log(this)
    demo_object()
}

module.exports.main = main
