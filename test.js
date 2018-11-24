var fs = require('fs');
var path = require('path');
var url = require('url');
var sm = require('sitemap');

var sitemap = sm.createSitemap({
    cacheTime: 600000,
    hostname: 'http://www.example.com/subpath',
    urls: ['a', 'b']
});

var xml = sitemap.toString();

console.log(xml);