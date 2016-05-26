module.exports = function () {
    var config = {

        // All the JS files that we want to vet
        alljs: [
            './src/**/*.js',
            './*.js'
        ]

    };

    return config;

};
