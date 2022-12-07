module.exports = { calcularTabuada, pontosDeOnibus }

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

// Ex 2:

let array = [[10, 0], [3, 5], [5, 0]]

function pontosDeOnibus(array) {
    let pessoasNoBusão = 0
    array.forEach(x => { pessoasNoBusão = pessoasNoBusão + x[0] - x[1] 
    })
    if (pessoasNoBusão < 0){
        return false
    } else {
        return pessoasNoBusão
    }
}

console.log(pontosDeOnibus(array))