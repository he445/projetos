window.onload=function(){
  
let projetoli1 = document.querySelector("#pojetoli1")
let projetoli2 = document.querySelector("#pojetoli2")
let projetoli3 = document.querySelector("#pojetoli3")
let pojeto = document.querySelector("#Projetos");
let contato = document.querySelector("#contato");
let minhasskils = document.querySelector("#minhasskils");
projetoli1.addEventListener("click",function () {
  pojeto.style.display = "block";
  console.log("ok");
});
projetoli2.addEventListener("click",function () {
    contato.style.display = "block";
    console.log("ok");
  });
  projetoli3.addEventListener("click",function () {
    minhasskils.style.display = "block";
    console.log("ok");
  });
  
}
