
const chalk = require('chalk')


// inititalized operations
const initCalculator = (args) => {
    // we use shift method to remove the operation, leaving only the numbers to be operated
    args.shift()
}

const add = (args) => {
    initCalculator(args)
    console.log(chalk.green`Addition of ${args.length} numbers`)
    let sum = 0;
    args.forEach(element => {
        sum += element
    });
    console.log(chalk.yellow`Sum of the numbers is ${sum}`)
}

const subtract = (args) => {
    initCalculator(args)
    console.log(chalk.green`Subtraction of ${args.length} numbers`)
    let difference = args[0];
    args.shift()
    args.forEach(element => {
        difference -= element
    });
    console.log(chalk.yellow`Difference of the numbers is ${difference}`)
}

const multiply = (args) => {
    initCalculator(args)
    console.log(chalk.green`Multiplication of ${args.length} numbers`)
    let product = args[0];
    args.shift()
    args.forEach(element => {
        product *= element
    });
    console.log(chalk.yellow`Product of the numbers is ${product}`)
}

const divide = (args) => {
    initCalculator(args)
    console.log(chalk.green`Division of ${args.length} numbers`)
    if(args.length > 2){
        console.log(chalk.bgRed.black`WARNING`)
        console.log(chalk.red`Currently supports only two numbers!!!`);
        return
    }
    let quotient = args[0] / args[1]
    console.log(chalk.yellow`Quotient of the numbers is ${quotient}`)
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
}