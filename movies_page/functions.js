	var i = Math.floor(Math.random()*4)+1;
	
	function hide()
	{
		$("#images").fadeOut(400);
	}
	
	function slider()
	{
		
		var file = "<img src=\"images/lalaland" + i + ".jpg\"/>";
		document.getElementById("images").innerHTML = file;
		i++;
		if(i > 4) i = 1;
		
		setTimeout("hide()",4000);
		setTimeout("slider()",4400);
		$("#images").fadeIn(700);
	}
	
	function action()
	{
		var email = document.getElementById("emailtext").value;
		var password = document.getElementById("passwordtext").value;
		if(email == "lukaszszumilas@interia.pl" && password == "mojejaja") window.open("lalaland.html","_blank");
		else window.location.reload();
	}
	
	
	
	function counter()
{
	var today = new Date();
	
	var word = "";
	
	var day = today.getDate();
	if(day < 10)
	{
		day = "0" + day;
	}
	var month = today.getMonth() + 1;
	if(month < 10)
	{
		month = "0" + month;
	}
	var year = today.getFullYear();
	
	var hour = today.getHours();
	if(hour < 10)
	{
		hour = "0" + hour;
	}
	var minute = today.getMinutes();
	if(minute < 10)
	{
		minute = "0" + minute;
	}
	var second = today.getSeconds();
	if(second < 10)
	{
		second = "0" + second;
	}
	if(second == 0)
	{
		word = "Czas leci! ";
	}
	
	
	document.getElementById("timer").innerHTML = word + day + "/" + month + "/" + year + " || " + hour + ":" + minute + ":" + second;
	
	setTimeout("counter()", 1000);
}

function starter()
{
	var path = location.href.split("/").slice(-1); 
	counter();
	if(path == "lalaland.html") slider();
}