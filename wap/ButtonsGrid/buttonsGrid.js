let ids = [1,2,3,6,9,8,7,4];

window.onload = function(){
    let btn5 = document.getElementById('btn5')
    btn5.onclick = function(){
        let last = document.getElementById('btn'+ids[ids.length-1]).innerHTML;
        for(let i = ids.length-1; i >=1; i--){
            document.getElementById('btn'+ids[i]).innerHTML = document.getElementById('btn'+ids[i-1]).innerHTML;
        }
        document.getElementById('btn'+ids[0]).innerHTML = last;

    }
}