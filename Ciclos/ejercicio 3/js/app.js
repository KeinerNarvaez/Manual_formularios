var sonido = new Audio();
sonido.src= `./sonido.mp3`;
function tabladel5() {
    sonido.play();
    let tabl=parseInt(document.getElementById('texto').value);
    let resultado;
    document.getElementById('resultado').innerHTML=''
    for (tabl; tabl <= 5; tabl++) {
       resultado=5 * tabl
         document.getElementById('resultado').innerHTML+=`
         <h4>`+5+"X"+tabl+"="+resultado+`</h4>
         <hr>
            <style>
            #resultado{
            background-color:rgb(165, 37, 37);
            box-shadow: 3px 3px 20px;
            }
        </style>
         `;
        
    }
    return false
}

