"use strict";


function resolveAfter2Seconds(x,timeout) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, timeout);
    });
}

async function f1() {
    var x = await resolveAfter2Seconds('first',1000);
    console.log(x);
}

async function f2() {
    var x = await resolveAfter2Seconds('second',1500);
    console.log(x);
}

async function f3() {
    var x = await resolveAfter2Seconds('last',2000);
    console.log(x);
}

f1();
f2();
f3();
console.log("last line code")