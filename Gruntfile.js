module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		react: {
			compile: {
				files: [
					{
						expand: true,
						cwd: 'react-backbone/react-components/jsx',
						src: ['**/*.jsx'],
						dest: 'react-backbone/react-components/dest',
						ext: '.js'
					}
				]
			}
		},
		watch: {
			jsx: {
				cwd: 'react-backbone/react-components/jsx',
				files: ['**/*.jsx'],
				tasks: ['react:compile'],
				options: {
					spawn: false,
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-react');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['react:compile', 'watch']);
};