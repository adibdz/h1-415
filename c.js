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

createFrame('http://localhost:3000/');
createFrame('http://localhost/');
createFrame('https://localhost/');

document.body.appendChild(i);
