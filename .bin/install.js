#!/usr/bin/env node

import { execSync } from 'child_process';

const runCommand = command => {
    try {
        execSync(`${command}`, { stdio: 'inherit' });
    } catch (err) {
        console.error(`Failed to execute ${command}`, err);
        return false;
    }

    return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/thisloke/node-base ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository ${repoName}`);

const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) {
    process.exit(-1);
}

console.log(`Installing dependencies for ${repoName}`);

const installedDeps = runCommand(installDepsCommand);

if (!installedDeps) {
    process.exit(-1);
}

console.log("Ready to start!");