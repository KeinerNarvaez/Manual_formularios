var sonido = new Audio();
sonido.src= `./sonido.mp3`;
function fs() {
    sonido.play();
    let num1 = parseInt(document.getElementById('txtnumerouno').value);
    let num2 = parseInt(document.getElementById('txtnumerodos').value);
    if (num1==num2) {
        document.getElementById('resultado').innerHTML="<hr>Los números "+num1 +" y "+num2+" son iguales<hr>";
        document.getElementById('imagen').innerHTML='<img src="./img/889221.png" >'
    }else if (num1>num2) {
        document.getElementById('resultado').innerHTML="<hr>El número "+num1+" es mayor. <br>Primer valor es mayor<hr>";
        document.getElementById('imagen').innerHTML='<img src="./img/numero1.gif" >'
    }else{
        document.getElementById('resultado').innerHTML="<hr>El número "+num2+" es mayor <br>Segundo valor es mayor<hr>";
        document.getElementById('imagen').innerHTML='<img src="./img/numero2.webp" >'
    }
    return false;
}

