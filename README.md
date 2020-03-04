# Extract404UrlGoogleJS : test all url indexed by Google and get 404 status

Extract the 404 URL indexed by Google in Javascript

1. do a search in Google :

site:www.mysite.com

2. execute the script in the firefox console "extractor.js"

or you can direct include the JS like this in the console :

```
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdn.jsdelivr.net/gh/aleblanc/Extract404UrlGoogleJS@master/extractor.js';
document.head.appendChild(script);
```

Inspired by https://www.chrisains.com/seo-tools/extract-urls-from-web-serps/
