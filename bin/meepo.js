#!/usr/bin/env node
process.title = 'meepo';
var cwd = process.cwd();
var childProcess = require('child_process');
// 切换到当前目录
childProcess.exec('cd ' + cwd, function (error, stdout, stderr) {
    if (error) {
        console.log(error);
    }
});


var program = require('commander');

program.version('v' + require('../package.json').version)
    .description('cli for meepo');

program.command('new <name>')
    .description('create a new plugin')
    .action(function (name) {
        // git clone https://github.com/meepobrother/imeepos-ng-template.git
        childProcess.exec('git clone https://github.com/meepobrother/imeepos-ng-template.git  ' + name, function (error, stdout, stderr) {
            if (error) {
                console.log(error);
            } else {
                var data = JSON.parse(stdout);
                console.log(data);
            }
        });
    });

program.parse(process.argv);

if (program.args.length === 0) {
    program.help()
}