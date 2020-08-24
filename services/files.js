const path = require("path");
const fs = require("fs");
const chalk = require("chalk");

const cssPath = path.join(__dirname, "..", "static", "css");
const jsPath = path.join(__dirname, "..", "static", "js");

const readFiles = (type) => {
    if (typeof type !== "boolean" && type.toLowerCase() === "css") {
        fs.readdir(cssPath, function (err, files) {
            if (err) {
                return console.log("Unable to scan directory: " + err);
            } else {
                console.log(chalk.bold.underline.cyan("CSS FILES"));
                files.forEach((file) => {
                    console.log(chalk.grey(file));
                });
            }
        });
    } else if (typeof type !== "boolean" && type.toLowerCase() === "js") {
        fs.readdir(jsPath, function (err, files) {
            if (err) {
                return console.log("Unable to scan directory: " + err);
            } else {
                console.log(chalk.bold.underline.cyan("\nJAVSCRIPT FILES"));
                files.forEach((file) => {
                    console.log(chalk.grey(file));
                });
            }
        });
    } else {
        fs.readdir(cssPath, function (err, files) {
            if (err) {
                return console.log("Unable to scan directory: " + err);
            } else {
                console.log(chalk.bold.underline.cyan("CSS FILES"));
                files.forEach((file) => {
                    console.log(chalk.gray(file));
                });
            }

            fs.readdir(jsPath, function (err, files) {
                if (err) {
                    return console.log("Unable to scan directory: " + err);
                } else {
                    console.log(chalk.bold.underline.cyan("\nJAVSCRIPT FILES"));
                    files.forEach((file) => {
                        console.log(chalk.grey(file));
                    });
                }
            });
        });
    }
};
module.exports = readFiles;
