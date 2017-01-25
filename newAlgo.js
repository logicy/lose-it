

      $.newWinAlgo = function(){
        var m = $.config.m;
        var n = $.config.n;
        var map = $.matrix;
        var win = false;

        //check all m horizontals
        for (var i = 0; i < m; i++) {
          for (var j = 0; j < n; j++) {
              !map[i][j] && break;
              j>0 && map[i][j-1] map[i][j]==map[i][j-1]
              // if (j>0) {
              //   if(map[i][j]!=map[i][j-1]) {
              //     win = false;break;
              //   }
              // }
          }
          if (win) {
            return map[i][0];
          }
        }
      }
