    
    
    // variables
    var Vides =7;
    // var Paraula ="";
    var Endevinades = [];
    var Lletres = ["_","_","_","_","_","_","_"];
    var Lletra = "";              
    // var Paraula = paraules[Math.floor(Math.random()* paraules.length)]; 
    var Punts = 0; 
    
    var pistes = ["A la quinta forca", 
        "A ca un penjat, no hi anomenis cordes", 
        "Setze jutges d'un jutjat mengen fetge d'un penjat"];
    var paraules = ["cordes",
        "fetge", "força", "jutges", 
        "jutjat", "mengen", "penjat", 
        "quinta", "setze"]; 
    var paraulespistes = [1, 2, 0, 2, 2, 2, 1, 0, 2];
    
   
   
        var taula = [
              {"paraula": "cordes", "pista": "A ca un penjat, no hi anomenis cordes"},
              {"paraula": "fetge",  "pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
              {"paraula": "forca",  "pista": "A la quinta forca"},
              {"paraula": "jutges", "pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
              {"paraula": "jutjat", "pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
              {"paraula": "mengen", "pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
              {"paraula": "penjat", "pista": "A ca un penjat, no hi anomenis cordes"},
              {"paraula": "quinta", "pista": "A la quinta forca"},
              {"paraula": "setze",  "pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"}
        ];
        

    //escoger palabra aleatoriamente
    var aleatori = Math.floor(Math.random() * paraules.length);
    var paraula = paraules[aleatori];
    var pista = pistes[paraulespistes[aleatori]];
    
    //objectos
    var paraula = taula[aleatori].paraula;
    var pista = taula[aleatori].pista;
    
    //marcamos cada letra "_"
    for (var i = 0; i < paraula.length; i++){
        Endevinades[i] = "_";
    }
    
    
    function Comprovar() {
        alert(paraula);
        var Lletra = document.getElementById("Lletra").value;
        
        var pos = paraula.indexOf(Lletra);
        if (pos > -1) {
            
           for (var i = pos; i < paraula.length; i++) {
               if (paraula[i] == Lletra) {
                   Endevinades[i]= Lletra;
               }  
           }
           
       
            document.getElementById("Paraula").innerHTML = Endevinades;
            window.alert('Lletra' + " has encert ");
            document.getElementById("miau").play ();
            
        } else {
         
           document.getElementById("ahorcado_6").hidden = false;
           document.getElementById("ahorcado_5").hidden = true; 
           document.getElementById("ahorcado_4").hidden = false;
           document.getElementById("ahorcado_3").hidden = true;
           document.getElementById("ahorcado_2").hidden = false;
           document.getElementById("ahorcado_1").hidden = true;
           ocument.getElementById("ahorcado_0").hidden = false;
           
           window.alert('Lletra' + " has fallat ");
           document.getElementById("boom_cloud").play ();
           Lletres[7 - Vides] = Lletra;
           document.getElementById("Lletres").innerHTML = Lletres;
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
    
    
     config = {
            locateFile: file => `https://sql.js.org/dist/${file}`
            // locateFile: filename => `https://unpkg.com/sql.js@1.6.2/dist/${filename}`
        };
        // The `initSqlJs` function is globally provided by all of the main dist files if loaded in the browser.
        // We must specify this locateFile function if we are loading a wasm file from anywhere other than the
        // current html page's folder.
        alasql('ATTACH SQLITE DATABASE penjat("db/penjat.db"); USE penjat; \n\
                SELECT * FROM TblTextosGUI;',
        //     [], function(idiomes) {Print_Data(idiomes = idiomes.pop());}
            [], function(idiomes) {Idiomes = idiomes.pop();}
        );
        //window.alert(IdIdiomes)[0].Versio)
        if (Idiomes.length == 0) {Idiomes = Idiomes_dft;};
}

 
   
    
        