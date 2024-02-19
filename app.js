/*

const readline = require("readline")

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Calculadora')

leitor.question('Qual operação deseja efetuar (+, -, *, /)?\n', (oper) => {
    const valor1 = parseFloat(readlineSync.question('Insira o primeiro número: '));
    const valor2 = parseFloat(readlineSync.question('Insira o segundo número: '));

    function calcular(operacao, num1, num2) {
        switch (operacao) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                if (num2 !== 0) {
                    return num1 / num2;
                } else {
                    console.log('Não é possível dividir por zero.');
                    process.exit(1);
                }
            default:
                console.log('Operação inválida.');
                process.exit(1);
        }
    }

    const resultado = calcular(oper, valor1, valor2);
    console.log(`O resultado é: ${resultado}`);
    leitor.close();
});
*/


var n1 = 1
var n2 = 2

console.log('Vek Stories')
console.log('Resultado: ' + (n1 + n2))

if(n1+n2 < 10){
    console.log('menor q 10')
}
else{
    console.log('maior q 10')
}

console.log("preciso estudar C#")