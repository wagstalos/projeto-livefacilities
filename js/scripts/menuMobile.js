function menuMobile() {
  var dotsButton = document.querySelector(".dots");
  var menuMobile = document.querySelector(".menu-mobile");
  var closeIcon = document.querySelector(".icon-tabler-x");
  var links = document.querySelectorAll(".menu-mobile__links a");

  dotsButton.addEventListener("click", function () {
    menuMobile.style.display = "block";
    menuMobile.style.height = "0"; // Definir a altura inicial para 0
    menuMobile.style.overflow = "hidden";
    menuMobile.style.transition = "height 0.3s ease-out"; // Definir a transição para altura

    setTimeout(function () {
      menuMobile.style.height = "50%"; // Definir a altura final desejada (ajuste conforme necessário)
    }, 10); // Defina um pequeno atraso para acionar a transição

    closeIcon.style.display = "block";
  });

  closeIcon.addEventListener("click", function () {
    menuMobile.style.height = "0"; // Definir a altura para 0 para criar a animação de deslize para cima

    setTimeout(function () {
      menuMobile.style.display = "none"; // Esconder o menu após a animação
      closeIcon.style.display = "none";
    }, 300); // Ajuste o tempo para coincidir com a duração da animação
  });

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      menuMobile.style.height = "0"; // Definir a altura para 0 para criar a animação de deslize para cima

      setTimeout(function () {
        menuMobile.style.display = "none"; // Esconder o menu após a animação
        closeIcon.style.display = "none";
      }, 300); // Ajuste o tempo para coincidir com a duração da animação
    });
  });
}

menuMobile();
