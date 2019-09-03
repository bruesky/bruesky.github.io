'use strict';
const lib = require("./lib.js");
const rxjs = require("rxjs")
const operators = require("rxjs/operators")
const { Observable,of } = rxjs;
const {map,filter} = operators;

of(1,2,3)
    .pipe(
        map((n)=>n+3),
        filter((n)=>n>=2)
    )
    .subscribe(
    (x)=>console.log(x),
    null,
    ()=>console.log("done")
)
