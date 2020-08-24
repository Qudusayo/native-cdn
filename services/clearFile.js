const path = require("path");
const fs = require("fs");
const chalk = require("chalk");

const cssPath = path.join(__dirname, "..", "static", "css");
const jsPath = path.join(__dirname, "..", "static", "js");

const clearFiles = type => {
    if (typeof type !== "boolean" && type.toLowerCase() === "css") {
        fs.readdir(cssPath, function (err, files) {
            if (err) {
                return console.log("Unable to scan directory: " + err);
            } else {
                files.forEach(file => {
                    fs.unlink(path.join(__dirname, '..', 'static', `${ext(file)}`, `${file}`), err => {
                        if(err) {
                            console.error('Error Removing File')
                        }else{
                            console.log(`- ${chalk.red(file)} Removed Successfully`)
                        }
                    })
                })
            }
        });
    } else if (typeof type !== "boolean" && type.toLowerCase() === "js") {
        fs.readdir(jsPath, function (err, files) {
            if (err) {
                return console.log("Unable to scan directory: " + err);
            } else {
                files.forEach(file => {
                    fs.unlink(path.join(__dirname, '..', 'static', `${ext(file)}`, `${file}`), err => {
                        if(err) {
                            console.error('Error Removing File')
                        }else{
                            console.log(`- ${chalk.red(file)} Removed Successfully`)
                        }
                    })
                })
            }
        });
    } else {
        console.log(chalk.yellowBright(`
 ----------------------------------------
| No specific folder specified           |
| Kindly specify a directory <css or js> |
|                  OR                    |
|   CDN is empty ${chalk.gray('run')} '${chalk.cyanBright('native-cdn --list')}'  |
 ----------------------------------------
        `))
    }
}

const ext = fileName => {
    if (fileName.endsWith(".js")) return "js"
    if (fileName.endsWith(".css")) return "css"
    else return false
}

module.exports = clearFiles