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
		var wynik_tekst = "Score: " + wynik;
		ctx.fillStyle = 'pink';
		ctx.fillText(wynik_tekst, 145, h-5);
	}
