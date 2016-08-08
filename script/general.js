$(document).ready(function(){
    $("a.mobile").click(function(){
        $(".sidebar").slideToggle("fast");
    })

    window.onresize = function(){
        var size = $(window).width;

        if(size > 320){
            $(".sidebar").show();
        }
    } 
})