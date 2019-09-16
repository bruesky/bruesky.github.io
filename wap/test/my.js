$(function(){
    $('div p').click(function() {
    alert('Hello 1');
    });
    $('div p').click(function(evt) {
    alert('Hello 2');
    });
    $('div p').click(function(evt) {
    alert('Hello 3');
    evt.stopImmediatePropagation();
    });

    //continued
    $('body').click(function() {
    alert('Hello 4');
    });
    $('div').click(function() {
    alert('Hello 5');
    });
    $('#div1').click();
    $('#myp').click();
});