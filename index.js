module.exports = { calcularTabuada, pontosDeOnibus, definirVencedor}

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

// Ex 3: 

// Array alfabeto foi feito para auxilio

const alfabeto = ['',"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let bingo = [2, 9, 14, 7, 1, 1, 1, 1, 1, 1]

function definirVencedor(array){
    let B = array.some((x) => x === 2)
    let I = array.some((x) => x === 9)
    let N = array.some((x) => x === 14)
    let G = array.some((x) => x === 7)
    let O = array.some((x) => x === 15)

    if(B === false || I === false || N === false || G === false || O === false){
        return "PERDEU"
    }else{
        return "GANHOU"
    }
}

console.log(definirVencedor(bingo))