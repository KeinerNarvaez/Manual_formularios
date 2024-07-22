var sonido = new Audio();
sonido.src= `./sonido.mp3`;
function parhasta5() {
    sonido.play();
    let num1=parseInt(document.getElementById('texto').value);
    let num2=5;
    document.getElementById('resultado').innerHTML=``;
    for (num1 ; num1 <= num2; num1++) {
        let resultado=num1 * 9;
        if (resultado%2==0) {
            document.getElementById('resultado').innerHTML+="<h4>9X"+num1+"="+resultado+` es par</h4>
            <hr>
            <style>
            #resultado{
            background-color:rgb(165, 37, 37);
            box-shadow: 3px 3px 20px;
            }
            </style>`
        } else{
            document.getElementById('resultado').innerHTML+="<h4>9X"+num1+"="+resultado+` es impar</h4>
            <hr>
            <style>
            #resultado{
            background-color:rgb(165, 37, 37);
            box-shadow: 3px 3px 20px;
            }
            </style>`;
        }
    }
    return false
}
