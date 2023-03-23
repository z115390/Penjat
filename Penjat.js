    
    
    // variables
    var Vides =7;
    var Paraula ="";
    var Lletra ="";              
    var Paraula = paraules[Math.floor(Math.random()* paraules.length)]; 
    var Lletres = ["_","_","_","_","_","_","_"];
    var Punts = 0; 
    var endevinades = [];
    
    var pistes = ["A la quinta forca", "A ca un penjat, no hi anomenis cordes", "Setze jutges d'un jutjat mengen fetge d'un penjat"];
    var paraules = ["cordes","fetge", "força", "jutges", "jutjat", "mengen", "penjat", "quinta", "setze"]; 
    var paraulespistes = [1, 2, 0, 2, 2, 2, 1, 0, 2];
    
   
   
        var taula = [
                {"paraula": "cordes", "pista": "A ca un penjat, no hi anomenis cordes"},
                {"paraula": "fetge", "pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
                {"paraula": "forca", "pista": "A la quinta forca"},
                {"paraula": "jutges", "pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
                {"paraula": "jutjat", "pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
                {"paraula": "mengen", "pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
                {"paraula": "penjat", "pista": "A ca un penjat, no hi anomenis cordes"},
                {"paraula": "quinta", "pista": "A la quinta forca"},
                {"paraula": "setze", "pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"}
        ];
        

    //escoger palabra aleatoriamente
    var aleatori = Math.floor(Math.random() * paraules.length);
    var paraula = paraules[aleatori];
    var pista = pistes[paraulespistes[aleatori]];
    
    //objectos
    var paraula = taula[aleatori].paraula;
    var pista = taula[aleatori].pista;
    
    //marcamos cada letra "_"
    for (var i = 0; i < Paraula.lengt; i++){
        Paraula[i] = "_";
    }
    
    
    function Comprovar() {
        // alert("Comprovar");
        var Lletra = document.getElementById("Lletra").value;

        if ((Lletra >= "a") && (Lletra <= "m")) {
            document.getElementById("Paraula").innerHTML = "encert";
            window.alert('Lletra' + " has encert ");
        } else {
            document.getElementById("Lletres").innerHTML = "fallat";
            window.alert('Lletra' + " has fallat ");
            Vides--;
            document.getElementById("Vides").innerHTML = Vides; 
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
 
         