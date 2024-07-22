var sonido = new Audio();
sonido.src = `./sonido.mp3`;

function saludar(){
    sonido.play();
    let saludo;
    saludo = document.getElementById('texto').value;
    document.getElementById('resultado').innerHTML =`<strong><h4>`+saludo+`</h4></strong> <hr>
        <style>
        #resultado{
        background-color:rgb(165, 37, 37);
        box-shadow: 3px 3px 20px;
        }
        </style>`;
    
    return false;
}