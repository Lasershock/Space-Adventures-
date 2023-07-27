/*import {background} from './background.js';
import {earth} from './earth.js';
import {npc} from './npc.js'; */



window.addEventListener('load',function(){

    const canvas =document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width =500;
    canvas.height =500;

    function welcome() {
        const space = document.getElementById('space');
        ctx.drawImage(space, 0, 0, canvas.width*1, canvas.height*1)

        const moon = document.getElementById('moon');
        ctx.drawImage(moon, 0, 200, 200, 200)

        const earth = document.getElementById('earth');
        ctx.drawImage(earth, 0, 0, 500, 500)
        
        const npc = document.getElementById('npc');
        ctx.drawImage(npc, 180, 100, 370, 400)

        const bubble = document.getElementById('text-bubble');
        ctx.drawImage(bubble,-10, -30, 400, 300) 

        ctx.font = "15px Comic Sans MS";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText("Welcome, new recruite. I am glad that", 180, 43);
        ctx.fillText("you could make it here safely. And by", 177, 73);
        ctx.fillText("here... I mean the ISS space station,", 175, 100);
        ctx.fillText("of course.", 80, 130);

    
        canvas.addEventListener("click", (e) => {  
            second_screen()  
        }, { once: true });  
      }


    function second_screen (){
        const space = document.getElementById('space');
        ctx.drawImage(space, 0, 0, canvas.width*1, canvas.height*1)

        const npc = document.getElementById('npc');
        ctx.drawImage(npc, 180, 100, 370, 400)

        const iss = document. getElementById('iss');
        ctx.drawImage(iss, 0, 0, 300, 300)

        const rev_bubble = document.getElementById('rev-text-bubble');
        ctx.drawImage(rev_bubble,-40, 270, 400, 300) 

        ctx.font = "15px Comic Sans MS";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText("The ISS is the largest spaces station in ", 160, 390);
        ctx.fillText("the world...well outside of it, technically.", 160, 415);
        ctx.fillText("Here, let me give you a tour", 115,440);

        const second_screen_abortController = new AbortController();
        document.addEventListener("keypress", (event) => {
        if (event.key=="Enter"){
            second_screen_abortController.abort()  
            welcome()  
        }
        }, {signal: second_screen_abortController.signal});
  
    }

    welcome()
});

