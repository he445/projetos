window.onload = function () {
  let projetoli1 = document.querySelector("#pojetoli1");
  let projetoli2 = document.querySelector("#pojetoli2");
  let projetoli3 = document.querySelector("#pojetoli3");
  let pojeto = document.querySelector("#Projetos");
  let contato = document.querySelector("#contato");
  let minhasskils = document.querySelector("#minhasskils");
  let controlador = document.querySelector("#controlador");
  let erro = document.querySelector("#erro");

  projetoli1.addEventListener("click", function () {
    pojeto.style.display = "block";
    console.log("ok");
  });
  projetoli2.addEventListener("click", function () {
    contato.style.display = "block";
    console.log("ok");
  });
  projetoli3.addEventListener("click", function () {
    minhasskils.style.display = "block";
    console.log("ok");
  });
  controlador.addEventListener("keyup", function (e) {
    let key = e.which || e.keyCode;

    if (key == 13) {
      if (controlador.value == "cd projetos") {
        location.href = "#Projetos";
        erro.innerHTML = "$";
        pojeto.style.display = "block";
      } else if (controlador.value == "cd contato") {
        location.href = "#contato";
        erro.innerHTML = "$";
        contato.style.display = "block";
      } else if (controlador.value == "cd minhasskils") {
        location.href = "#minhasskils";
        erro.innerHTML = "$";
        minhasskils.style.display = "block";
      } else {
        erro.innerHTML =
          "$ comando nao encontrado por favor insira cd+diretório ex: cd projetos";
        console.log("erro");
      }
    }
  });
};
