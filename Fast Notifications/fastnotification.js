cachedPost = "0";
time = 120000;

function prepareRequest(act, other) {
	var request = "path/to/getNewTopic.php"+location.search+"&f="+location.host+"&act="+act+other;
	return request;
}

function cachePost() {
	var xmlhttp; 
	xmlhttp=new window["XML"+"Http"+"Request"](); 
	xmlhttp.onreadystatechange=function() { 
		if (xmlhttp.readyState==4 && xmlhttp.status==200) { 
			cachedPost = xmlhttp.responseText; 
		} 
	} 
	xmlhttp.open("GET",prepareRequest("cache", ""),true); 
	xmlhttp.send(); 
}

function getNewPosts() {
	var xmlhttp; 
	xmlhttp=new window["XML"+"Http"+"Request"](); 
	xmlhttp.onreadystatechange=function() { 
		if (xmlhttp.readyState==4 && xmlhttp.status==200) { 
			if(xmlhttp.responseText != "") { $(".post:last").after(xmlhttp.responseText); }
		} 
	} 
	xmlhttp.open("GET",prepareRequest("compare", "&c=" + cachedPost),true); 
	xmlhttp.send();
	setTimeout("cachePost()", 5000);
}

function fastNotification() {
	cachePost();
	if(time < 20) { time = 20; }
	setInterval("getNewPosts()", time);
}