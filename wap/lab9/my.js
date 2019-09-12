$(function(){
    $("#bookingform").submit(function(event){
        event.preventDefault();
        $("#errors").empty();
        let canSubmit = true;
        const street = $("#street").val();
        const zip = $("#zip").val();
        const seats = $("#seats").val();
        const state = $("#state").val();

        if(street==''){
            $("#errors").append('Street can not be empty! <br />');
            canSubmit = false;
        }

        if(zip==''){
            $("#errors").append('Zipcode can not be empty! <br />');
            canSubmit = false;
        }

        if(state==''){
            $("#errors").append('Plz selct one state! <br />');
            canSubmit = false;
        }

        if(seats<=0 || seats>200){
            $("#errors").append('Seats can not more than 200!! <br />');
            canSubmit = false;
        }

        if($("input[name='taxi']:checked").val()===undefined){
            $("#errors").append('Plz selct one kind taxi!! <br />');
            canSubmit = false;
        }

        if($("input[name='extra']:checked").val()===undefined){
            $("#errors").append('Plz selct one kind extra!! <br />');
            canSubmit = false;
        }

        if(canSubmit){
            this.submit();
        }

    });
});