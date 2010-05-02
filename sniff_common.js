// going off http://googlewebmastercentral.blogspot.com/2009/02/specify-your-canonical.html

// TODO: do we need to support <base> in header? Hmm...

var simpleAbsoluteUrlMatch = '^[a-zA-Z]+://.*';

// generate an absolute url (protocol, host, path) from a canonicalValue that might be relative
function getCanonicalUrl(canonicalValue){
  if(canonicalValue){
    if(canonicalValue.match(simpleAbsoluteUrlMatch)){
      // canonicalValue is a full url
      return canonicalValue;
    }
    else if(canonicalValue.match('^/.*')){
      // canonicalValue is an absolute url in the current host
      return location.protocol + '//' + location.host + canonicalValue;
    }
    else{
      console.error('The canonical URL is relative, which is weird.');
    }
  }
  else{
    return null;
  }
}

var canonicalValue = $('head link[rel=canonical]').attr('href');
var canonicalUrl = getCanonicalUrl(canonicalValue);

if(canonicalUrl && location.href != canonicalUrl) {
  chrome.extension.sendRequest(canonicalUrl);
}
