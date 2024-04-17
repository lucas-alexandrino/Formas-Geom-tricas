function calcularArea() {
    const raio = parseFloat(document.getElementById('raio').value);
    const area = Math.PI * Math.pow(raio, 2);
    document.getElementById('resultado').innerText = `A área do círculo é ${area.toFixed(2)}`;
}

function calcularAreaQuadrado() {
    // Calcula a área do quadrado usando a fórmula: lado * lado
    const lado = parseFloat(document.getElementById('lado').value);
    const area = lado * lado;
    document.getElementById('resultado').innerText = `A área do quadrado é ${area.toFixed(2)}`;
    
}