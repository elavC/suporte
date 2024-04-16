const dataAtual = new Date();

const diaAtual = dataAtual.getDate()
const mesAtual = dataAtual.getMonth() +1;

let convertMes = mesAtual.toString()

if (convertMes === "1") {
    convertMes = "Janeiro"
}

if (convertMes === "2") {
    convertMes = "Fevereiro"
}

if (convertMes === "3") {
    convertMes = "Março"
}

if (convertMes === "4") {
    convertMes = "abril"
}

if (convertMes === "5") {
    convertMes = "Maio"
}

if (convertMes === "6") {
    convertMes = "Junho"
}

if (convertMes === "7") {
    convertMes = "Julho"
}

if (convertMes === "8") {
    convertMes = "Agosto"
}

if (convertMes === "9") {
    convertMes = "Setembro"
}

if (convertMes === "10") {
    convertMes = "Outubro"
}

if (convertMes === "11") {
    convertMes = "Novembro"
}

if (convertMes === "12") {
    convertMes = "Dezembro"
}

console.log(typeof diaAtual)
console.log( typeof mesAtual)
console.log(convertMes)

