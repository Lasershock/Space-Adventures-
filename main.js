import {background} from './background.js';
import {earth} from './earth.js';
import {npc} from './npc.js';

window.addEventListener('load',function(){
    const canvas =document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width =500;
    canvas.height =500;

    class Game {
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
    console.log(game);

});