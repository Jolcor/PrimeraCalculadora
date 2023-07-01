const {suma,resta,multiplicacion,division} = require('../calc.js')

describe('Pruebas de suma',()=>{
    test('Prueba sumar 2 numeros',()=>{
        expect(suma(1,4)).toBe(5);
    })
    test('Prueba sumar null y numero',()=>{
        expect(suma(null,4)).toBe(0);
    }) 
    test('Prueba sumar null',()=>{
        expect(suma(null,null)).toBe(0);
    })  
    test('Prueba sumar string',()=>{
        expect(suma('a','b')).toBe(0);
    })
    test('Prueba sumar string y numero',()=>{
        expect(suma('a',2)).toBe(0);
    }) 
})

describe('Pruebas de resta',()=>{
    test('Prueba restar 2 numeros',()=>{
        expect(resta(4,1)).toBe(3);
    })
    test('Prueba restar null y numero',()=>{
        expect(resta(null,4)).toBe(0);
    }) 
    test('Prueba restar null',()=>{
        expect(resta(null,null)).toBe(0);
    })  
    test('Prueba restar string',()=>{
        expect(resta('a','b')).toBe(0);
    })
    test('Prueba restar string y numero',()=>{
        expect(resta('a',2)).toBe(0);
    }) 
})

describe('Pruebas de multiplicacion',()=>{
    test('Prueba multiplicacion 2 numeros',()=>{
        expect(multiplicacion(4,1)).toBe(4);
    })
    test('Prueba multiplicacionr null y numero',()=>{
        expect(multiplicacion(null,4)).toBe(0);
    }) 
    test('Prueba multiplicacion null',()=>{
        expect(multiplicacion(null,null)).toBe(0);
    })  
    test('Prueba multiplicacion string',()=>{
        expect(multiplicacion('a','b')).toBe(0);
    })
    test('Prueba multiplicacion string y numero',()=>{
        expect(multiplicacion('a',2)).toBe(0);
    }) 
})

describe('Pruebas de division',()=>{
    test('Prueba division 2 numeros',()=>{
        expect(division(4,2)).toBe(2);
    })
    test('Prueba division null y numero',()=>{
        expect(division(null,4)).toBe(0);
    }) 
    test('Prueba division null',()=>{
        expect(division(null,null)).toBe(0);
    })  
    test('Prueba division string',()=>{
        expect(division('a','b')).toBe(0);
    })
    test('Prueba division string y numero',()=>{
        expect(division('a',2)).toBe(0);
    }) 
    test('Prueba division entre 0',()=>{
        expect(division(3,0)).toBe(0);
    }) 
})
