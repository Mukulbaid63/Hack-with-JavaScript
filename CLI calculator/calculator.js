
const chalk = require('chalk')


// inititalized operations
const initCalculator = (args) => {
    // we use shift method to remove the operation, leaving only the numbers to be operated
    args.shift()
}


const validateNumber = (args) => {

    // Check whether number or not
    if (isNaN(args[0] - args[0])) {
        console.log(chalk.bgRed.black`ERROR`);
        console.log(chalk.red`${args[0]} is not valid number`);
        return
    }
    else if (isNaN(args[1] - args[1])) {
        console.log(chalk.bgRed.black`ERROR`);
        console.log(chalk.red`${args[1]} is not valid number`);
        return
    }

}

const add = (args) => {
    initCalculator(args);
    validateNumber(args);
    console.log(chalk.green`Addition of ${args.length} numbers`)
    let sum = 0;
    args.forEach(element => {
        sum += element
    });
    console.log(chalk.yellow`Sum of the numbers is ${sum}`)
}

const subtract = (args) => {
    initCalculator(args)
    validateNumber(args);
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
    validateNumber(args);
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
    validateNumber(args);
    console.log(chalk.green`Division of ${args.length} numbers`)
    if (args.length > 2) {
        console.log(chalk.bgRed.black`WARNING`)
        console.log(chalk.red`Currently supports only two numbers!!!`);
        return
    }
    let quotient = args[0] / args[1]
    console.log(chalk.yellow`Quotient of the numbers is ${quotient}`)
}

const power = (args) => {
    initCalculator(args);
    validateNumber(args);
    console.log(chalk.green`base number is ${args[0]} and exponent is  ${args[1]}`);
    if (args.length > 2) {
        console.log(chalk.bgRed.black`WARNING`)
        console.log(chalk.red`Currently supports only two numbers!!!`);
        return
    }
    let answer = Math.pow(args[0], args[1]);
    console.log(chalk.yellow`Power of ${args[0]}^${args[1]} is ${answer}`)

}
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    power
}