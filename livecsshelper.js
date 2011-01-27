/* include this file with livecss.js
 * add a querystring param livecss, set to true
 * example: http://yourawesomesite.com/somefile.html?livecss=true
 * live css will watch on every reload as long as the querystring is there and true
 */

$(document).ready(function(){
    if( window.location.search.indexOf('livecss=true') > 0 )
        livecss.watchAll();
});