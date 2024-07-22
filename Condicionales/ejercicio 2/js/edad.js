function calculateAge(birthdate) {
    const today = new Date();
    let age = today .getFullYear() - birthdate.getFullYear();
    const monthdiff = today.getMonth() - birthdate.getFullYear();
    if (monthdiff < 0 || (monthdiff === 0 && today.getDate() < birthdate.getFullYear())) {
      age--;   
    }
    return age;
}
var sonido = new Audio();
sonido.src= `./sonido.mp3`;
function calcularedad() {
    sonido.play();
    const  fecha =new Date(document.getElementById('textofecha').value);
    const eda =calculateAge(fecha);
    let tipoedad;
    if (eda>17){
        tipoedad="eres mayor de edad";    
    }else{
        tipoedad="eres menor de edad";
    }
    imagen()
    document.getElementById('resultado').innerHTML = '<strong>Tienes '+eda+' años, '+tipoedad+'</strong>';
    return false;
}

function imagen() {
    const  fecha =new Date(document.getElementById('textofecha').value);
    const eda =calculateAge(fecha);
    let edad
    if (eda>=1 & eda<=12){
        edad=document.getElementById('imagen').innerHTML= '<img src="./img/niño.webp" alt="">'
    } else if (eda>=13 & eda<=17) {
        edad=document.getElementById('imagen').innerHTML='<img src="./img/joven.png" alt="">'
    } else if (eda>=18 & eda<=27) {
        edad=document.getElementById('imagen').innerHTML='<img src="./img/adulto.png" alt="">'
    } else if (eda>=28 ) {
        edad=document.getElementById('imagen').innerHTML='<img src="./img/adulto2.png" alt="">'
    } else {
        edad=document.getElementById('imagen').innerHTML='Tu edad no corresponde a ninguna imagen'
    }
    return edad;
}