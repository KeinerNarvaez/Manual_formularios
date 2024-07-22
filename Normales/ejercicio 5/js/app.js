var sonido = new Audio();
sonido.src = `./sonido.mp3`;
function promedio() {
    sonido.play()
    let numero1 = parseInt( document.getElementById('txtnumero1').value);
    let numero2 = parseInt( document.getElementById('txtnumero2').value);
    let numero3 = parseInt( document.getElementById('txtnumero3').value);

    resultado = (numero1+numero2+numero3)/3
    document.getElementById('resultado').innerHTML = '<strong>'+"El promedio de las tres nostas son: "+resultado+'</strong>'+`
    <style>
    #resultado{
    background-color:rgb(165, 37, 37);
    box-shadow: 3px 3px 20px;
    }
    </style>`;
    return false;
}
