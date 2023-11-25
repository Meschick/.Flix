/*Configurações do Botão*/ 


function clicar1(){
  var list = document.getElementById("slide-cards2") 

  if (list.style.display == 'block'){
    list.style.display = 'none'
  }else{
    list.style.display = 'block'
  }
}


/*Configurações do segundo Botão */

function clicar(){
  var list2 = document.getElementById ("container-quinto2")
  if (list2.style.display == "block"){
    list2.style.display = 'none'

  }else{
    list2.style.display = "block"
  }
}

/*Efeito de Rolagem Menu */

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

function scrollToSection(event){
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target)-90 ;
  nativeScroll(distanceFromTheTop)
  
}
function getDistanceFromTheTop(element){
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function nativeSroll(distanceFromTheTop){
  window.scroll({
    top:distanceFromTheTop,
    behavior:"smooth",
  })

}


menuLinks.forEach((link) =>{
  link.addEventListener("click", scrollToSection);
  

});
