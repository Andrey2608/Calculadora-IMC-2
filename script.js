function calcularIMC() {
    const altura = parseFloat(document.getElementById("altura").value) / 100; // Convertir altura a metros
    const peso = parseFloat(document.getElementById("peso").value);
    const imc = peso / (altura * altura);
  
    let estado = "";
    if (imc < 18.5) {
      estado = "Bajo de peso";
    } else if (imc < 24.9) {
      estado = "Normal";
    } else if (imc < 29.9) {
      estado = "Sobrepeso";
    } else {
      estado = "Obeso";
    }
  
    document.getElementById("resultado").textContent = `Tu IMC es: ${imc.toFixed(2)}`;
    document.getElementById("estado").textContent = `Estado: ${estado}`;
  }