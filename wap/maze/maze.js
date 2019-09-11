$(document).ready(function () {
    let begin = false;
    function setLose(){
        if(!begin)
            return;
        $("div.boundary").each(function(idx,e){
            $(e).addClass('youlose');
        })
        $("#boundary1").addClass('youlose');
        $("#status").text("Lose!!!");
        begin = false;
    }

    $("#boundary1").mouseenter(function () {
        setLose();
    });

    $("div.boundary").mouseenter(function () {
        setLose();
    });

    $("#end").mouseenter(function () {
        if(begin)
            $("#status").text("Win!!!");
        begin = false;
    });

    $("#start").mouseenter(function () {
        begin = true;
    });

    $(document).mousemove(function(e){ 
        var x1 = $("#boundary1").offset().left;
        var x2 = e.pageX;
        if(x2+5<x1)
            setLose();
   });
});