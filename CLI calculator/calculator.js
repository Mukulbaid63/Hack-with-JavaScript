
const chalk = require('chalk')

const initCalculator = (args) => {
    args.shift()
}

const add = (args) => {
    initCalculator(args)
    console.log(chalk.green`Addition of ${args.length} numbers`)
}

const subtract = () => {
    initCalculator(args)
}

const multiply = () => {
    initCalculator(args)
    
}

const divide = () => {
    initCalculator(args)

}

module.exports = {
    add,
    subtract,
    multiply,
    divide
}