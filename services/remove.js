const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const remove = file => {
    if(type(file)){
        console.log(path.join(__dirname, '..', 'static', `${type(file)}`, `${file}`))
        fs.unlink(path.join(__dirname, '..', 'static', `${type(file)}`, `${file}`), err => {
            if(err) {
                console.error('Error Removing File')
            }else{
                console.log(`
 ${("-").repeat(file.length + 6)} 
| - ${chalk.red(file)}   |
 ${("-").repeat(file.length + 6)} 
updated native cdn
`);
            }
        })
    }
    else {
        console.log(type(file))
    }
}

const type = fileName => {
    if (fileName.endsWith("js")) return "js"
    if (fileName.endsWith("css")) return "css"
    else return false
}

module.exports = remove