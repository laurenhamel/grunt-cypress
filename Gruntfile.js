module.exports = (grunt) => {
  
  // Load the task.
  grunt.loadTasks('tasks');
  
  // Register the task.
  grunt.registerTask('default', 'cypress:open');
  
};