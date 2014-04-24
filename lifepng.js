var lifepng = {
    'width': 12,
    'padWidth': 2
};

onload = function(){
    var imgPATH = "life/";
    var width = lifepng.width;
    var padWidth = lifepng.padWidth;
    var canvas = document.getElementById('board');
    if (canvas.getContext('2d')) {
        var context = canvas.getContext('2d');
        var dead = new Image();
        dead.src = imgPATH + "dead.png"
        var alive = new Image();
        alive.src = imgPATH + "alive.png"
        var horizon = new Image();
        horizon.src = imgPATH + "horizon.png"
        var vertical = new Image();
        vertical.src = imgPATH + "vertical.png"
        var padding = new Image();
        padding.src = imgPATH + "padding.png"
        var Loader = function(expectedCnt, callback){
            var cnt = 0;
            return function(){
                if(++cnt == expectedCnt){ callback(); }
            }
        };
        var loader = Loader(5, function(){
            document.getElementById("status").innerText = "準備完了";
            document.getElementById("status").style.display="none";
        });
        dead.onload = loader;
        alive.onload = loader;
        horizon.onload = loader;
        vertical.onload = loader;
        padding.onload = loader;

        lifepng.draw = function (){
            var strs = document.getElementById("input").value.split("\n");
            var h = strs.length;
            var maxW = 0;
            for(var i=0; i < strs.length; ++i){
                maxW = Math.max(maxW, strs[i].length);
            }
            document.getElementById("board").width = maxW * width + (maxW-1) * padWidth;
            document.getElementById("board").height = h * width + (h-1) * padWidth;

            for(var i=0; i < h; ++i){
                for(var j=0; j < maxW; ++j){
                    if(strs[i][j] == 1){
                        context.drawImage(alive, j * (width + padWidth), i * (width + padWidth));
                    }else{
                        context.drawImage(dead , j * (width + padWidth), i * (width + padWidth));
                    }
                    if(j < maxW - 1){
                        context.drawImage(vertical, (j+1) * width + j * padWidth, i * (width + padWidth));
                    }
                }
                if(i < h - 1){
                    for(var j=0; j < maxW; ++j){
                        context.drawImage(horizon , j * (width + padWidth), (i + 1) * width + i * padWidth);
                        if(j < maxW - 1){
                            context.drawImage(padding, (j+1) * width + j * padWidth, (i + 1) * width + i * padWidth);
                        }
                    }
                }
            }
        }
    }
};

// function toImage(){
//     var canvas = document.getElementById('board');
//     if (canvas.getContext('2d')) {
//         document.getElementById("lifepngIMG").src = canvas.toDataURL();
//         document.getElementById("lifepngIMG").alt = "";
//     }
// }

lifepng.next = function (){
    function sumMoore(map, i, j){
        var sum = 0;
        if(map[i-1] != null){
            if(map[i-1][j-1] != null && map[i-1][j-1] == 1) ++sum;
            if(map[i-1][ j ] != null && map[i-1][ j ] == 1) ++sum;
            if(map[i-1][j+1] != null && map[i-1][j+1] == 1) ++sum;
        }
        if(map[i] != null){
            if(map[i][j-1] != null && map[i][j-1] == 1) ++sum;
            if(map[i][j+1] != null && map[i][j+1] == 1) ++sum;
        }
        if(map[i+1] != null){
            if(map[i+1][j-1] != null && map[i+1][j-1] == 1) ++sum;
            if(map[i+1][ j ] != null && map[i+1][ j ] == 1) ++sum;
            if(map[i+1][j+1] != null && map[i+1][j+1] == 1) ++sum;
        }
            
        return sum;
    }
    
    var strs = document.getElementById("input").value.split("\n");
    var map = [];
    var h = strs.length;
    var maxW = 0;
    for(var i=0; i < strs.length; ++i) maxW = Math.max(maxW, strs[i].length);
    for(var i=0; i < h; ++i) map[i] = [];

    for(var i=0; i < h; ++i){
        for(var j=0; j < maxW; ++j){
            var sum = sumMoore(strs, i, j);
            if(strs[i][j] == 1){
                if(sum == 2 || sum == 3 ){ map[i][j] = '1'; }
                else { map[i][j] = '0'; }
            }
            else{
                if(sum == 3) { map[i][j] = '1'; }
                else { map[i][j] = '0'; }
            }
        }
    }
    for(var i=0; i < h; ++i) map[i] = map[i].join("");
    document.getElementById("input").value = map.join("\n");
    this.draw();
}

lifepng.randomize = function(){
    var strs = document.getElementById("input").value.split("\n");
    var map = [];
    var h = strs.length;
    var maxW = 0;
    for(var i=0; i < strs.length; ++i) maxW = Math.max(maxW, strs[i].length);
    for(var i=0; i < h; ++i) map[i] = [];
    for(var i=0; i < h; ++i)
        for(var j=0; j < maxW; ++j)
            map[i][j] = !(Math.random()+.5|0)+0;
    for(var i=0; i < h; ++i) map[i] = map[i].join("");
    document.getElementById("input").value = map.join("\n");
    this.draw();
}
