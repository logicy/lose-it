var app = angular.module('loseItApp',[]);
    app.controller('mainCntr',['$scope', function($){
      $.gameState = 0; //noGame
      $.defaultBoardSize = 3
      $.pastBoardSize = $.pastBoardSize || $.defaultBoardSize;

      $.startGame = function(boardSize, firstTurn, gameType) {
        $.gameState = 1; //gameReady
        $.config = {};
        $.config.m = boardSize || $.pastBoardSize;
        $.config.n = boardSize || $.pastBoardSize;
        $.pastBoardSize = boardSize || $.pastBoardSize;

        $.flag = {};
        $.flag.turnPlayer = !!firstTurn;

        $.matrix = [];
        for (var i = 0; i < $.config.m; i++) {
          var a = [];
          for (var j = 0; j < $.config.n; j++) {
            a.push(0);
          }
          $.matrix.push(a);
        }
        if (!gameType) {
          $.players = {};
          $.players.bot1 = new Bot('bot botty');
          console.log($.players);
        };
        $.gameState = 2; //gameStarted
      }

      $.handleClick = function(i,j){
        if ($.gameState>=10) {return;}
        $.gameState = 3; //gameTouched
        // console.log(i,j);
        if (!$.matrix[i][j]){
          if ($.flag.turnPlayer) {
            $.matrix[i][j] = 1;
          }
          else {
            $.matrix[i][j] = 2;
          }
          // console.log('--------',$.checkWin());
          // $.flag.gameStatusText = $.checkWin() + 'wins';
          if (!$.checkWin()) {
            if($.checkTie()) {
              $.gameState = 12; //gameOverTie
              $.flag.gameStatusText = "game tie.";
            }
          } else {
            $.gameState = 11; //gameOverWin
            $.flag.gameStatusText = ($.checkWin()==2?'X':'O') + ' wins.';
          };
          // alert($.flag.gameStatusText);
          $.flag.turnPlayer = !$.flag.turnPlayer;
        }
        if (!$.gameType && $.flag.turnPlayer) {
          $.handleClick($.players.bot1.move()/*Math.floor(Math.random()*$.config.m),Math.floor(Math.random()*$.config.n)*/);
        };
      }

      $.checkTie = function(){
        var m = $.config.m;
        var n = $.config.n;
        var map = $.matrix;

        //check if all filled
        var tie = true;
        for (var i = 0; i < m; i++) {
          for (var j = 0; j < n; j++) {
            if (!map[i][j]) {
              var tie = false;break;
            }
          }
        }
        return tie;
      }

      $.checkWin = function(){
        var m = $.config.m;
        var n = $.config.n;
        var map = $.matrix;

        //check all m horizontals
        for (var i = 0; i < m; i++) {
          var win = true;
          for (var j = 0; j < n; j++) {
            if (!!map[i][j]) {//console.log('ifNotZero');
              if (j>0) {
                if(map[i][j]!=map[i][j-1]) {
                  win = false;break;
                }
              }
            }
            else {
              win = false;break;
            }
          }
          if (win) {
            return map[i][0];
          }
        }

        //check all n verticals
        for (var j = 0; j < m; j++) {
          var win = true;
          for (var i = 0; i < n; i++) {
            if (!!map[i][j]) {//console.log('ifNotZero');
              if (i>0) {
                if(map[i][j]!=map[i-1][j]) {
                  win = false;break;
                }
              }
            }
            else {
              win = false;break;
            }
          }
          if (win) {
            return map[0][j];
          }
        }

        //check both diagonals
        {//check left diagonal
          var win = true;
          for (var j = 0; j < n; j++) {
            if (!!map[j][j]) {//console.log('ifNotZero');
              if (j>0) {
                if(map[j][j]!=map[j-1][j-1]) {
                  win = false;break;
                }
              }
            }
            else {
              win = false;break;
            }
          }
          if (win) {
            return map[0][0];//or j-1,j-1
          }
        }

        {//check right diagonal
          var win = true;
          for (var j = 0; j < n; j++) {
            if (!!map[j][n-j-1]) {//console.log('ifNotZero');
              if (j>0) {
                if(map[j][n-j-1]!=map[j-1][n-j]) {
                  win = false;break;
                }
              }
            }
            else {
              win = false;break;
            }
          }
          if (win) {
            return map[0][n-1];//or j-1,j-1
          }
        }

        return false;

      }

      $.showMatrixValue = function(i,j){
        // console.log(i,j);
        return $.matrix[i][j];
      }

      //number to array for ng-repeat: 4 -> [1,2,3,4]
    	$.numberToArray = function(num){
    		var arr = [];
    		//i must start with 1 and end to num
    		for (var i = 1; i <= num; i++) {arr.push(i);};
    		return arr;
    	}

      // $.startGame();
    }])