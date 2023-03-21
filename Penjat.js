    
    
    // variables
    
    var Vides ="7";
    var Paraula ="";
    var Lletra ="";   
    var paraules = ["fetge", "força", "jutges", "jutjat", "mengen", "penjat", "quinta", "setze"];             
    var Paraula = paraules[Math.floor(Math.random()* paraules.length)];           
    var pos = Paraula.indexOf(Lletra);              
    var endevinades = []; 
    for (var i = 0; i < Paraula.lengt; i++){
        i = "_"
        
    }
    
     function Comprovar(){
      var Lletra = document.getElementById("Lletra").value; 

      if ((Lletra >= "a") && (Lletra <= "m")){
        document.getElementById("resultat").innerHTML = "encert"; 
                alert('Lletra' + " has encert "); }

      else {  

        document.getElementById("resultat").innerHTML = "fallat";
        window.alert('Lletra' + " has fallat ");
        }
        
        }
            
            
    
         
function AmagaImg() {
      document.getElementById("ahorcado_0").hidden = true;
      document.getElementById("ahorcado_1").hidden = true;
      document.getElementById("ahorcado_2").hidden = true;
      document.getElementById("ahorcado_3").hidden = true;
      document.getElementById("ahorcado_4").hidden = true;
      document.getElementById("ahorcado_5").hidden = true;
      document.getElementById("ahorcado_6").hidden = true;
      
  }

function AturaTot(){
    document.getElementById("Lletra").disabled = true; 
    document.getElementById("Comprovar").disabled = true; 
    document.getElementById("Segons").hidden = true; 
}
 
         