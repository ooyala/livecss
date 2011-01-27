function getParameterByName( name )
{
  // http://stackoverflow.com/questions/901115/get-querystring-values-with-jquery
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}

$(document).ready(function(){
    if( getParameterByName( 'livecss' ) === "true" )
        livecss.watchAll();
});