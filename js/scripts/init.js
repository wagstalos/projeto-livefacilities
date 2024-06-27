$(window).on("load", function () {
  $("body").removeClass("loading");
});

$(document).ready(function () {
  AOS.init();

  function scrollTarget() {
    var links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();

        var targetId = link.getAttribute("href").substring(1);
        var target = document.getElementById(targetId);

        if (target) {
          var targetOffset =
            target.getBoundingClientRect().top + window.scrollY;

          window.scrollTo({
            top: targetOffset,
            behavior: "smooth",
          });
        }
      });
    });
  }

  $(".accordion-wrap").on("click", function () {
    $(this).children().eq(1).slideToggle(300);
    $(this).children().eq(0).toggleClass("accordion-no-bar");
    $(this).siblings().find(".accordion-header").removeClass("accordion-gold");
    $(this).siblings().find(".accordion-header .icon").removeClass("rotate-fa");
    $(this).find(".accordion-header").toggleClass("accordion-gold");
    $(this).find(".icon").toggleClass("rotate-fa");

    $(".accordion-wrap .accordion-text")
      .not($(this).children().eq(1))
      .slideUp(300);
  });

  scrollTarget();
});


document.addEventListener('DOMContentLoaded', function() {
  const lazyBgElements = document.querySelectorAll('.lazy-image-background');
  
  lazyBgElements.forEach(el => {
      const bgImg = el.getAttribute('data-bg');
      el.style.backgroundImage = `url(${bgImg})`;
  });
});