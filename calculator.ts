// Crear un tipo de dato
type Operation = 'multiply' | 'add' | 'subtract' | 'divide';
type Result = number | undefined;

const operations = [ 'multiply', 'add', 'subtract', 'divide' ];

// Añadir los tipos que querramos o necesitemos 

// Para asignar el tipo de valor que devuelve la función se le añade después de los parametros el datatype
const calculator = (a: number, b: number, op: Operation): Result => {
    if (!operations.includes(op)) {
        console.log('This operation is undefined');
    }

    if (op === 'add') return a + b;
    if (op === 'subtract') return a - b;
    if (op === 'multiply') return a * b;
    if (op === 'divide') {
        if (b === 0 || a === 0) throw new Error('Can\t divide by zero, sorry');
        return a / b;
    }

    throw new Error('Operation is not valid');
};

const result = calculator(3, 6, 'add');
console.log(result);

// El process.argv permite recuperar los arguments que pasamos
