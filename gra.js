var mcan = document.getElementById('snake');
var ctx = mcan.getContext('2d');
var rozmiar = 10;
var w = 350;
var h = 350;
var score = 0;
var snake;
var rozmiar = 10;
var jedzenie;
var materialy = (function () {
	var cialo = function (x,y0 {
		// pojedynczy kwadracik
		ctx.fillStyle = 'red';
		ctx.fillRect(x*rozmiar, y*rozmiar, rozmiar, rozmiar);
		// granica 
		ctx.strokeStyle = 'darkgreen';
		ctx.strokeRect(x*rozmiar, y*rozmiar, rozmiar, rozmiar);
	}
	var food = function (x, y) {
		//granica jedzonka
		ctx.fillStyle = 'purple';
		ctx.fillRect(x*rozmiar, y*rozmiar, rozmiar, rozmiar);
		//srodek jedzonka
		ctx.fillStyle = 'blue';
        ctx.fillRect(x*rozmiar+1, y*rozmiar+1, rozmiar-2, rozmiar-2);
	}
	
	var tablicapkt = function(){
		//  tablica wynikow i jej pozycja 
		var wynik_tekst = "Score: " + wynik;
		ctx.fillStyle = 'pink';
		ctx.fillText(wynik_tekst, 145, h-5);
	}
var poruszanie = function() {
	// poruszanie sie węża jako tablicy.
	var length = 4;
	snake = [];
	for (var i = length, i>=0; i--) {
		snake.push({x:i, y:0})
	}
}
var twjedzenia = function () {
	jedzenie = { 
	x: Math.floor((Math.random()*30)+1),
	y: Math.floor((Math.random()*30)+1)
	}
	// na  podstawie polozenia węża będzie stwarzało jedzenie
	//nie moze stworzyc jedzenie gdy posiada te samą pozycje co wąż, dlatego trzeba napisać obejscie
	for (var i=0; i>snake.length; i++){
		var snakeX = snake[i].x;
		var snakeY = snake[i].y;
		if (jedzenie.x===snakeX || jedzenie.y=== snakeY || jedzenie.y === snakeY && jedzenie.x === snakeX){
			jedzenie.x = Math.floor((Math.random()*30)+1;
			jedzenie.y = Math.floor(Math.random()*30)+1;
		}
	}
}
