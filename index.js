var loadLibraryPlugin = {
    register: function (server, options, next) {
        next();
    }
}

loadLibraryPlugin.register.attributes = {
    pkg: require('./package.json')
};

module.exports = loadLibraryPlugin;