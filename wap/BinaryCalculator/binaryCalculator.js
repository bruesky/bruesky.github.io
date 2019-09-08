
window.onload = function () {
    let left = []
    let right = []
    let op = '';

    let res = this.document.getElementById('res');
    function render() {
        res.innerHTML = left.join('') + op + right.join('');
    }

    function toBinary(val) { 
        let binary = ''; 
        val = Math.floor(val);
        while (val > 0) { 
            binary = (val % 2) + binary; 
            val = Math.floor(val / 2); 
        } 
        return binary; 
    }

    function convert(arr){
        let sum = 0;
        arr.reverse();
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if(element){
                sum+=Math.pow(2,index);
            }
        }
        return sum;
    }

    let btn0 = this.document.getElementById('btn0');
    btn0.onclick = function () {
        if (op) {
            right.push(0);
        } else {
            left.push(0);
        }
        render();
    }
    let btn1 = this.document.getElementById('btn1');

    btn1.onclick = function () {
        if (op) {
            right.push(1);
        } else {
            left.push(1);
        }
        render();
    }


    let btnClr = this.document.getElementById('btnClr');
    btnClr.onclick = function () {
        left = [];
        right = [];
        op = '';
        render();
    }

    let btnEql = this.document.getElementById('btnEql');
    btnEql.onclick = function(){
        let leftVal = convert(left);
        let rightVal = convert(right);
        eval("var ret = "+ leftVal+op+rightVal);
        left = [];
        right = [];
        op = '';
        res.innerHTML = toBinary(ret);
    }

    let btnSum = this.document.getElementById('btnSum');
    btnSum.onclick = function () {
        if (!op) {
            op = '+';
        }
        render();
    }
    let btnSub = this.document.getElementById('btnSub');
    btnSub.onclick = function () {
        if (!op) {
            op = '-';
        }
        render();
    }
    let btnMul = this.document.getElementById('btnMul');
    btnMul.onclick = function () {
        if (!op) {
            op = '*';
        }
        render();
    }
    let btnDiv = this.document.getElementById('btnDiv');
    btnDiv.onclick = function () {
        if (!op) {
            op = '/';
        }
        render();
    }

}