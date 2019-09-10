

window.onload = function(){
    // cfg
    let normalDul = 250;
    let turboDul = 50;
    let aniCahe = {};
    let fontCfg = {
        'Tiny':'7pt', 'Small':'10pt', 'Medium':'12pt', 'Large':'16pt', 'Extra Large' : '24pt', 'XXL':'32pt'
    }
    //objs
    let view = this.document.getElementById('text-area')
    let start = this.document.getElementById('start')
    let stop = this.document.getElementById('stop')
    let animation = this.document.getElementById('animation')
    let fontsize = this.document.getElementById('fontsize')
    let turbo = this.document.getElementById('turbo')

    //var
    let timer;
    let delay;
    let ani;
    let aniIndex;
    let aniPlay;
    
    // ANIMATIONS

    start.onclick = function(){
        aniPlay = true;
        stop.disabled = false;
        start.disabled = true;
    }

    stop.onclick = function(){
        aniPlay = false;
        stop.disabled = true;
        start.disabled = false;
    }

    animation.onchange = function(){
        setAni(animation.value)
        stop.disabled = true;
        start.disabled = false;
    }

    fontsize.onchange = function(){
        view.style.fontSize = fontCfg[fontsize.value];
    }

    turbo.onchange = function(){
        if(turbo.checked){
            delay = turboDul;
        }else{
            delay = normalDul;
        }
        loop();
    }

    function init(){
        delay = normalDul;
        setAni('BLANK')
        loop();
    }

    function loop(){
        if(timer){
            clearInterval(timer);
        }
        timer = setInterval(play,delay);
    }

    function setAni(aniName){
        if(!aniCahe[aniName])
            aniCahe[aniName] = ANIMATIONS[aniName].split('=====')
        ani = aniCahe[aniName]
        aniIndex = 0;
        view.value = ani[aniIndex];
        view.style.fontSize = fontCfg['Medium'];
        aniPlay = false;
    }

    function play(){
        if(aniPlay){
            aniIndex = aniIndex<ani.length-1? ++aniIndex:0;
            view.value = ani[aniIndex];
        }
    }

    init();
}