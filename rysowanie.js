var rys = (function () { 
  var cialo = function(x, y) {
        ctx.fillStyle = 'green';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        ctx.strokeStyle = 'purple';
        ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
  }

  var jedzonko = function(x, y) {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        ctx.fillStyle = 'red';
        ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
  }
  var przeszkody = function(x, y) {
    this.x = Math.floor((Math.random() * 30)+1);
    this.y = Math.floor((Math.random() * 30)+1);
    this.rysuj = function(){
      ctx.beginPath();
      ctx.fillStyle = 'black';
      ctx.rect(this.x*snakeSize,this.y*snakeSize,snakeSize,snakeSize); 
      ctx.stroke();
      ctx.fill();
    }
  }
  for(var i = 0;i<10;i++)
  {
    p[i] = new przeszkody;
  }
	  

  var wynik = function() {
    var wynik_text = "Score: " + score;
    ctx.fillStyle = 'black';
    ctx.fillText(wynik_text, 275, h-5);
  }

  var rysSnake = function() {
      var length = 3;
      snake = [];
      for (var i = length-1; i>=0; i--) {
          snake.push({x:i, y:0});
      }  
  }
    
  var paint = function(){
      ctx.fillStyle = 'lightgreen';
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = 'red';
      ctx.strokeRect(0, 0, w, h);

      btn.setAttribute('disabled', true);

      var snakeX = snake[0].x;
      var snakeY = snake[0].y;

      if (direction == 'right') { 
        snakeX++; }
      else if (direction == 'left') { 
        snakeX--; }
      else if (direction == 'up') { 
        snakeY--; 
      } else if(direction == 'down') { 
        snakeY++; }

      if (snakeX == -1 || snakeX == w/snakeSize || snakeY == -1 || snakeY == h/snakeSize || kolizja(snakeX, snakeY, snake)) {
          //restartowanie gry
          btn.removeAttribute('disabled', true);
		  alert("Niestety tym razem się nie udało, spróbój ponownie :) ");
          ctx.clearRect(0,0,w,h);
          gameloop = clearInterval(gameloop);
          return;          
        }
        
        if(snakeX == food.x && snakeY == food.y) {
          var tail = {x: snakeX, y: snakeY}; //tworzneie dodatkowego kwadracika zamiast ruszania ogona
          score ++;
          
          twjedzenia(); //tworzenie jedzenia
        } else {
          var tail = snake.pop(); //wyrzuca ostatnia komorke i zwraca jej wartosc
          tail.x = snakeX; 
          tail.y = snakeY;
        }
        //mozliwosc jedzenia przez weza
        snake.unshift(tail); //zwraca ogon jako pierwsza komorke

        for(var i = 0; i < snake.length; i++) {
          cialo(snake[i].x, snake[i].y);
        } 
        for(var i = 0;i<10;i++)
        {
          p[i].rysuj();
        }
        jedzonko(food.x, food.y); 
        wynik();
  }

  var twjedzenia = function() {
      food = {
        x: Math.floor((Math.random() * 30) + 1),
        y: Math.floor((Math.random() * 30) + 1)
      }

      for (var i=0; i>snake.length; i++) {
        var snakeX = snake[i].x;
        var snakeY = snake[i].y;
      
        if (food.x===snakeX && food.y === snakeY || food.y === snakeY && food.x===snakeX) {
          food.x = Math.floor((Math.random() * 30) + 1);
          food.y = Math.floor((Math.random() * 30) + 1);
        }
      }
  }

  var kolizja = function(x, y, array) {
      for(var i = 0; i < array.length; i++) {
        if(array[i].x === x && array[i].y === y)
        return true;
      } 
      for(var i = 0; i < p.length; i++) {
        if(p[i].x === x && p[i].y === y)
        return true;
      }
      return false;
  }

  var init = function(){
      direction = 'down';
      rysSnake();
      twjedzenia();
      for(var i = 0;i<10;i++)
      {
        p[i].rysuj();
      }
      gameloop = setInterval(paint, 80);
  }

    return {
      init : init
    };

    
}());
