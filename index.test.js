const index = require("./index");

// Ex 1:

test('calcular tabuada, preencher os arrays com as tabuadas do 5, 6 e 7', () =>{
    expect(index.calcularTabuada(5)).toBe(true)
})

test('calcular tabuada, erro porque parametro não é um número', () => {
    expect(index.calcularTabuada("asd")).toBe(false);
})

// Ex 2:

test('pontos de onibus, se entra 10 pessoas, depois entra 3 e sai 5, e depois entra 5 e sai 8, ficaram 5 pessoas no onibus', () =>{
    expect(index.pontosDeOnibus([[10, 0], [3, 5], [5, 8]])).toBe(5)
})

test('pontos de onibus, erro porque a quantidade de pessoas dentro do onibus ficou negativo', () =>{
    expect(index.pontosDeOnibus([[10, 0], [3, 5], [5, 20]])).toBe(false)
})

// Ex 3: 

test('bingo, se tiver 2, 9, 14, 7 e 15 no array parametro, retornará "GANHOU"', () => {
    expect(index.definirVencedor([21, 13, 2, 7, 5, 14, 7, 15, 9, 10])).toBe("GANHOU")
})

test('bingo, se não tiver 2, 9, 14, 7 ou 15 no array parametro, retornará "PERDEU"', () => {
    expect(index.definirVencedor([2, 9, 14, 7, 1, 1, 1, 1, 1, 1])).toBe("PERDEU")
})