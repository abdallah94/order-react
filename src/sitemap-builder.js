require('babel-register');
require.extensions['.css', '.png', '.jpeg', '.jpg'] = function () {
    return null;
};
require.extensions['.jpeg'] = function () {
    return null;
};
require.extensions['.png'] = function () {
    return null;
};
require.extensions['.css'] = function () {
    return null;
};

const router = require('./app/router').default;
const Sitemap = require('../').default;

(
    new Sitemap(router)
        .build('http://www.foodyexpress.net')
        .save('./sitemap.xml')
);