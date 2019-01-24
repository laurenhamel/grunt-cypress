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
    
     // Get arguments and options.
    const args = [...arguments];
    const opts = grunt.option.flags();
    
    // Use the open method by default.
    if( args.length === 0 ) args.push('open');

    // Configure options to always detach when opening.
    if( args.length > 0 && args[0] == 'open' && !opts.includes('--detached') ) opts.push('--detached');

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
      if( err ) console.error(`Cypress \`${args[0]}\` failed with an error.`);
      
      // Otherwise, report success.
      else console.log(`Cypress \`${args[0]}\` completed successfully.`);
      
      // Output any messages.
      if( result.stdout && result.stdout !== '' ) console.log(result.stdout);
      
      // Done.
      done();
      
    });
    
  });
  
};