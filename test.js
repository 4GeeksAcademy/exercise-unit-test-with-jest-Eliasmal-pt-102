// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;

    expect(fromEuroToDollar(3.5)).toBe(3.745); 
});

test("One dollar should be 146,27 yen", function() {
    const { fromDollartoYen } = require('./app.js');

    const Yen = fromDollartoYen(3.5);
    const expected = 3.5 * (156.5/1.07);

    expect(fromDollartoYen(3.5)).toBe(expected); 
});

test("One Yen should be 0,0055 Pound", function() {
    const { fromYenToPound } = require('./app.js');

    const Pound = fromYenToPound(3.5);
    const expected = 3.5 * (0.87/156.5);

    expect(fromYenToPound(3.5)).toBe(expected); 
});