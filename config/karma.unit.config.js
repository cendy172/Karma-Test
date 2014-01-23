module.exports = function(config) {
    config.set({
        basePath : '../',
        frameworks : ['jasmine'],
        files:[
//           {pattern: 'test/index.spec.js', watched: false, included: false, served: false},
//           {pattern: 'test/index.spec.js', watched: true, included: true, served: true},
            'angularjs/angular.min.js',
            'angularjs/lib/angular-mocks.js',
            'angularjs/js/shoppingcart.js',
            'test/shoppingcart.spect.js'
        ],
        port : 9876,
        browsers : ["Chrome"],
        singleRun : true,
        reporters : ["progress"],
        plugins : [
            'karma-jasmine',
            'karma-chrome-launcher',
        ],
    });
  };
