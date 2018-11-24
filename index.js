var fs = require('fs');
var path = require('path');
var url = require('url');
var sm = require('sitemap');

var urls = [];

module.exports = {
    hooks: {
        // Index page
        "page": function(page) {
            if (this.output.name != 'website') return page;

            var lang = this.isLanguageBook()? this.language : '';
            if (lang) lang = lang + '/';

            urls.push({
                url: this.output.toURL(lang + page.path)
            });

            return page;
        },

        // Write sitemap.xml
        "finish": function() {
            var sitemap = sm.createSitemap({
                cacheTime: 600000,
                hostname: this.config.get('pluginsConfig.sitemap3.hostname'),
                urls: urls
            });

            var xml = sitemap.toString();

            return this.output.writeFile('sitemap.xml', xml);
        }
    }
};
