#!/usr/bin/env node

// Load dependencies.
const fs = require('fs-extra');

// Get the project path.
const project = process.env.INIT_CWD;

// Report start.
console.log('Beginning `grunt-cypress` postinstall...`');

// Copy the cypress folder into the project.
if( !fs.existsSync(`${project}/cypress`) ) fs.copySync('./cypress', `${project}/cypress`);

// Report that a directory was found or created.
console.log('✓ Successfully verified that your project has a `cypress` folder.');

// Copy the cypress JSON file into the project.
if( !fs.existsSync(`${project}/cypress.json`) ) fs.copySync('./cypress.json', `${project}/cypress.json`);

// Report that a JSON file was found or created.
console.log('✓ Successfully verified that your project has a `cypress.json` file.\n');