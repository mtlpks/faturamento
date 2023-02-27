const fs = require('fs');

let rawdata = fs.readFileSync('dados.json');
let faturamento = JSON.parse(rawdata);
let diaMaiorValor, diaMenorValor;
let maiorValor = 0;
let menorValor = 0;
let soma = 0;
let quantidadeDeDias = 0;
let diasAcimaDaMedia = 0;
for (const prop in faturamento) {
    if (menorValor == 0 || menorValor > faturamento[prop]['valor']) {
        menorValor = faturamento[prop]['valor'];
        diaMenorValor = faturamento[prop]['dia'];
    }
    if (maiorValor < faturamento[prop]['valor']) {
        maiorValor = faturamento[prop]['valor'];
        diaMaiorValor = faturamento[prop]['dia'];
    }
    if (!faturamento[prop]['valor'] == 0) {
        soma += faturamento[prop]['valor'];
        quantidadeDeDias += 1
    }
}
const media = soma / quantidadeDeDias
for (const prop in faturamento) {
    if (faturamento[prop]['valor'] > media) {
        diasAcimaDaMedia += 1
    }
}
console.log(`O maior valor foi de R$ ${maiorValor.toFixed(2)} no dia ${diaMaiorValor}.`)
console.log(`O menor valor foi de R$ ${menorValor.toFixed(2)} no dia ${diaMenorValor}.`)
console.log(`Houveram ${diasAcimaDaMedia} dias com faturamento acima da média.`)
