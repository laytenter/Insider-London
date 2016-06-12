module.exports = function(grunt) {

  // 1. All configuration goes here
  grunt.initConfig({
    // Add a 'global' opts object that we can access in each task...
    opts: {
      date: grunt.template.today('yyyymmddHMss')
    },
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      site: {
        files: ['_site/*'],
        options: {
          livereload: {
            host: 'localhost',
            port: 35729
          }
        }
      }
    },
    uncss: {
      dist: {
        files: {
          'css/style.clean.css': [
            '_site/index.html',
            '_site/tours/index.html',
            '_site/product/famous-ghosts-and-infamous-murders/index.html',
            '_site/about-us/index.html',
            '_site/blog/index.html',
            '_site/special-occasions/index.html'
          ]
        }
      }
    },
    concat: {
      dist: {
        src: [
          'js/picturefill.min.js',
          'js/trekksoft.js',
          'js/insider.js'
        ],
        dest: 'js/scripts.js'
      }
    },
    uglify: {
      build: {
        src: 'js/scripts.js',
        dest: 'assets/js/<%= opts.date %>.scripts.min.js',
        options: {
          mangle: true
        }
      }
    },
    cssmin: {
      target: {
        files: {
          // Minify the styles into the assets folder
          'assets/css/<%= opts.date %>.styles.min.css': ['_site/css/main.css'],
          '_includes/css/critical.css': ['css/critical-home.css', 'css/critical-home.css']
        }
      }
    },
    penthouse: {
      home: {
        outfile: 'css/critical-home.css',
        css: '_site/css/main.css',
        url: 'http://dev.insider-london.co.uk',
        width: 720,
        height: 1024
      },
      tour: {
        outfile: 'css/critical-tour.css',
        css: '_site/css/main.css',
        url: 'http://dev.insider-london.co.uk/product/london-underground-and-tube-tour/',
        width: 720,
        height: 1024
      }
    },
    htmlmin: {
      dist: {
        options: {
         removeComments: true,
         collapseWhitespace: true
      },
      files: [{
         expand: true,
         cwd: '_site',
         src: '**/*.html',
         dest: '_site'
       }]
      }
    },
    responsive_images: {
      myTask: {
        options: {
          sizes: [{
            width: 240,
            height: 240,
            quality: 70,
            aspectRatio: false,
            quality: 80,
            gravity: 'NorthWest'
          }]
        },
        files: [{
          expand: true,
          src: ['/home/adam/Documents/InsiderLondon/guides/**.{JPG,jpg,gif,png,jpeg}']
                }]
      }
    }
  });

  // 3. Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-penthouse');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  // Task definition
  grunt.registerTask('cleancss', ['uncss']);

  // Get the critical path CSS
  grunt.registerTask('critical', ['penthouse']);


  // Watch _site folder for changes
  grunt.registerTask('init', ['watch']);

  grunt.registerTask('minify', ['htmlmin']);

  grunt.loadNpmTasks('grunt-responsive-images');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};
