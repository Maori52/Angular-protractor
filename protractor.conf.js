//jshint strict: false
exports.config = {
    params: {
        login_conf: {
            url: 'http://vimbox.skyeng.ru/',
            username: 'tuanteacher1@t.ru',
            password: 'password'
        }
    },

    allScriptsTimeout: 11000,

    specs: [
        '*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },


    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost:4444/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },


    // this function resolve some ussies with require page object module
    onPrepare: function () {

        global.requirePO = function (relativePath) {
            return require(__dirname + '/po/' + relativePath + '.po.js');
        };
    }
};
