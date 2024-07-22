function porcentajes(not1,not2,not3) {
    let suma=porcentaje1(not1)+porcentaje2(not2)+porcentaje3(not3);
    return suma;
 }
 
 function porcentaje1(nota1) {
    let porcen1=nota1*0.2;
    return porcen1;
 }
 function porcentaje2(nota2) {
    let porcen2=nota2*0.35;
    return porcen2;
 }
 function porcentaje3(nota3) {
    let porcen3=nota3*0.45;
    return porcen3;
 }
 var sonido = new Audio();
 sonido.src= `./sonido.mp3`;
 function resultado() {
   sonido.play();
    let nota1=parseInt(document.getElementById('txtNotaUno').value);
    let nota2=parseInt(document.getElementById('txtNotaDos').value);
    let nota3=parseInt(document.getElementById('txtNotaTres').value);


    
    if (porcentajes(nota1,nota2,nota3)>4.5) {
       document.getElementById('resultado').innerHTML="<strong>la nota es superior </strong><br>";
    } else if (porcentajes(nota1,nota2,nota3)<=4.5 & porcentajes(nota1,nota2,nota3)>3.5) {
       document.getElementById('resultado').innerHTML="<strong>la nota es buena </strong> <br>";
    } else if (porcentajes(nota1,nota2,nota3)<=3.5 & porcentajes(nota1,nota2,nota3) >=3.0){
       document.getElementById('resultado').innerHTML="<strong>la nota es medio </strong><br>";
    } else{
       document.getElementById('resultado').innerHTML="<strong>la nota es mala </strong><br>";
    }
        
    document.getElementById('resultado').innerHTML+="El primer porcentaje es: "+porcentaje1(nota1) +'<br>';
    document.getElementById('resultado').innerHTML+="El segundo porcentaje es: "+porcentaje2(nota2)+ '<br>';
    document.getElementById('resultado').innerHTML+="El tercer porcentaje es: "+porcentaje1(nota3)+'<br>';
    document.getElementById('resultado').innerHTML+="<hr> La suma de los porcentajes es: "+porcentajes(nota1,nota2,nota3)+'<hr>';
    return false;
 }
 
  
