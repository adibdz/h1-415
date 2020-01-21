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

var url = document.getElementById("i").getAttribute("u");
createFrame(url);

document.body.appendChild(i);
