function sum(arr){
    return arr.reduce((accum, num) => accum + num, 0);
}

function multiply(arr){
    return arr.reduce((mul, num) => mul*num, 1);
}

function reverse(str){
    let ret = [];
    let strArr1 = str.split('')
    let strArr2 = str.split('')
    return strArr1.map((e,i)=>{
        return  strArr2[strArr1.length-i-1];
    }).join("")
}

function findLongestWord(strArr){
    return strArr.reduce(function(m, currentStr, currentIndex,
                                  array){
        return m>currentStr.length?m:currentStr.length});
}
