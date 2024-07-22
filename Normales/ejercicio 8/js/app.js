var sonido = new Audio();
sonido.src= `./sonido.mp3`;
function salario2(dias, valordia) {
    let diask = dias;
    let vdias = valordia;
    let total_salario = diask * vdias;
    return total_salario;
  }
  
  function subtrans2(dias, valordia) {
    let salarioMin = 1300000;
    let salariotrans = salario2(dias, valordia);
    let subtransporte;
    if (salariotrans <= 2 * salarioMin) {
      subtransporte = 114000;
    } else {
      subtransporte = 0;
    }
    return subtransporte;
  }
  
  function salud2(dias, valordia) {
    let pago_salud = salario2(dias, valordia) * 0.12;
    return pago_salud;
  }
  
  function pension2(dias, valordia) {
    let pago_pension = salario2(dias, valordia) * 0.16;
    return pago_pension;
  }
  
  function deducible2(dias, valordia) {
    let pago_deducible = pension2(dias, valordia) + salud2(dias, valordia);
    return pago_deducible;
  }
  
  function arl2(dias, valordia) {
    let pago_arl = salario2(dias, valordia) * 0.052;
    return pago_arl;
  }
  
  function pagototal2(dias, valordia) {
    let pago_total = salario2(dias, valordia) + deducible2(dias, valordia);
    return pago_total;
  }
  
  function nomina() {
  sonido.play()
    let dias = parseFloat(document.getElementById('txtdias').value);
    let valordia = parseFloat(document.getElementById('txtvalordia').value);
    let total_salario = salario2(dias, valordia);
    let deducibles = deducible2(dias, valordia);
    let pago_total = pagototal2(dias, valordia);
    let pago_salud = salud2(dias,valordia);
    let pago_pension = pension2(dias,valordia);
    document.getElementById('resultado').innerHTML = `
      <strong>Total salario: ${total_salario}</strong><br>
      <strong>Pago de salud: ${pago_salud}</strong><br>
      <strong>Pago pensión: ${pago_pension}</strong><br>
      <strong>Deducible: ${deducibles}</strong><br>
      <strong>ARL: ${arl2(dias, valordia)}</strong><hr>
      <strong>Pago total: ${pago_total}</strong>
    `; 
    return false;
}
