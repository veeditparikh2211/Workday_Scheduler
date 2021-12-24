$(document).ready(function() {


    // display today date
    $("#currentDay").text(moment().format('dddd, MMM Do YYYY '));

    $(".savBtn").on("click", function() {

        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);


    })

    function timenote() {


        // current hours

        var currentime = moment().hour();


        $(".time-block").each(function() {


            var Time = parseInt($(this).attr("id").spilt("hour")[1]);

            if (Time < currentime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (Time === currentime) {
                $(this).removeClass("future");
                $(this).addClass("present");
                $(this).removeClass("past");
            } else {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");

            }
        })
    }


    $("#h-8 .description").val(localStorage.getItem("h-8"));
    $("#h-9 .description").val(localStorage.getItem("h-9"));
    $("#h-10 .description").val(localStorage.getItem("h-10"));
    $("#h-11 .description").val(localStorage.getItem("h-11"));
    $("#h-12 .description").val(localStorage.getItem("h-12"));
    $("#h-1 .description").val(localStorage.getItem("h-1"));
    $("#h-2 .description").val(localStorage.getItem("h-2"));
    $("#h-3 .description").val(localStorage.getItem("h-3"));
    $("#h-4 .description").val(localStorage.getItem("h-4"));
    $("#h-5 .description").val(localStorage.getItem("h-5"));

    localStorage.clear();
    timenote();


})