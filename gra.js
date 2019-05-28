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
	var cialo = function (x,y) {
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
var kolizja = function (x, y, tablica) {
	for(var i=0; i<tablica.length; i++) {
		if(tablica[i].x === x && tablica[i].y === y) //sprawdzenie czy wąż uderza samego siebie, jeżeli tak zwraca prawde jezeli nie fałsz.
		return true; }
	    	return false;
    }
var rysowanie = function() {          //stworzenie tła gdzie będzie się poruszał wąż oraz wyznaczenie poruszania
	ctx.fillStyle = 'green';
	ctx.fillRect(0, 0, w, h);
	ctx.strokeStyle = 'black';
	ctx.strokeRect = (0, 0, w, h);
	btn.setAttribute('disabled', true);
		var snakeX = snake[0].x;
		var sankeY = snake[0].y;
if (direction == 'right'){
snakeX++; }
else if (direction =='left'){
snakeX--;}
else if (direction =='up') {
snakeY--;}
else if (direction == 'down'){
snakeY++ ;   }
if ( snakeX == -1 || snakeX == w/rozmiar || snakeY == -1 || snakeY == h/rozmiar || kolizja(snakeX, snakeY, snake))
{
 // przerywamy grę
 // ponownie przycisk startu staje się dostepny
btn.removeAttribute('disabled', true);
 // czyscimy cały canvas
ctx.clearRect(0, 0 ,w ,h);
gameloop = clearInterval(gameloop);
return;
}
	if (snakeX == food.x && snakeY == food.y)
{
	// stworzenie dodatkowego kwadracika zamiast ruszania ogonem
	var ogon = {
		x: snakeY,
		y: snakeX
	};
	score ++;
	//stworzenie nowego jedzenia
	twjedzenia();
} else {
	var tail = snake.pop();
	tail.x = snakeX;
	tail.y = snakeY;
}
		//przemieszczenie ogona na pierwsza komorke
		snake.unshift(tail);
		// dla każdego elementu tablicy tworzy kwadracik, uzywamy funkcji stworzenia ciala węża
		for (var i = 0; i < snake.length; i++) {
			cialo(snake[i].x, snake[i].y);
		}
		
		//tworzenie jedzenia funkcja food
		food(jedzenie.x, jedzenie.y);
		
		//wyswietlanie wyniku
		tablicapkt();
};
var init = function () {
	direction = 'down';
	poruszanie();
	twjedzenie();
	gameloop = setInterval(rysowanie, 80);
	
	return {
		init: init
	};
}());
 
	

