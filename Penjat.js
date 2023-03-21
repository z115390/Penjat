    
    
    // variables
    
    var Vides ="7";
    var Paraula ="";
    var Lletra ="";   
    var paraules = ["cordes","fetge", "força", "jutges", "jutjat", "mengen", "penjat", "quinta", "setze"];             
    var Paraula = paraules[Math.floor(Math.random()* paraules.length)]; 
    var Lletres = ["_","_","_","_","_","_","_"]
    var pistes = ["A la quinta forca", "A ca un penjat, no hi anomenis cordes", "Setze jutges d'un jutjat mengen fetge d'un penjat"];
    var paraulespistes = [1, 2, 0, 2, 2, 2, 1, 0, 2];
    var Punts = "0"; 
    var endevinades = [];
    var pos = Paraula.indexOf(Lletra);   
    for (var i = 0; i < Paraula.lengt; i++){
    }
        var taula = [
                {"paraula"; "cordes", "pista"; "A ca un penjat, no hi anomenis cordes"},
                {"paraula"; "fetge", "pista"; "Setze jutges d'un jutjat mengen fetge d'un penjat"},
                {"paraula"; "forca", "pista"; "A la quinta forca"},
                {"paraula"; "jutges", "pista"; "Setze jutges d'un jutjat mengen fetge d'un penjat"},
                {"paraula"; "jutjat", "pista"; "Setze jutges d'un jutjat mengen fetge d'un penjat"},
                {"paraula"; "mengen", "pista"; "Setze jutges d'un jutjat mengen fetge d'un penjat"},
                {"paraula"; "penjat", "pista"; "Setze jutges d'un jutjat mengen fetge d'un penjat"},
                {"paraula"; "quinta", "pista"; "A la quinta forca"},
                {"paraula"; "setze", "pista"; "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        ];
    
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
 
         