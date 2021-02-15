
const yargs = require('yargs')

// created for net and clean index.js
const commands = require('./commands');

yargs.version('1.0')

yargs
    .command(commands('add'))
    .command(commands('subtract'))
    .command(commands('multiply'))
    .command(commands('divide'))
    .command(commands('power'))

yargs.parse()