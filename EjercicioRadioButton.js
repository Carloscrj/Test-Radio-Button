

 function corregir(){
   var cuentaVerdaderos = 0;
   var cuentaFalsos = 0;
   respuestas = document.getElementsByTagName("input");
   var nombre = document.getElementById("nombre").value;
   var apellidos = document.getElementById("apellidos").value;
   var totalRespuestas=5;  
   var totalBlanco=0;
   var cuentaMarcadas = 0;

   if(nombre == "") {
      alert("El campo nombre no puede estar vacío");
   } else if(apellidos == "") {
      alert("El campo apellidos no pueden estar vacíos");
   }else{

     for(i=0;i<respuestas.length;i++){
        
         if(respuestas[i].type == "radio" && respuestas[i].checked && respuestas[i].value=="verdadero"){
            cuentaVerdaderos++;
            cuentaMarcadas++;
         }else if(respuestas[i].type == "radio" && respuestas[i].checked && respuestas[i].value=="falso"){
             cuentaFalsos++;
             cuentaMarcadas++;
        
         }
      }

      totalBlanco= totalRespuestas-cuentaMarcadas;
    
 
      alert("Número de respuestas correctas: " + cuentaVerdaderos +
           "\nNúmero de respuestas incorrectas: " + cuentaFalsos +
           "\nNúmero de respuestas blanco: " + totalBlanco);

    

 }

}
    
    


 