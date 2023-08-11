var readline = require('readline');
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDeDados.question('Digite o primeiro número: ', function (numero1) {
    entradaDeDados.question('Digite o segundo número: ', function (numero2) {
        entradaDeDados.question('Digite a operação (+, -, *, /): ', function (operacao) {
            var resultado;

            if (operacao === "+") {
                resultado = parseFloat(numero1) + parseFloat(numero2);
            } else if (operacao === "-") {
                resultado = parseFloat(numero1) - parseFloat(numero2);
            } else if (operacao === "*") {
                resultado = parseFloat(numero1) * parseFloat(numero2);
            } else if (operacao === "/") {
                resultado = parseFloat(numero1) / parseFloat(numero2);
            } else {
                resultado = "Operação inválida";
            }

            console.log('Resultado: ' + resultado);
            entradaDeDados.close();
        });
    });
});