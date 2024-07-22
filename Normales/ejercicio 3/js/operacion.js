var sonido = new Audio();
sonido.src = `./sonido.mp3`;
function operacion() {
    sonido.play()
    let numeroUno = parseInt(document.getElementById('txtnumerouno').value);
    let numeroDos = parseInt(document.getElementById('txtnumerodos').value);
    let resta;
    let multi;
    let divi;
    let suma; 
    if (document.getElementById('txtsimbolo').value === "-") {
        resta = numeroUno - numeroDos;
        document.getElementById('resultado').innerHTML = '<hr><strong>La resta de los numero son: ' + resta + '</strong><hr>';
    } else if (document.getElementById('txtsimbolo').value === "x") {
        multi = numeroUno * numeroDos;    
        document.getElementById('resultado').innerHTML = '<hr><strong>La multiplicacion de los numeros son: ' + multi + '</strong><hr>';
    } else if (document.getElementById('txtsimbolo').value === "/") {
        divi = numeroUno / numeroDos;
        document.getElementById('resultado').innerHTML = '<hr><strong>La division de los dos numeros son: ' + divi + '</strong><hr>';
    } else if (document.getElementById('txtsimbolo').value === "+") {
        suma = numeroUno + numeroDos;
        document.getElementById('resultado').innerHTML = '<hr><strong>La suma de los dos numeros son: ' + suma + '</strong><hr>';
    }else {
        document.getElementById('resultado').innerHTML = '<hr><strong>La operacion no se puede realizar </strong><hr>';
    }
    return false;
}
