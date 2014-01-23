module.exports = function(config) {
    config.set({
        basePath : '../',
        frameworks : ['ng-scenario'],
        files:[
//           {pattern: 'test/index.spec.js', watched: false, included: false, served: false},
//           {pattern: 'test/index.spec.js', watched: true, included: true, served: true},
            'test/index.spec.js'
        ],
        proxies: {
            '/' : 'http://karma-runner.github.io/0.10/'
        },
        port : 9876,
        browsers : ["Chrome"],
        singleRun : true,
        reporters : ["progress"],
        plugins : [
            'karma-ng-scenario',
            'karma-chrome-launcher',
        ],
    });
  };
