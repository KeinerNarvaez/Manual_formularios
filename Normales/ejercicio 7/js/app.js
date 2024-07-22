var sonido = new Audio();
sonido.src= `./sonido.mp3`;
function areaRectangulo(){
    sonido.play();
    let pnumeroUno= parseInt(document.getElementById('txtlador').value);
    let pnumeroDos = parseInt(document.getElementById('txtbaser').value);
    let areaRectangulo;
      areaRectangulo = pnumeroUno * pnumeroDos; 
      document.getElementById('resultado3').innerHTML = '<p style="margin-top: 63px; margin-left:90px;">'+pnumeroUno+'</p><div class="pd"><div id="rectangulo"><p style="margin-top: 30px;">'+areaRectangulo+'</p></div><p style="margin-left:45px; margin-top:10px;">'+pnumeroDos+'</p></div>';  
      return false;
  }
function areaTriagulo(){
    sonido.play();
    let pnumeroUno= parseInt(document.getElementById('txtladot').value);
    let pnumeroDos = parseInt(document.getElementById('txtbaset').value);
    let areaTriagulo;
    areaTriagulo = (pnumeroUno * pnumeroDos)/2;
    document.getElementById('resultado2').innerHTML='<p style="margin-top: 63px; margin-left:130px">'+pnumeroUno+'</p><div class="pd"><div id="triangulo"><p style="padding-top:60px;">'+areaTriagulo+'</p></div><p style="margin-left:22px; margin-top:10px;">'+pnumeroDos+'</p></div>'
    return false;
    }
    function areaCuadrado(){
        sonido.play();
        let pnumeroUno= parseInt(document.getElementById('txtcuadrado').value);
        let areaCuadrado;
        areaCuadrado = pnumeroUno * pnumeroUno;
        document.getElementById('resultado1').innerHTML = '<p style="margin-top: 63px; margin-left:120px;">' + pnumeroUno + '</p> <div class="pd"><div id="cuadrado"><p style="margin-top: 30px;">' + areaCuadrado + '</p></div><p style="margin-left:30px; margin-top:10px;">' + pnumeroUno + '</p></div>';
        return false;
    }
        
  
