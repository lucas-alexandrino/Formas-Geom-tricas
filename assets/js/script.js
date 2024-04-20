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

function calcularAreaCuboide() {
    const comprimento = parseFloat(document.getElementById('comprimento').value);
    const largura = parseFloat(document.getElementById('largura').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const area = 2 * (comprimento * largura + comprimento * altura + largura * altura);
    document.getElementById('resultado').innerText = `A área do Cubóide é ${area.toFixed(2)}`;
}

function calcularAreaPoligonoRegular() {
    const lados = parseFloat(document.getElementById('lados').value);
    const lado = parseFloat(document.getElementById('lado').value);
    const apotema = parseFloat(document.getElementById('apotema').value);
    const area = (lados * lado * apotema) / 2;
    document.getElementById('resultado').innerText = `A área do Polígono Regular é ${area.toFixed(2)}`;
}

function calcularAreaRomboedro() {
    const diagonalMaior = parseFloat(document.getElementById('diagonalMaior').value);
    const diagonalMenor = parseFloat(document.getElementById('diagonalMenor').value);
    const area = (diagonalMaior * diagonalMenor) / 2;
    document.getElementById('resultado').innerText = `A área do Romboedro é ${area.toFixed(2)}`;
}

function calcularAreaTrapezoideIrregular() {
    const baseMaior = parseFloat(document.getElementById('baseMaior').value);
    const baseMenor = parseFloat(document.getElementById('baseMenor').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const area = ((baseMaior + baseMenor) * altura) / 2;
    document.getElementById('resultado').innerText = `A área do Trapezóide Irregular é ${area.toFixed(2)}`;
}