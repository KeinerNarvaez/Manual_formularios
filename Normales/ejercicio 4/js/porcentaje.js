var sonido = new Audio();
sonido.src = `./sonido.mp3`;
function porcentajes() {
    sonido.play();
    let porcentaje;
    let num = parseInt(document.getElementById('txtnumeroUno').value);
    porcentaje= num/100;
    document.getElementById('resultado').innerHTML='<strong><h4>El porcentaje de '+num+' es: '+porcentaje+'</h4></strong>' +`
        <style>
        #resultado{
        background-color:rgb(165, 37, 37);
        box-shadow: 3px 3px 20px;
        }
        </style>`; 
    return false;
}

