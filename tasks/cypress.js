/*
 * grunt-cypress
 * https://github.com/laurenhamel/grunt-cypress
 *
 * Copyright (c) 2018 Lauren Hamel
 * Licensed under the MIT license.
 */

'use strict';

module.exports = (grunt) => {
  
  // Register Grunt task.
  grunt.registerTask('cypress', 'Run the Cypress CLI via Grunt', async function() {
    
    // Make asynchronous.
    const done = this.async();
    
    // Verify that Cypress is available.
    try { require.resolve('cypress'); }
  
    // Otherwise, throw an error.
    catch(error) {
      
      // Alert the user that Cypress could not be found.
      grunt.log.error('Cypress could not be found.',
                      'Run `npm i cypress --save-dev`, then try again.');
      
      // Exit the Grunt task.
      done();
      
      // Stop running.
      return;
      
    }
    
    // Define blacklist of Grunt-specific options.
    const blacklist = [
      '--base',
      '--no-color',
      '--gruntfile',
      '--stack',
      '--force',
      '--tasks',
      '--npm',
      '--no-write',
      '--verbose',
      '--debug',
      '--completion',
      '--require'
    ];
    
     // Get arguments and options.
    let args = [...arguments];
    let opts = grunt.option.flags();

    // Use the open method by default.
    if( args.length === 0 ) args.push('open');
    
    // Filter out Grunt options.
    opts = opts.filter((opt) => !blacklist.includes(opt.split('=')[0]));

    // Configure options.
    if( args.length > 0 ) {
      
      // Always prevent detaching if custom attached option is given.
      if( opts.includes('--attached') ) opts.splice(opts.indexOf('--attached'), 1);
      
      // Otherwise, detach by default when using the open method.
      else if( args[0] == 'open' && !opts.includes('--detached') ) opts.push('--detached');
      
    }

    // Run Cypress.
    grunt.util.spawn({
      cmd: 'npx',
      args: ['cypress'].concat(args, opts),
      opts: {
        stdio: 'inherit',
        detached: true,
        shell: true
      }
    }, (err, result) => {
      
      // Report errors.
      if( err ) console.error(`Failed to ${args[0]} Cypress. An error occurred.`);
      
      // Otherwise, report success.
      else console.log(`Cypress ${args[0]} completed successfully.`);
        
      // Output any messages.
      if( result.stdout && result.stdout !== '' ) console.log(result.stdout);
      
      // Done.
      done();
      
    });
    
  });
  
};