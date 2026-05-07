$(".dark-btn").click(
    function(){
        $(".box").toggleClass("dark");
        $(".container").toggleClass("dark");
    }
);

$(".spin-btn").click(
    function(){
        $(".box").toggleClass("spin");
    }
);

$(".reveal-btn").click(
    function(){
        $(".dog").show();
        $(".reveal-btn").hide();
    }
);

$(".draggable").draggable({
    containment: ".container",
    scroll: false,
    snap: true
});