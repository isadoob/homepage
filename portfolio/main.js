$(".filter button").each(function () {
  $(this).on("click", function () {
    if ($(this).hasClass("active")) {
      // toggles to the "all" filter if another tag is clicked while active
      $(".filter button").removeClass("active");
      $("button.all").addClass("active");

      // reveal all boxes
      $(".box").addClass("visible");
    } else {
      // makes all boxes visible first
      $(".box").addClass("visible");

      // then, removes the visible class from all boxes without the same tag class as the filter button that was clicked
      var filtertag = $(this).attr("class");
      $(".box:not(." + filtertag + ")").removeClass("visible");

      // remove active class from all filter buttons
      $(".filter button").removeClass("active");

      // then, add the active class just to the filter button that was clicked
      $(this).addClass("active");
    }
  });
});
