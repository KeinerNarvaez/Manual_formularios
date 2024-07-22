var sonido = new Audio();
sonido.src= `./sonido.mp3`;
function contar1a5(contando) {
    sonido.play();
    contando=parseInt(document.getElementById('texto').value);
    document.getElementById('resultado').innerHTML=``;
    for (contando; contando <=5; contando++) {
        if(contando % 2==0){
            document.getElementById('resultado').innerHTML+=`
            <h4>` +contando+` es par</h4>
            <hr> 
            <style>
            #resultado{
            background-color:rgb(165, 37, 37);
            box-shadow: 3px 3px 20px;
            }
            </style>`
        }else{
            document.getElementById('resultado').innerHTML+=`
            <h4>`+ contando+ ` es impar </h4>
            <hr>
            <style>
            #resultado{
            background-color:rgb(165, 37, 37);
            box-shadow: 3px 3px 20px;
            }
            </style>`
        } 
        }
    return false
}

