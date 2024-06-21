function menuMobile() {
  var dotsButton = $(".dots");
  var menuMobile = $(".menu-mobile");
  var closeIcon = $(".icon-tabler-x");
  var links = $(".menu-mobile__links a");

  dotsButton.on("click", function () {
    menuMobile.slideDown();
    closeIcon.css("display", "block");
  });

  closeIcon.on("click", function () {
    menuMobile.slideUp();
    closeIcon.css("display", "none");
  });

  links.on("click", function () {
    menuMobile.slideUp();
    closeIcon.css("display", "none");
  });
}

menuMobile();
