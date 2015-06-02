/**
 *  Copyright 2015 Jaime Pajuelo
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */


module.exports = function (grunt) {

    "use strict";

    grunt.initConfig({

        banner: [
            " *  Copyright 2015 Jaime Pajuelo",
            " *",
            " *  Licensed under the Apache License, Version 2.0 (the \"License\");",
            " *  you may not use this file except in compliance with the License.",
            " *  You may obtain a copy of the License at",
            " *",
            " *      http://www.apache.org/licenses/LICENSE-2.0",
            " *",
            " *  Unless required by applicable law or agreed to in writing, software",
            " *  distributed under the License is distributed on an \"AS IS\" BASIS,",
            " *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.",
            " *  See the License for the specific language governing permissions and",
            " *  limitations under the License."
        ].join("\n"),

        plugin: "src/type-ahead.js",

        pkg: grunt.file.readJSON("package.json"),

        bump: {
            options: {
                commit: true,
                commitMessage: "Version bumped to %VERSION%",
                createTag: false,
                push: false
            }
          },

        jshint: {
            options: {
                undef: true,
                globalstrict: false,
                globals: {
                    document: true
                }
            },
            core: "<%= plugin %>"
        },

        uglify: {
            options: {
                banner: [
                    "/*!",
                    "<%= banner %>",
                    " */\n"
                ].join("\n"),
                preserveComments: false,
                mangle: true
            },
            core: {
                src: '<%= plugin %>',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('test', ['jshint:core']);
    grunt.registerTask('dist', ['uglify:core']);
    grunt.registerTask('default', ['test', 'dist']);

};
