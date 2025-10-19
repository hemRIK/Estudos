let produtos = document.querySelector("body > main > div > nav > a:nth-child(2)")
 
var quantslides = 6
var indice  = 0;
let intervalo = 1500

 

var sliderprincipal = document.querySelector('.slider-principal');
var larguraslider = sliderprincipal.offsetWidth;
var alturaslider = sliderprincipal.offsetHeight;

var banner = document.querySelectorAll('.img1')
 

//let mudaborda =  document.querySelectorAll(".botaocomprar a")
//let bordalaranja = document.querySelectorAll(".produtos")

 
 
//mudaborda[0].addEventListener('mouseover',()=>{

//console.log(entrou)

//})




function carregarprodutos ()
 { 

fetch('produtos.json')
.then(response => response.json())   // converte a resposta em json 
.then(produtos => {


 
const cprodutos = document.querySelector('#containerprodutos')
 cprodutos.innerHTML = ''
 


produtos.map(produto=> {
 const div = document.createElement("div")
  div.classList.add("produtos")
 div.classList.add("containerprodutosclick")



  const divcomprar = document.createElement("div")
    divcomprar.classList.add("botaocomprar")





 const img = document.createElement("img")  
 img.src= produto.imagem
 img.alt= produto.nome

 const titulo = document.createElement("h1")
 titulo.textContent = produto.nome

 const link = document.createElement("a")
 link.textContent =  "Comprar"
 link.href= produto.link

cprodutos.appendChild(div)

div.appendChild(img)
div.appendChild(titulo)


div.appendChild(divcomprar)
divcomprar.appendChild(link)



})



})



}


produtos.addEventListener("click", function(){
   
    sliderprincipal.style.display = "none";
    let containerprodutos = document.querySelector('.containerprodutos')

  containerprodutos.classList.remove('containerprodutos');
   containerprodutos.classList.add('containerprodutosclick');

    carregarprodutos();


});

          let clicahome = document.querySelector('#home')     

          clicahome.addEventListener('click',function() {
          console.log("clicou no home")

          containerprodutos.classList.remove('containerprodutosclick');
          containerprodutos.classList.add('containerprodutos');
          sliderprincipal.style.display = "inline-flex "
          sliderprincipal.classList.add('sliderprincipal')

          })

function mudaslide( )
{                                      
 

       if( indice < quantslides) 
    {
                
         
  banner[indice].style.marginTop = -alturaslider+"px"
   console.log("indice atual "+ indice)
  indice++
 
 
if(indice==quantslides ) {
    indice = 0;

    for(var i = 0 ; i < quantslides; i++)
     {

  banner[i].style.marginTop = "0px";

  
}



}
      



   }
  



    }



  setInterval( mudaslide, intervalo) 

   
    
  

   

  





   








