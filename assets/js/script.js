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

function calcularAreaCubo() {
    // Calcula a área do cubo usando a fórmula: 6 * (lado * lado)
    const lado = parseFloat(document.getElementById('lado').value);
    const area = 6 * (lado * lado);
    document.getElementById('resultado').innerText = `A área do cubo é ${area.toFixed(2)}`;
}

function calcularAreaRetangulo() {
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const area = base * altura;
    document.getElementById('resultado').innerText = `A área do retângulo é ${area.toFixed(2)}`;
}