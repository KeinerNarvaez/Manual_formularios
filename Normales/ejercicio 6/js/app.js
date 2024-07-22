var sonido = new Audio();
sonido.src= `./sonido.mp3`;
function promedio() {
    sonido.play()
    let numero1 = parseInt( document.getElementById('txtnumero1').value);
    let numero2 = parseInt( document.getElementById('txtnumero2').value);
    let numero3 = parseInt( document.getElementById('txtnumero3').value);

    porcentaje1= (numero1*0.3)/100;
    porcentaje2= (numero2*0.3)/100;
    porcentaje3= (numero3*0.4)/100;
    resultado = (porcentaje1+porcentaje2+porcentaje3)
    document.getElementById('resultado').innerHTML = '<strong>Primer porcentaje: '+porcentaje1+'<br>Segundo porcentaje: '+porcentaje2+'<br>Tercer porcentaje: '+porcentaje3+'</strong><hr><strong>'+"El suma de los porcentajes: "+resultado+'</strong>';
    return false;
}
