/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        copy: {
            bootstrap: {
                files: [
                    {src: 'bower_components/bootstrap/dist/css/bootstrap.min.css', dest: 'public/lib/bootstrap/bootstrap.css'},
                    {src: 'bower_components/bootstrap/dist/js/bootstrap.min.js', dest: 'public/lib/bootstrap/bootstrap.js'},
                    {src: 'bower_components/bootstrap/fonts/glyphicons-halflings-regular.ttf', dest: 'public/lib/fonts/glyphicons-halflings-regular.ttf'},
                    {src: 'bower_components/bootstrap/fonts/glyphicons-halflings-regular.woff', dest: 'public/lib/fonts/glyphicons-halflings-regular.woff'},
                    {src: 'bower_components/bootstrap/fonts/glyphicons-halflings-regular.woff2', dest: 'public/lib/fonts/glyphicons-halflings-regular.woff2'}
            ]},
            jquery: {
                files: [
                    {src: 'public/lib/jquery/jquery.js', dest: 'bower_components/jquery/dist/jquery.min.js'},
                    {src: 'public/lib/jquery/jquery.min.map', dest: 'bower_components/jquery/dist/jquery.min.map'},
                    {src: 'public/lib/jquery/jquery-ui.js', dest: 'bower_components/jquery-ui/jquery-ui.min.js'}
                ]
            },
            waypoints: {
                files: [
                    {src: 'public/lib/waypoints/waypoints.js', dest: 'bower_components/waypoints/lib/jquery.waypoints.min.js'}
                ]
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                }
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib_test: {
                src: ['lib/**/*.js', 'test/**/*.js']
            }
        },
        qunit: {
            files: ['test/**/*.html']
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib_test: {
                files: '<%= jshint.lib_test.src %>',
                tasks: ['jshint:lib_test', 'qunit']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify', 'copy']);

};
