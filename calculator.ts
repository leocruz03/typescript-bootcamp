// Crear un tipo de dato
type Operation = 'multiply' | 'add' | 'subtract' | 'divide';

const operations = [ 'multiply', 'add', 'subtract', 'divide' ];

// Añadir los tipos que querramos o necesitemos 

const calculator = (a: number, b: number, op: Operation) => {
    if (!operations.includes(op)) {
        console.log('This operation is undefined');
    }

    if (op == 'add') return a + b;
    if (op == 'subtract') return a - b;
    if (op == 'multiply') return a * b;
    if (op == 'divide') {
        if (b == 0 || a == 0) return 'Can\t divide by zero, sorry';
        return a / b;
    }
};

const result = calculator(3, 6, 'add');
console.log(result);