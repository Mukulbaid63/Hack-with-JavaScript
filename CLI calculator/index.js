
const yargs = require('yargs')

const calc = require('./calculator')

yargs.version('1.0')

yargs.command({
    command: 'add',
    describe: 'Addition of n numbers',
    handler(argv){
        calc.add(argv._)
    }
}).command({
    command: 'subtract',
    describe: 'Subtraction of two numbers',
    handler(argv){
        calc.subtract(argv._)
    }
}).command({
    command: 'multiply',
    describe: 'Multiplication of two numbers',
    handler(argv){
        calc.multiply(argv._)
    }
})
.command({
    command: 'divide',
    describe: 'Division of two numbers',
    handler(argv){
        calc.divide(argv._)
    }
})

yargs.parse()