var sonido = new Audio();
sonido.src = `./sonido.mp3`;
function suma() {
    sonido.play();
    let numeroUno = parseInt( document.getElementById('txtnumerouno').value);
    let numeroDos= parseInt(document.getElementById('txtnumerodos').value);
    let sumando;
    sumando = numeroUno + numeroDos;
    document.getElementById('resultado').innerHTML = '<strong><h4>'+sumando+'</h4></strong>'+`
    <style>
        #resultado{
        background-color:rgb(165, 37, 37);
        box-shadow: 3px 3px 20px;
        }
    </style>
    `;
    return false;
}
