it=0;

var obrazek = "<img width = \"800\" height = \"500\"src =\"images/s" + it + ".jpg\"/>"; 

var haslo = "ALTORZYMPB";
var haslo1 = "";

var scream = new Audio("sounds/krzyk.mp3");
var good = new Audio("sounds/yes.wav");
var bad = new Audio("sounds/no.wav");
var bravo = new Audio("sounds/applause.mp3");

for(i = 0; i< haslo.length; i++)
{
	if (haslo.charAt(i) == " ") haslo1 += " ";
	else haslo1 += "-";
}



function slider()
{
	var file = "<img width = \"800\" height = \"500\"src =\"images/s" + i + ".jpg\"/>"; 
	document.getElementById("slide").innerHTML = file;
	i++;
	if (i > 9) i = 8;
	setTimeout( "slider()", 1000);
}

var letters = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ";


String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}

function sprawdz(nr)
{
	var number = "lit"+nr;
	var trafiona = false;
	for(i=0; i < haslo.length; i++)
	{
		if(haslo.charAt(i) == letters.charAt(nr))  
		{ 
		  haslo1 = haslo1.ustawZnak(i,letters.charAt(nr));
		  trafiona = true; 
		  document.getElementById(number).style.color = "blue";
		  document.getElementById(number).style.border = "3px solid blue";
		  document.getElementById(number).setAttribute("onclick", ";");
		  document.getElementById(number).style.cursor = "default";
		  good.play();
		} 
	}	
		document.getElementById("password").innerHTML = haslo1;
		
	if(haslo == haslo1)
	{
		var picture = "<img width = \"800\" height = \"500\"src =\"images/sonic.jpg\"/>"; 
		var zmienna = '<span class = "reset" onclick = "location.reload()">UDAŁO SIĘ! CZY CHCESZ ZAGRAĆ JESZCZE RAZ?</span';
		var name = "reset";
		document.getElementById("abecadlo").innerHTML = "";
		document.getElementById("password").innerHTML = zmienna;
		document.getElementById("slide").innerHTML = picture;
		bravo.play();
	}

	if(trafiona == false)
	{
		it++;
		var obrazek = "<img width = \"800\" height = \"500\"src =\"images/s" + it + ".jpg\"/>"; 
		
		document.getElementById(number).setAttribute("onclick",";");
		document.getElementById(number).style.cursor = "default";
		document.getElementById(number).style.color = "red";
		document.getElementById(number).style.border = "3px solid black";
		document.getElementById("slide").innerHTML = obrazek;
		bad.play();
	}  
	
	if(it == 8)
	{
		pop();
		setTimeout("pop1()", 3000);
		slider();
		playAgain();
	}
	
}

function playAgain()
{
	document.getElementById("password").innerHTML  = '<span class = "reset" onclick = "location.reload()">JESZCZE RAZ?</span';
	document.getElementById("abecadlo").innerHTML  = "";
	
}


function pop()
{
		var file = "<img width = \"600\" height = \"800\"src =\"images/nun.jpg\"/>"; 
		document.getElementById("nun").innerHTML = file;
		scream.play();
		document.getElementById("return").innerHTML = "";
}

function pop1()
{
		var file1 = '<div id = "return"><a href = "javascript:history.back()" >Powrót do filmów</a></div>';
		document.getElementById("nun").innerHTML = "";
		scream.pause();
		document.getElementById("return").innerHTML = file1;
}

function setletters()
{
	var zawartosc = "";
	for(i = 0; i < letters.length; i++)
	{
		var lett = "lit" + i;
		zawartosc += '<div class = "letter" onclick="sprawdz('+i+')" id="'+lett+'">'+letters.charAt(i)+'</div>'
		if((i+1) % 7 == 0) zawartosc += '<div style = "clear:both;"></div>';
	}
	
	
	document.getElementById("abecadlo").innerHTML = zawartosc;
	document.getElementById("password").innerHTML = haslo1;
	document.getElementById("slide").innerHTML = obrazek;
}




