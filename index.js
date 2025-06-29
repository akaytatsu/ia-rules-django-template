#!/usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const templates = fs.readdirSync(path.join(__dirname)).filter(file => 
  fs.lstatSync(path.join(__dirname, file)).isDirectory() && file.startsWith('template-')
);

inquirer
  .prompt([
    {
      type: 'list',
      name: 'template',
      message: 'Qual template você gostaria de usar?',
      choices: templates,
    },
  ])
  .then(answers => {
    const templateDir = path.join(__dirname, answers.template);
    const projectDir = process.cwd();

    copyDirectory(templateDir, projectDir);
    console.log(`Template '${answers.template}' copiado com sucesso!`);
  });

function copyDirectory(source, destination) {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  fs.readdirSync(source).forEach(item => {
    const sourcePath = path.join(source, item);
    const destinationPath = path.join(destination, item);

    if (fs.lstatSync(sourcePath).isDirectory()) {
      copyDirectory(sourcePath, destinationPath);
    } else {
      fs.copyFileSync(sourcePath, destinationPath);
    }
  });
}