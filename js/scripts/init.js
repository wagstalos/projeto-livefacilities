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

  function showMore() {
    var showChar = 300; // Limite de caracteres
    var ellipsestext = "...";
    var moretext = "Ver mais";
    var lesstext = "Ver menos";

    $(".text-showmore").each(function () {
      var content = $(this).html();
      if (content.length > showChar) {
        var c = content.substr(0, showChar);
        var h = content.substr(showChar, content.length - showChar);

        var html =
          c +
          '<span class="ellipses">' +
          ellipsestext +
          '</span><span class="more-text"><span>' +
          h +
          '</span></span><span class="show-more">' +
          moretext +
          "</span>";

        $(this).html(html);
      }
    });

    $(".text-showmore").on("click", ".show-more", function () {
      if ($(this).hasClass("less")) {
        $(this).removeClass("less");
        $(this).html(moretext);
        $(this).siblings(".more-text").hide();
        $(this).siblings(".ellipses").show();
      } else {
        $(this).addClass("less");
        $(this).html(lesstext);
        $(this).siblings(".more-text").show();
        $(this).siblings(".ellipses").hide();
      }
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
  //showMore();
  dateCurrent();
});
