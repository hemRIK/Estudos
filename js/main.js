let produtos = document.querySelector("body > main > div > nav > a:nth-child(2)")
 
var quantslides = 6
var indice  = 0;
let intervalo = 1500
listaprodutos = []
 

var sliderprincipal = document.querySelector('.slider-principal');
var larguraslider = sliderprincipal.offsetWidth;
var alturaslider = 300;

var banner = document.querySelectorAll('.img1')

 

//let mudaborda =  document.querySelectorAll(".botaocomprar a")
//let bordalaranja = document.querySelectorAll(".produtos")

 
 
//mudaborda[0].addEventListener('mouseover',()=>{

//console.log(entrou)

//})

 function mudarbannercelular (){
let img1 = document.querySelector("#img1")
let img2 = document.querySelector("#img2")
let img3 = document.querySelector("#img3")
 
 let tamanhodatela =  window.innerWidth
if(tamanhodatela<600 ){
    
 
 img1.innerHTML ='<img src="img/slider/mobile/1.jpg" alt="imagem1" >'
  img2.innerHTML ='<img src="img/slider/mobile/2.jpg" alt="imagem2" >'
  img3.innerHTML ='<img src="img/slider/mobile/3.jpg" alt="imagem3" >'
 
 
  }
if(tamanhodatela>600)
   {
    

 img1.innerHTML ='<img src="img/slider/1.jpg" alt="imagem1" >'
  img2.innerHTML ='<img src="img/slider/2.jpg" alt="imagem2" >'
  img3.innerHTML ='<img src="img/slider/3.jpg" alt="imagem3" >'

   }
 }

window.addEventListener('resize', mudarbannercelular)



function carregarprodutos ()
 { 

fetch('produtos.json')
.then(response => response.json())   // converte a resposta em json 
.then(produtos => {
listaprodutos = produtos



 
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


let buscador = document.querySelector('#buscar') 
  
 
buscador.addEventListener('keydown',(event)=>  {
 carregarprodutos()
conteudobuscador = buscador.value.toLowerCase().trim()

if(event.key ==='Enter')
{ 
  
 
  

 
 


encontrar = listaprodutos.find(p => p.nome ===conteudobuscador) 
 
if(encontrar) {
 


 
alert(`Temos Este Produto ${encontrar.nome},Procure Na Aba "Produtos"`)
}
else{
   alert("Não Temos Este Produto mas você pode encomendar na aba Encomendas")
}
                     }
 

  })






produtos.addEventListener("click", function(){
   
    sliderprincipal.style.display = "none";
    let containerprodutos = document.querySelector('.containerprodutos')

  containerprodutos.classList.remove('containerprodutos');
   containerprodutos.classList.add('containerprodutosclick');

    carregarprodutos();


});

          let clicahome = document.querySelector('#home')     

          clicahome.addEventListener('click',function() {
        

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

  indice++
 
 
if(indice==quantslides ) {
    indice = 0;

    for(var i = 0 ; i < quantslides; i++)
     {

  banner[i].style.marginTop = "0px";

  
}} } }



  setInterval( mudaslide, intervalo) 

   
    
  

   

  





   








