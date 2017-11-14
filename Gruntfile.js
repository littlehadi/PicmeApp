module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'js/script.js',
                dest: 'js/script.min.js'
            }
        },
        postcss: {
            options: {
                map: {
                    inline: false,
                    annotation: 'css/'
                },
                processors: [
                    require('autoprefixer')(),
                    require('cssnano')()
                ]
            },
            dist: {
                src: 'css/style.css',
                dest: 'css/style.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-postcss');

    grunt.registerTask('default', ['uglify', 'postcss']);
};