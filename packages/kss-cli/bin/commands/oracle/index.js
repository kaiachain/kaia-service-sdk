const { copyDir } = require('../helper')
const path = require('path')

let exec = (program) => {
    program
    .command('oracle')
    .description('kaia service sdk oracle')
    .usage('[options] <subcommand>')
    .command('init')
    .description('initialize the oracle hardhat project')
    .alias('i')
    .action(init)
}

async function init() {
    console.log("Initializing the oracle setup")
    copyDir(path.join(__dirname, '..', '..', '..', 'node_modules', '@kaiachain', 'kss-oracles'), path.join(process.cwd(), "oracle-starter-kit"), (err) => {
      if(err) {
        console.log(err);
        return;
      }
    })
    console.log('created "oracle-starter-kit" folder')
    console.log('Please follow instructions from README file inside the "oracle-starter-kit" folder')
}

module.exports = exec;