function areas(lado) {
    let lado1=lado
    let area1= lado1*lado1;
    return area1;
}

function areask() {
    let pnumero1= parseInt(document.getElementById('txtcuadrado1').value);
    document.getElementById('resultado1').innerHTML = '<p style="margin-top: 63px; margin-left:12px;">' + pnumero1 + '</p> <div class="pd"><div id="cuadrado1"><p style="margin-top: 30px;">' + areas(pnumero1) + '</p></div><p style="margin-left:30px; margin-top:10px;">' + pnumero1 + '</p></div>';

    let pnumero2= parseInt(document.getElementById('txtcuadrado2').value);
    document.getElementById('resultado2').innerHTML = '<p style="margin-top: 63px; margin-left:12px;">' + pnumero2 + '</p> <div class="pd"><div id="cuadrado2"><p style="margin-top: 30px;">' + areas(pnumero2) + '</p></div><p style="margin-left:30px; margin-top:10px;">' + pnumero2 + '</p></div>';

    let pnumero3= parseInt(document.getElementById('txtcuadrado3').value);
    document.getElementById('resultado3').innerHTML = '<p style="margin-top: 63px; margin-left:12px;">' + pnumero3 + '</p> <div class="pd"><div id="cuadrado3"><p style="margin-top: 30px;">' + areas(pnumero3) + '</p></div><p style="margin-left:30px; margin-top:10px;">' + pnumero3 + '</p></div>';
    mayor_o_igual(pnumero1,pnumero2,pnumero3);
    return false
}
var sonido = new Audio();
sonido.src= `./sonido.mp3`;

function mayor_o_igual(ladoCuadrado1,ladoCuadrado2,ladoCuadrado3) {
    sonido.play();
    let pnumero1=ladoCuadrado1;
    let pnumero2=ladoCuadrado2;
    let pnumero3=ladoCuadrado3;
    if (areas(pnumero1)==areas(pnumero2)&areas(pnumero2)==areas(pnumero3)&areas(pnumero3)==areas(pnumero1)){
        document.getElementById('resultado1').innerHTML+='<p style="margin-top: 63px;">Las 3 areas son iguales</p>';
        document.getElementById('resultado2').innerHTML+='<p style="margin-top: 63px;">Las 3 areas son iguales</p>';
        document.getElementById('resultado3').innerHTML+='<p style="margin-top: 63px;">Las 3 areas son iguales</p>';
    } else if (areas(pnumero1)>areas(pnumero2) & areas(pnumero1)>areas(pnumero3)) {
       document.getElementById('resultado1').innerHTML+='<p style="margin-top: 63px;">El primero tiene un <br> area mayor</p>';
    } else if (areas(pnumero2)>areas(pnumero1) & areas(pnumero2)>areas(pnumero3)) {
       document.getElementById('resultado2').innerHTML+='<p style="margin-top: 63px;">El segundo tiene un <br> area mayor</p>';
    } else{
       document.getElementById('resultado3').innerHTML+='<p style="margin-top: 63px;">El tercero tiene un <br> area mayor</p>';
    }
}


