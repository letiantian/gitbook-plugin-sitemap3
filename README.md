# Sitemap for GitBook

Generate a sitemap for the gitbook website.

Support subpath

Add it to your `book.json` with a basic configuration:

```js
{
    "plugins": ["sitemap3"],
    "pluginsConfig": {
        "sitemap3": {
            "hostname": "http://example.com/book1"
        }
    }
}
```
