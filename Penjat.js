<!DOCTYPE html>
<html>
    <head>
        <title>Versió amb Imatges i Sons Joc del Penjat</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="penjat.css">
        <script src="penjat.js"></script>
   
    <script>
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
            
function AmagaImg() {
      document.getElementById("ahorcado_6").hidden = true;
      document.getElementById("ahorcado_5").hidden = true;
      document.getElementById("ahorcado_4").hidden = true;
      document.getElementById("ahorcado_3").hidden = true;
      document.getElementById("ahorcado_2").hidden = true;
      document.getElementById("ahorcado_1").hidden = true;
      document.getElementById("ahorcado_0").hidden = true;
      document.getElementById("ahorcado").hidden = true;
      
  }
    </script>
     </head>

    <body>
        <h1>Prototip Joc del Penjat</h1>
        <input id="Lletra" type="text"
         placeholder="Escriu una lletra minúscula"/>
        <button onclick="Comprovar()">Comprovar</button>
             <h2>Paraula</h2>
             <div id="Paraula">_ _ _ _ _ _ _</div>
             <h2>Vides</h2>
             <div id="Vides">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_</div>
             <h2>Lletres</h2> 
        </div>
        <footer>
           <p><strong>Crèdits:
            <a href="https://prosselloe.wordpress.com/2022/11/22/el-joc-del-penjat-on-scratch/">El joc del penjat on Scratch</a>
           </p>
        </footer>

        <img src="img/ahorcado.jpg" alt=""/>
        <img src="img/ahorcado_0.png" alt=""/>
        <img src="img/ahorcado_1.png" alt=""/>
        <img src="img/ahorcado_2.png" alt=""/>
        <img src="img/ahorcado_3.png" alt=""/>
        <img src="img/ahorcado_4.png" alt=""/>
        <img src="img/ahorcado_5.png" alt=""/>
        <img src="img/ahorcado_6.png" alt=""/>
        
</html>


