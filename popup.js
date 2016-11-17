
function register(){
	var set1,set2,set3;
	
	var query = document.getElementById("query").value;

	if(document.getElementById("music").checked == true)
		set1='mp3';
	else
		set1='';
	if(document.getElementById("video").checked == true)
		var set2='|mkv|mp4|avi';
	else
		set2='';
   	if(document.getElementById("books").checked == true)
		var set3='|epub|pdf';
	else
		set3='';

	window.open("http://www.google.com/webhp?#q="+query+" -inurl:(htm|html|php|pls|txt) intitle:index.of \"last modified\" ("+set1+set2+set3+")&btnI=I");
}

document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('button').addEventListener('click', register); 
	document.getElementById('query').addEventListener('change', function() {
		document.getElementById('error').innerHTML = '';
	});
});
