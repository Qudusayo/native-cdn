#!/usr/bin/env node

// Packages
const yargs = require("yargs");
const pkg = require('./../package.json');
const chalk = require('chalk')

// Functions
const clone = require('./../services/cloner');
const serve = require('./../server/server');
const remove = require('./../services/remove');
const files = require('./../services/files');
const clear = require('./../services/clearFile')

const argv = yargs.options({
    port: {
        alias: "p",
        description: "Set port",
    },
    add: {
        alias: "a",
        description: "Add a new package to your native cdn",
    },
    clear: {
        description: "Clear Specific folder <css  or js>",
    },
    help: {
        alias: "h",
        description: "native cdn helps",
    },
    list: {
        alias: "l",
        description: "List files in your native cdn Storage",
    },
    remove: {
        alias: "r",
        description: "Remove a package from your native cdn",
    },
    serve: {
        alias: "s",
        description: "Start your native cdn",
    },
    version: {
        alias: "v",
        description: "native cdn version",
    }
}).argv;

if(argv.add){
    clone(argv.add)
    return
}

if(argv.remove){
    remove(argv.remove)
    return
}

if(argv.list){
    files(argv.list)
    return
}

if(argv.clear){
    clear(argv.clear)
    return
}

if(argv.port){
    serve(argv.port)
    return
}

if(argv.serve){
    serve(8900)
}else{
    console.log(` ---------------
| ${chalk.cyan('native-cdn -h')} | ${chalk.grey('to get help')}
 ---------------
    `)
}