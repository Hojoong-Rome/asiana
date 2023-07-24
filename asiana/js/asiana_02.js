
$(function(){

    $(".menuToggle1").on("click", function(){
        $(".sub1").stop().slideToggle();
    });

    $(".menuToggle2").on("click", function(){
        $(".sub2").stop().slideToggle();
    });

    $(".menuToggle3").on("click", function(){
        $(".sub3").stop().slideToggle();
    });

    $("#flightStart").on("click", function(){
        $(".blackWrap").fadeIn();
        $("body").addClass('scrollLock');
        window.scrollTo({ top: 0, behavior: "instant" });
    });

    $("#flightEnd").on("click", function(){
        $(".blackWrap2").fadeIn();
        $("body").addClass('scrollLock');
        window.scrollTo({ top: 0, behavior: "instant" });
    });

    $("#sppShut").on("click", function(){
        $(".blackWrap").fadeOut();
        $("body").removeClass('scrollLock');
    });

    $("#eppShut").on("click", function(){
        $(".blackWrap2").fadeOut();
        $("body").removeClass('scrollLock');
    });

    $(".worldAirportList ul li").on("click", function(){
        $(this).addClass('selectedOne');
        $(".worldAirportList ul li").not($(this)).removeClass('selectedOne');
    });

    $(".worldAirportMenu li:nth-of-type(1)").on("click", function(){
        $(".worldAirportList ul:nth-of-type(1)").addClass('activatedOne');
        $(".worldAirportList ul").not($(".worldAirportList ul:nth-of-type(1)")).removeClass('activatedOne');
    });

    $(".worldAirportMenu li:nth-of-type(2)").on("click", function(){
        $(".worldAirportList ul:nth-of-type(2)").addClass('activatedOne');
        $(".worldAirportList ul").not($(".worldAirportList ul:nth-of-type(2)")).removeClass('activatedOne');
    });
    
    $(".worldAirportMenu li:nth-of-type(3)").on("click", function(){
        $(".worldAirportList ul:nth-of-type(3)").addClass('activatedOne');
        $(".worldAirportList ul").not($(".worldAirportList ul:nth-of-type(3)")).removeClass('activatedOne');
    });

    $(".worldAirportMenu li:nth-of-type(4)").on("click", function(){
        $(".worldAirportList ul:nth-of-type(4)").addClass('activatedOne');
        $(".worldAirportList ul").not($(".worldAirportList ul:nth-of-type(4)")).removeClass('activatedOne');
    });

    $(".worldAirportMenu li:nth-of-type(5)").on("click", function(){
        $(".worldAirportList ul:nth-of-type(5)").addClass('activatedOne');
        $(".worldAirportList ul").not($(".worldAirportList ul:nth-of-type(5)")).removeClass('activatedOne');
    });

    $(".worldAirportMenu li:nth-of-type(6)").on("click", function(){
        $(".worldAirportList ul:nth-of-type(6)").addClass('activatedOne');
        $(".worldAirportList ul").not($(".worldAirportList ul:nth-of-type(6)")).removeClass('activatedOne');
    });

    $(".worldAirportMenu li:nth-of-type(7)").on("click", function(){
        $(".worldAirportList ul:nth-of-type(7)").addClass('activatedOne');
        $(".worldAirportList ul").not($(".worldAirportList ul:nth-of-type(7)")).removeClass('activatedOne');
    });
});


var fp = flatpickr(document.getElementById("flightDate"), {
	'monthSelectorType' : 'static',
	"locale": "ko",
    "mode": "range"
});


$("#flightStart").on("click", function(){
    $("#flightEnd").on("click", function(){
        $("#flightDate").on("click", function(){
            $(".beforeCheck").hide();
        });
    });
});

/*
if(($("#flightStart").val() != null || ($("#flightStart").val() != "")) && ($("#flightEnd").val() != null || ($("#flightEnd").val() != "")) && $("#flightDate").val() != null || ($("#flightDate").val() != "")){
    $(".beforeCheck").hide();
} else{
    $(".beforeCheck").show();
}
*/