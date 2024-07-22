function calculateAge(birthdate) {
    const today = new Date();
    let age = today .getFullYear() - birthdate.getFullYear();
    const monthdiff = today.getMonth() - birthdate.getFullYear();
    if (monthdiff < 0 || (monthdiff === 0 && today.getDate() < birthdate.getFullYear())) {
      age--;   
    }
    return age;
}

function edad(eda) {
    let tipoedad;
    if (eda>17){
        tipoedad="es mayor de edad";    
    }else{
        tipoedad="es menor de edad";
    }
    document.getElementById('resultado').innerHTML+= '<strong>Tiene '+eda+' años, '+tipoedad+'</strong> <br>';
}

function promedio(edad1,edad2,edad3) {
    let promedio = edad1+edad2+edad3;
    if (promedio>17) {
        document.getElementById('resultado').innerHTML+='<hr>El promedio cumple con la mayoria de edad';
        document.getElementById('imagen').innerHTML= '<img src="./img/pulgararriba.png" alt="">'; 
    } else {
        document.getElementById('resultado').innerHTML+='<hr>El promedio no comple con la mayoria de edad <hr>';
        document.getElementById('imagen').innerHTML= '<img src="./img/pulgarabajo.png" alt="">';
    }
}
var sonido = new Audio();
sonido.src= `./sonido.mp3`;
function calcularedad() {
    sonido.play();
    document.getElementById('resultado').innerHTML='';
    const  fecha1=new Date(document.getElementById('textofecha1').value);
    const  fecha2=new Date(document.getElementById('textofecha2').value);
    const  fecha3=new Date(document.getElementById('textofecha3').value);
    const eda1 =calculateAge(fecha1);
    const eda2 =calculateAge(fecha2);
    const eda3 =calculateAge(fecha3);
    edad(eda1);
    edad(eda2);
    edad(eda3);
    promedio(eda1,eda2,eda3);
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