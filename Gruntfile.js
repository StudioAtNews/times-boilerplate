module.exports = function(grunt){
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    sourceMap: true
                },
                files: {
                    'src/css/styles.css': 'src/sass/styles.scss'
                }
            }
        },
        cssmin: {
            options: {
                keepSpecialComments: 1
            },
            site: {
                src: [
                    'src/css/styles.css',
                ],
                dest: 'public/dist/css/styles.min.css'
            }
        },
        concat: {
            options: {
                separator: ';',
                sourceMap: true
            },
            dist: {
                src: [
                    'src/js/vendor/jquery/jquery-3.3.1.min.js',
                    'src/js/main.js',
                ],
                dest: 'src/js/scripts.concat.js',
            }
        },
        uglify: {
            js: {
                options: {
                    sourceMap: true,
                    sourceMapIncludeSources: true,
                    sourceMapIn: 'src/js/scripts.concat.js.map'
                },
                files: {
                    'public/dist/js/scripts.min.js': ['src/js/scripts.concat.js']
                }
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/fonts',
                        src: '**/*',
                        dest: 'public/dist/fonts'
                    },
                    {
                        expand: true,
                        cwd: 'src/img',
                        src: '**/*',
                        dest: 'public/dist/img'
                    }
                ]
            }
        },
        watch: {
            sass: {
                files: 'src/sass/**/*.scss',
                tasks: ['sass']
            },
            cssmin: {
                files: 'src/css/**/*.css',
                tasks: ['cssmin']
            },
            concat: {
                files: 'src/js/**/*.js',
                tasks: ['concat']
            },
            uglify: {
                files: ['src/js/scripts.concat.js'],
                tasks: ['uglify']
            },
            copy: {
                files: ['src/img/*'],
                tasks: ['copy']
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    'public/dist/css/**/*.css',
                    'public/dist/js/**/*.js',
                    'public/dist/img/*',
                    'public/index.html'
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('sass-task',   'sass');   // create sass task
    grunt.registerTask('cssmin-task', 'cssmin'); // create cssmin task
    grunt.registerTask('concat-task', 'concat'); // create cssmin task
    grunt.registerTask('uglify-task', 'uglify'); // create uglifyjs task
    grunt.registerTask('copy-task',   'copy'); // create copy task
    grunt.registerTask('default', ['sass', 'cssmin', 'concat', 'uglify', 'copy']);
}
