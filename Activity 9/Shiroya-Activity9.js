$(document).ready(function() {

        // get the image URL and id for each image
    // preload the image for each link
    $("#image_list a").each(function() {
        var image = new Image();
        image.src = $(this).attr("href");
    });

    // set up the event handlers for each link
    $("#image_list a").click(function (evt){
        var image = $(this).attr("href");
        $("#image").attr("src", image);

        var caption = $(this).attr("id");
        $("#caption").text(caption);

        // cancel the default action of each link

        evt.preventDefault();


    });
    // move the focus to the second link
    $("li a")[1].focus();
}); // end ready