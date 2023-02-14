           var Vides ="7";
           var Paraula ="";
           var Lletra ="";   

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
      document.getElementById("ahorcado_6").hidden = true;
      document.getElementById("ahorcado_5").hidden = true;
      document.getElementById("ahorcado_4").hidden = true;
      document.getElementById("ahorcado_3").hidden = true;
      document.getElementById("ahorcado_2").hidden = true;
      document.getElementById("ahorcado_1").hidden = true;
      document.getElementById("ahorcado_0").hidden = true;
      
  }


function AturaTot(){
    document.getElementById("Lletra").disabled = true; 
    document.getElementById("Comprovar").disabled = true; 
    document.getElementById("Segons").hidden = true; 
}
 
