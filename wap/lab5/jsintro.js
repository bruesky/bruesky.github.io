"use strict";

function maxn(a,b){
    if(a>b)
        return a;
    return b;
}

function maxOfThree(a,b,c){
    return maxn(maxn(a,b),c);
}

var vowels = {
    A: true, E: true, I: true, O: true, U:true
}

function isVowel(ch){
    return vowels[ch.toUpperCase()]?true:false;
}

function sum(arr){
    let sum = 0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum;
}

function multiply(arr){
    let mul = 1;
    arr.forEach(element => {
        mul*=element;
    });
    return mul;
}

function reverse(str){
    let ret = [];
    for(let i = 0; i < str.length;i++){
        ret.unshift(str.charAt(i))
    }
    return ret.join("")
} 

function findLongestWord(strArr){
    const maxLenght = strArr.reduce(function(m, currentStr, currentIndex,
        array){
        return m>currentStr.length?m:currentStr.length});
    return maxLenght;
}

function filterLongWords(strArr,i){
    const ret = strArr.filter(function(elem, index, array){
        return elem.length>i;});
    return ret;
}
// multiply each element by 10; 
// return array with all elements equal to 3; 
// return the product of all elements;

function multiply10(arr){
    return arr.map(function(elem, i, array) {
        return elem*10;})
}

function filter3(arr){
    return arr.filter(function(elem, i, array) {
        return elem==3;})
}

function productAll(arr){
    return arr.reduce(function(product, currentValue, currentIndex,
        array){
        return product*=currentValue});
}

function makeTest(expect,fun,...params){
    console.log('Testing',fun.name);
    console.log(myFunctionTest(expect,function(){return fun.apply(null,params);}));
}

function myFunctionTest(expect,fun){
    console.assert(expect.toString()==fun().toString(),"TEST FAILED")
    if(expect.toString()==fun().toString()){
        return "TEST SUCCEEDED";
    }else{
        return "TEST FAILED";
    }
}

window.onload = function(){
    let e = document.getElementById('btn')
    e.onclick = function(){
        e.innerHTML = parseInt(e.innerHTML)+1;
    }
}