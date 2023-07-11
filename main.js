/*import {background} from './background.js';
import {earth} from './earth.js';
import {npc} from './npc.js'; */

window.addEventListener('load',function(){
    const canvas =document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width =500;
    canvas.height =500;

    const background_img = new Image(); // Create new img element
background_img.src = "space-background.jpg";
background_img.onload = function() {
          ctx.drawImage(background_img, 0, 0, canvas.width*1, canvas.height*1);
        };

    

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
