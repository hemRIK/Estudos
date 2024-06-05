
var botoes = document.getElementsByName("slide");
botoes[0].checked = true;
var quantslides = botoes.length;
var indice  = 0;
var intervaloentreslides = 4000;

var body =document.querySelector('body');


var sliderprincipal = document.querySelector('.slider-principal');
var larguraslider = sliderprincipal.offsetWidth;
var alturaslider = sliderprincipal.clientHeight

var teste = document.querySelectorAll('.img1')
   


var clicou = document.getElementById("slide1");



clicou.addEventListener("click",function() {


        
    })
   
     




    var clicou = document.getElementById("slide2");

    clicou.addEventListener("click",function() {
        indice = 2;
       


    teste[indice].style.marginTop= "0px"
        
        
        })
       

        var clicou = document.getElementById("slide3");

        clicou.addEventListener("click",function() {
            indice = 3;
           
    
    
        teste[indice].style.marginTop= "0px"
            
            
            })
    
     
     
    
    
    
           
            var clicou = document.getElementById("slide4");

            clicou.addEventListener("click",function() {
                indice = 4;
               
        
        
            teste[indice].style.marginTop= "0px"
                
                
                })

  
    
                var clicou = document.getElementById("slide5");

                clicou.addEventListener("click",function() {
                    indice = 5;
                   
            
            
                teste[indice].style.marginTop= "0px"
                    
                    
                    })
 
                    var clicou = document.getElementById("slide6");

                    clicou.addEventListener("click",function() {
                        indice = 6;
                       
                
                
                    teste[indice].style.marginTop= "0px"
                        
                        
                        })
                        

function mudaslide( )
{

   



    if( indice<= quantslides) 
    {
       

        
     
     

    teste[indice].style.marginTop = -alturaslider+"px"

    indice++


   

       

         

      
if(indice>quantslides -1) {
    indice = 0;

    for(var i = 0 ; i < quantslides; i++)
     {

  teste[i].style.marginTop = "0px";

  
}



}
      



   }
  



    }



  setInterval( mudaslide,900) 

   
    
  

   

  





   








