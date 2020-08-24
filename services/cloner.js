const request = require('request');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk')

const clone = url => request(
  url,
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      if(type(url)){
        let fileName = url.split('/').reverse()[0];
        fs.writeFile(path.join(__dirname, '..', 'static', `${type(url)}`, `${fileName}`), html, function (err) {
            if (err) throw err;
            console.log(`
 ${("-").repeat(fileName.length + 6)} 
| + ${chalk.cyan(fileName)}   |
 ${("-").repeat(fileName.length + 6)} 
 updated native cdn
            `);
        });
      }else{
        console.log("CSS or Javascript File required")
      }
    }
  }
);

const type = url => {
    if (url.endsWith(".js")) return "js"
    if (url.endsWith(".css")) return "css"
    else return false
}

module.exports = clone;