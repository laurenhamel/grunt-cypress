# grunt-cypress

> A Grunt wrapper for Cypress, a test runner for your projects


## Getting Started

If you haven't used [Grunt](https://gruntjs.com/) before, be sure to check out the [Getting Started](https://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](https://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```
npm install grunt-cypress --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```
grunt.task.loadNpmTasks('grunt-cypress');
```

## Usage

Run this task with the `grunt cypress` command. You can also specify which CLI method to run by passing the method name as an argument `grunt cypress:open`. By default, if no method name is given, the `open` method will be called. Do note that by default, this grunt task has been configured to use the `--detached` Cypress CLI flag when running the `open` method in order to prevent any subsequent grunt tasks from stalling or not running.


## Options

This grunt task is not configurable and therefore does not have any options available for use with Grunt. It's merely a Grunt wrapper for the [cypress](https://npmjs.org/package/cypress) package to allow you to call the Cypress CLI via Grunt. This means that you can pass in any Cypress CLI options like you normally would using command line flags. Do note, it's recommended that you use the double-dash version of flag names to avoid any confusion with Grunt flags. Refer to [Cypress's command line docs](https://docs.cypress.io/guides/guides/command-line.html#cypress-cache-command) for a complete list of available flags for all Cypress method. Do note that by default, this grunt task has been configured to use the `--detached` Cypress CLI flag when running `grunt cypress:open` to prevent any subsequent grunt tasks from stalling or not running. 

For additional information about [Cypress](https://cypress.io), refer their [documentation](https://docs.cypress.io/) and/or [Github repo](https://github.com/cypress-io/cypress) to learn more about how to use it within your project, how to [setup a `cypress.json` file](https://docs.cypress.io/guides/references/configuration.html#Options), and/or how to [write your first test](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file).