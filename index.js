#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const templateDir = path.join(__dirname);
const projectDir = process.cwd();

const filesToCopy = [
  'GEMINI.md',
  '.roo'
];

filesToCopy.forEach(file => {
  const source = path.join(templateDir, file);
  const destination = path.join(projectDir, file);

  if (fs.existsSync(source)) {
    if (fs.lstatSync(source).isDirectory()) {
      fs.mkdirSync(destination, { recursive: true });
      copyDirectory(source, destination);
    } else {
      fs.copyFileSync(source, destination);
    }
    console.log(`Copiado: ${file}`);
  } else {
    console.error(`Arquivo não encontrado: ${file}`);
  }
});

function copyDirectory(source, destination) {
  fs.readdirSync(source).forEach(item => {
    const sourcePath = path.join(source, item);
    const destinationPath = path.join(destination, item);

    if (fs.lstatSync(sourcePath).isDirectory()) {
      fs.mkdirSync(destinationPath, { recursive: true });
      copyDirectory(sourcePath, destinationPath);
    } else {
      fs.copyFileSync(sourcePath, destinationPath);
    }
  });
}
