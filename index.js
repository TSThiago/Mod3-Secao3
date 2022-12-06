module.exports = {calcularTabuada}

// Ex 1:

let tabuadaNum = []
let tabuadaProximos = []

function calcularTabuada(numero) {
    if (!Number.isInteger(numero)) {
        return false
    } else {
        for (let index = 1; index < 11; index++) {
            tabuadaNum.push(numero * index)
            tabuadaProximos.push((numero + 1) * index)
            tabuadaProximos.push((numero + 2) * index)
            return true
        }
    }
}