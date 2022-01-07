$(document).ready(function() {

    $("#image_list a").click(function (evt) {

// cancel the default action of the link

        evt.preventDefault();

        var imageURL = $(this).attr("href");

        var caption = $(this).attr("title");

        $("#caption").fadeOut(3000, function(){

            $("#caption").text(caption).fadeIn(3000);

        });

        $("#image").fadeOut(3000, function(){

            $("#image").attr("src", imageURL).fadeIn(3000);
            $("#caption").css("font-size","2.0em");
        });

    });

// move focus to first thumbnail

    $("li:first-child a").focus();

    $("#image").hide().fadeIn(3000);

    $("#caption").hide().fadeIn(3000);

});