const express = require("express");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const { write: copy } = require("clipboardy");

const server = express();

const serve = (port) => {
    server.use(express.static(path.join(__dirname, "..", "client", "public")));
    server.use(express.static(path.join(__dirname, "..", "static")));
    server.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "..", "client", "index.html"));
    });

    server.get("/files", (req, res) => {
        const cssPath = path.join(__dirname, "..", "static", "css");
        const jsPath = path.join(__dirname, "..", "static", "js");
        const newfiles = [req.headers.host];
        fs.readdir(cssPath, function (err, files) {
            if (err) {
                return console.log("Unable to scan directory: " + err);
            }
            newfiles.push(files);
            fs.readdir(jsPath, function (err, files) {
                if (err) {
                    return console.log("Unable to scan directory: " + err);
                }
                newfiles.push(files);
                res.json(newfiles);
            });
        });
    });

    const print = () => `
    ---------------------------------------- 
   |                                        |
   |      ${chalk.cyan("SERVER STARTED SUCCESSFULLY")}       |
   |                                        |
    ----------------------------------------
   `;
    const copyAddress = (localAddress) => {
        copy(localAddress)
            .then(() => console.log(`\n    ${chalk.grey("Copied local address to clipboard!")}`))
            .catch((err) => console.log(`Cannot copy to clipboard: ${err}`));
    };

    server.listen(port, () =>{
        console.log(print());
        console.log(`\n    ${chalk.rgb(225,0,225).bold('Home')}`)
        console.log(`    http://localhost:${port}`);
        copyAddress(`http://localhost:${port}`)
    });
};

module.exports = serve;
