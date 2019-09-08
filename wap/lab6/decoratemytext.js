window.onload = function(){
    let btn = this.document.getElementById('btn');
    let tr = this.document.getElementById('tr');
    let cb = this.document.getElementById('checkbox')
    btn.onclick = function(){
        setInterval(function(){
            let fz = tr.style.fontSize?parseInt(tr.style.fontSize):12;
            tr.style.fontSize = fz+2+'pt';
            console.log(tr.style.fontSize)
        },500)
    }


    cb.onchange = function(){
        if(cb.checked){
            tr.style.fontWeight = 'bold';
            tr.style.color = 'green';
            tr.style.textDecoration = 'underline';
            console.log(document.getElementsByTagName('body'))
            document.getElementsByTagName('body')[0].style.backgroundImage = 'url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)';
        }else{
            tr.style.fontWeight = 'normal';
            tr.style.color = 'black';
            tr.style.textDecoration = 'none';
        }
    }
}