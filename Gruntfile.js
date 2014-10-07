module.exports = function(grunt) {
	grunt.initConfig({
		browserify: {
			dist: {
				files: {
					'js/bundle.js': ['./js/main.js']
				}
			},
			options: {
				require: [
					'./js/main',
					'stylecow-plugin-color',
					'stylecow-plugin-fixes',
					'stylecow-plugin-flex',
					'stylecow-plugin-initial',
					'stylecow-plugin-linear-gradient',
					'stylecow-plugin-matches',
					'stylecow-plugin-nested-rules',
					'stylecow-plugin-prefixes',
					'stylecow-plugin-rem',
					'stylecow-plugin-variables'
				]
			}
		},
		concat: {
			dist: {
				src: ['js/jquery.min.js', 'js/bootstrap.min.js', 'js/bundle.js'],
				dest: 'js/all.js'
			}
		},
		uglify: {
			build: {
				src: 'js/all.js',
				dest: 'js/all.min.js'
			}
		},
		stylecow: {
			options: require('./stylecow.json'),
			dist: {
				files: {
					'css/styles.min.css': ['./css/styles.css']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-stylecow');

	grunt.registerTask('default', ['browserify', 'concat', 'uglify', 'stylecow']);
};
