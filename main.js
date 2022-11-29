$(window).scroll(function() {
    if ($(window).scrollTop() > 75) {
        $('#navBar').css("opacity", 0.3);
    }
    else {
        $('#navBar').css("opacity", 1);
    }
});

$(document).ready(function(){
    $('#navBar').live("mouseover", function () {
            $(this).css("opacity", 1);
            });

    $('#navBar').live("mouseleave", function () {
        if($(window).scrollTop() > 75) { // this here
            $(this).css("opacity", 0.3);
        }
    });

})