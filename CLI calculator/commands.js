
const calc = require('./calculator')
const commonds = (type) => {
    switch (type) {
        case 'add':
            return {
                command: 'add',
                describe: 'Addition of n numbers',
                handler(argv) {
                    calc.add(argv._)
                }
            }
        case 'subtract':
            return {
                command: 'subtract',
                describe: 'Subtraction of two numbers',
                handler(argv) {
                    calc.subtract(argv._)
                }
            }
        case 'multiply':
            return {
                command: 'multiply',
                describe: 'Multiplication of two numbers',
                handler(argv) {
                    calc.multiply(argv._)
                }
            }
        case 'divide':
            return {
                command: 'divide',
                describe: 'Division of two numbers',
                handler(argv) {
                    calc.divide(argv._)
                }
            }
        case 'power':
            return {
                command: 'power',
                describe: 'find the power',
                handler(argv) {
                    calc.power(argv._);
                }
            }
    }
}

module.exports = commonds