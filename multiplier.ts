const multiplicator = (a:number, b:number, printText:string) => {
    console.log(printText, a * b);
};

multiplicator(2, 4, "Multiplied numers 2 and 4, the result is: ");

// Parsear argumentos
const parseArguments = (args): Array<number> => {
    if (args.length !== 4) throw new Error('Wrong number of arguments');

    const firstNumber = Number(args[2]);
    const secondNumber = Number(args[3]);
    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        return [
            firstNumber,
            secondNumber
        ]
    } else {
        throw new Error('Provided values were not numbers!!!')
    }
};

const cleanArguments = parseArguments(process.argv);

const a: number = Number(cleanArguments[0]); // Se está obligando a volverse un tipo número
const b: number = Number(cleanArguments[1]); // Se está obligando a volverse un tipo número

console.log(process.argv);
/* [
    'D:\\typescript-bootcamp\\node_modules\\ts-node\\dist\\bin.js',
    'D:\\typescript-bootcamp\\multiplier.ts',
    '3',
    '4'
] */

// Esto lo devuelve el porcess.argv y por eso se cogieron las posiciones 2 y 3 

multiplicator(a, b, `Multiplied ${ a } and ${ b }, and the result is: `)