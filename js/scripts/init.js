window.addEventListener("load", function () {
  document.body.classList.remove("loading");
});

document.addEventListener("DOMContentLoaded", function () {
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

  var accordionWraps = document.querySelectorAll(".accordion-wrap");
  accordionWraps.forEach(function (accordionWrap) {
    accordionWrap.addEventListener("click", function () {
      var accordionText = this.children[1];
      var accordionHeader = this.children[0];
      var allAccordionHeaders = document.querySelectorAll(".accordion-header");
      var allIcons = document.querySelectorAll(".accordion-header .icon");

      if (accordionText) {
        if (accordionText.style.display === "block") {
          accordionText.style.display = "none";
        } else {
          accordionText.style.display = "block";
        }
      }

      accordionHeader.classList.toggle("accordion-no-bar");
      allAccordionHeaders.forEach(function (header) {
        header.classList.remove("accordion-gold");
      });
      allIcons.forEach(function (icon) {
        icon.classList.remove("rotate-fa");
      });
      this.querySelector(".accordion-header").classList.toggle(
        "accordion-gold"
      );
      this.querySelector(".icon").classList.toggle("rotate-fa");

      document
        .querySelectorAll(".accordion-wrap .accordion-text")
        .forEach(function (text) {
          if (text !== accordionText) {
            text.style.display = "none";
          }
        });
    });
  });

  scrollTarget();
});

document.addEventListener("DOMContentLoaded", function () {
  const lazyBgElements = document.querySelectorAll(".lazy-image-background");

  lazyBgElements.forEach((el) => {
    const bgImg = el.getAttribute("data-bg");
    el.style.backgroundImage = `url(${bgImg})`;
  });
});
