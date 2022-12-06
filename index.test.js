const index = require("./index");

// Ex 1:

test('calcular tabuada, preencher os arrays com as tabuadas do 5, 6 e 7', () =>{
    expect(index.calcularTabuada(5)).toBe(true)
})

test('calcular tabuada, erro porque parametro não é um número', () => {
    expect(index.calcularTabuada("asd")).toBe(false);
})