Live CSS - Making the browser dance to your CSS
===============================================
Live CSS will monitor &lt;link&gt; tags on the page and poll the server for changes to the CSS. When there are changes, the page's styles get updated.

It's a simple tool, and it's immensely powerful because it enables the One True Workflow we've all lusted after: to have your browser and your editor side by side on screen and watch the page update in real time as you type in your CSS files. It looks like magic.

Usage
-----
Just include livecss.js in your page and then call this function:

    livecss.watchAll() - starts polling all <link> tags in the current page for changes.

If you want more fine grained control over which CSS is being autoreloaded:

    livecss.watch(linkElement) - start watching a single <link> element for changes.
    livecss.unwatchAll()
    livecss.unwatch(linkElement)

Include livecsshelper.js as well, and add a querystring param livecss, set to true

    example: http://yourawesomesite.com/somefile.html?livecss=true

Live CSS will watch on every reload as long as the querystring is there and true

Tips
----
Make sure your server is setting a valid **last-modified** header for its CSS responses. Livecss detects new CSS by frequently making a HEAD request to the URLs referenced in the &lt;link&gt; tags on the page, and it reloads the files which have a recent last-modified header. If your last-modified header is blank or always set to "now", the CSS will continuously reload, once per second. This will put extra load on the browser.

Consider adding a development querystring parameter to your page and initiate livecss only when that querystring parameter is present. Otherwise, the polling from livecss can generate a lot of server log noise, which is annoying when you're hacking on backend code.

Contributing
------------
Feel free create tickets for enhancement ideas, or just fork and submit a pull request.

License
-------
Licensed under the [MIT license](http://www.opensource.org/licenses/mit-license.php).

Credits
-------
Phil Crosby