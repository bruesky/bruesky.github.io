
//scope
let numArr= [];
let funArr = [];
for (var i = 0;i <= 3;i++) { //what if use var?
    numArr[i] = i * 2;
    funArr[i] = function () {
        return i*2;
    }
}
// console.log(i);
console.log(funArr[2]());
console.log(numArr[2]);
console.log(NaN==NaN)
console.log([1]==[1])
