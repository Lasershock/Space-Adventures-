/*import {background} from './background.js';
import {earth} from './earth.js';
import {npc} from './npc.js'; */

window.addEventListener('load',function(){
    const canvas =document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width =500;
    canvas.height =500;

const space = document.getElementById("space");
ctx.drawImage(space, 0,0,canvas.width*1, canvas.height*1);










    /*  const background_img = new Image(); // Create new img element
background_img.src = "imgs/space-background.jpg";
background_img.onload = function() {
          ctx.drawImage(background_img, 0, 0, canvas.width*1, canvas.height*1);
        };

    const npc_img = new Image();
npc_img.src = "imgs/npc.png";
npc_img.onload = function(){
        ctx.drawImage(npc_img, 170,110,380,400);
};

    const earth_img = new Image();
earth_img.src = "imgs/earth.png";
earth_img.onload = function(){
        ctx.drawImage(earth_img, 0,30,730,500);
};

    const moon_img = new Image();
moon_img.src = "imgs/moon.png";
moon_img.onload = function(){
        ctx.drawImage(moon_img, 20,260,170,170);
};

    const text_img = new Image();
text_img.src = "imgs/text.png";
text_img.onload = function(){
        ctx.drawImage(text_img, 0,30,430,300);
};
 //   };

       //canvas.width*0.2

    /* class Game {
        constructor(width, height){
            this.width =width;
            this.height=height;
            this.background = new background(this);
        }
        update(){
            this.background.update();
        }
        draw(context){
            this.background.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height);
    console.log(game); */

});
