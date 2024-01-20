#!/usr/bin/env node
const runCommand = command => {
    try {
        require('child_process').execSync(`${command}`, { stdio: 'inherit' });
    } catch (err) {
        console.error(`Failed to execute ${command}`, err);
        return false;
    }

    return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/thisloke/node-base ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install && rm -rf .git && rm -rf .bin && rm package.json && mv package-blank.json package.json && rm README.md && mv README-blank.md README.md`;

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

console.log(`Ready to start!\n
 cd ${repoName}
 npm run build:watch
 npm run test:watch`);