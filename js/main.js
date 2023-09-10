
var delayInMilliseconds = 0; //1000 = 1 second (final game will have 3000 (3 sec))
var button_hold=5000;
function clearText(ctx, x, y, width, height) {
  ctx.clearRect(x, y, width, height);
}


function canvas_click(canvas, evt) {

  var rect = canvas.getBoundingClientRect();  
  
  return {  
  
      x: 100*(evt.clientX - rect.left)/canvas.width,  
  
      y: 100*(evt.clientY - rect.top)/canvas.height  
  
  };  
  }

window.addEventListener('load',function(){

  async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function fade_in(fade_ms) {
   let overlay = document.getElementById("canvas-overlay");
   overlay.style.setProperty("display","initial")
    for (let i = 0; i <= fade_ms; i++) {
      //overlay.style.setProperty("background-color", `rgba(0, 0, 0, ${i / fade_ms})`);
      await sleep(1);
    }
  }
  async function fade_out(fade_ms) {
    let overlay = document.getElementById("canvas-overlay");
  
    for (let i = 0; i <= fade_ms; i++) {
      overlay.style.setProperty("background-color", `rgba(0, 0, 0, ${1 - i / fade_ms})`);
      await sleep(1);
    }
    overlay.style.setProperty("display","none")
  }

    const canvas =document.getElementById('canvas1');
    const overlay = document.getElementById('canvas-overlay');
    const ctx = canvas.getContext('2d');
    canvas.width =500;
    canvas.height =500;

    canvas.addEventListener("click", (e) =>{
    let coords=canvas_click(canvas, e)
    console.log(`x: ${coords.x}`)
    console.log(`Y: ${coords.y}`)
  })

    async function welcome() {
      const intro = document.getElementById('intro');
      ctx.drawImage(intro, 0, 0, canvas.width*1, canvas.height*1)
      var clickMeButton = document.createElement('button');
        clickMeButton.id = 'play';
        clickMeButton.innerHTML = 'Play';
        clickMeButton.style.background = '#4FFF8F';
        clickMeButton.style.width = '150px'; // Set the width to 100 pixels
        clickMeButton.style.height = '50px'; // Set the height to 50 pixels
        clickMeButton.style.position = 'absolute'; // To position the button with top and left
        clickMeButton.style.top = '370px';
        clickMeButton.style.left = '650px';
        document.body.appendChild(clickMeButton);

        ctx.font = "70px Comic Sans MS";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Space", 230, 90);
        ctx.fillText("Adventures", 250, 400);

        setTimeout(async function(){
          play.addEventListener('click', function() {
          fade_in(700);
          first_screen()
          {document.getElementById("play").style.display="none";}
          fade_out(200); 
}); 
    },delayInMilliseconds)


    }
      async function first_screen(){
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
        ctx.fillText("Welcome, new recruit. I am glad that", 180, 43);
        ctx.fillText("you could make it here safely. And by", 177, 73);
        ctx.fillText("here... I mean the ISS space station,", 175, 100);
        ctx.fillText("of course. (Click on screen)", 140, 130); 

        setTimeout(async function(){

            canvas.addEventListener("click", async(e) => {  
                fade_in(700); 
                //await sleep(2000); 
                second_screen() 
                fade_out(200); 
            }, { once: true });  


        },delayInMilliseconds)

      }
      



    async function second_screen (){
        const space = document.getElementById('space');
        ctx.drawImage(space, 0, 0, canvas.width*1, canvas.height*1)

        const npc = document.getElementById('npc');
        ctx.drawImage(npc, 180, 100, 370, 400)

        const iss = document. getElementById('iss');
        ctx.drawImage(iss, 0, 0, 300, 300)

        const rev_bubble = document.getElementById('rev-text-bubble');
        ctx.drawImage(rev_bubble,-40, 270, 400, 300) 

        const moon = document.getElementById('moon');
        ctx.drawImage(moon, 350, -50, 200, 200)

        ctx.font = "15px Comic Sans MS";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText("The ISS is the largest spaces station in ", 160, 390);
        ctx.fillText("the world...well outside of it, technically.", 160, 415);
        ctx.fillText("Here, let me give you a tour-", 115,440);

        
        setTimeout(function(){

            canvas.addEventListener("click", async(e) => {  
                fade_in(700); 
                third_screen() 
                fade_out(200); 
 
            }, { once: true });  

        },delayInMilliseconds)

        
        const second_screen_abortController = new AbortController();
        document.addEventListener("keypress", (event) => {
        if (event.key=="Enter"){

            {document.getElementById("Choice_1").style.display="none";}
            {document.getElementById("Choice_2").style.display="none";}
            {document.getElementById("Choice_3").style.display="none";}
            {document.getElementById("Choice_4").style.display="none";}
            second_screen_abortController.abort()  
            welcome()
        }
        }, {signal: second_screen_abortController.signal});


      }
    
   async function third_screen (){
        const space = document.getElementById('space');
        ctx.drawImage(space, 0, 0, canvas.width*1, canvas.height*1)
        
        var clickMeButton = document.createElement('button');
        clickMeButton.id = 'Choice_1';
        clickMeButton.innerHTML = 'Eat in Space';
        clickMeButton.style.background = '#4FFF8F';
        clickMeButton.style.width = '150px'; // Set the width to 100 pixels
        clickMeButton.style.height = '50px'; // Set the height to 50 pixels
        clickMeButton.style.position = 'absolute'; // To position the button with top and left
        clickMeButton.style.top = '400px';
        clickMeButton.style.left = '500px';
        document.body.appendChild(clickMeButton);

        var clickMeButton = document.createElement('button');
        clickMeButton.id = 'Choice_2';
        clickMeButton.innerHTML = 'Visit Space Walk';
        clickMeButton.style.background = '#4FFF8F';
        clickMeButton.style.width = '150px'; // Set the width to 100 pixels
        clickMeButton.style.height = '50px'; // Set the height to 50 pixels
        clickMeButton.style.position = 'absolute'; // To position the button with top and left
        clickMeButton.style.top = '400px';
        clickMeButton.style.left = '800px';
        document.body.appendChild(clickMeButton);

        var clickMeButton = document.createElement('button');
        clickMeButton.id = 'Choice_3';
        clickMeButton.innerHTML = 'Planets';
        clickMeButton.style.background = '#4FFF8F';
        clickMeButton.style.width = '150px'; // Set the width to 100 pixels
        clickMeButton.style.height = '50px'; // Set the height to 50 pixels
        clickMeButton.style.position = 'absolute'; // To position the button with top and left
        clickMeButton.style.top = '530px';
        clickMeButton.style.left = '650px';
        document.body.appendChild(clickMeButton);

        const npc = document.getElementById('npc');
        ctx.drawImage(npc, 40, 140, 360, 390)

        const moon = document.getElementById('moon');
        ctx.drawImage(moon, -70, -50, 200, 200)

        const bubble = document.getElementById('text-bubble');
        ctx.drawImage(bubble,40, 10, 400, 300)
        
        ctx.font = "25px Comic Sans MS";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText("PICK   YOUR   JOURNEY ", 245, 100);
        ctx.font = "20px Comic Sans MS";
        ctx.fillText("Where would you like to go?", 235, 170);

        setTimeout(async function(){
        Choice_1.addEventListener('click', function() {
          fade_in(700);
          eat_in_space()
          {document.getElementById("Choice_1").style.display="none";}
          {document.getElementById("Choice_2").style.display="none";}
          {document.getElementById("Choice_3").style.display="none";}
          fade_out(200); 
      });
    },delayInMilliseconds)
        
          setTimeout(async function(){
          Choice_2.addEventListener('click', function() {
          fade_in(700);
          spacewalk()
          {document.getElementById("Choice_1").style.display="none";}
          {document.getElementById("Choice_2").style.display="none";}
          {document.getElementById("Choice_3").style.display="none";}
          fade_out(200); 
  });
    },delayInMilliseconds)

          setTimeout(async function(){
          Choice_3.addEventListener('click', function() {
          fade_in(700);
          planet()
          {document.getElementById("Choice_1").style.display="none";}
          {document.getElementById("Choice_2").style.display="none";}
          {document.getElementById("Choice_3").style.display="none";}
          fade_out(200); 
}); 
    },delayInMilliseconds)

   }
      

    async function eat_in_space (){
      const eat = document.getElementById('eat');
      ctx.drawImage(eat, 0, 0, canvas.width*1, canvas.height*1)
      const eat_npc = document.getElementById('eat_npc')
      ctx.drawImage(eat_npc, -30 ,190, 250, 300)
      const text_bubble = document.getElementById('flip-text-bubble');
      ctx.drawImage(text_bubble, 130, 30, 340, 240)
      ctx.font = "15px Comic Sans MS";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText("Welcome to the Snack Shack. Here grab", 285, 107); 
      ctx.fillText("this powdered bevarage by clicking it.", 275, 127)
      
      ctx.fillRect(300,280,100,130);

      const food = document.getElementById('food');
      ctx.drawImage(food, 200,150,300,300) 
      
      const water_press_abort = new AbortController();

      canvas.addEventListener("click", async(e) => {  //put in click img function
        let coords=canvas_click(canvas, e)


        
        if(!(coords.x <= 82.1 && coords.x >= 61.9 && coords.y <= 80.6 && coords.y >= 57.2)){
          return undefined
        }
        water_press_abort.abort()

        const x = 140;
        const y = 90;
        const width = 300;
        const height = 45;
        clearText(ctx, x, y, width, height);
        ctx.fillText("Nice, now try adding some water.", 260, 107); 
        ctx.fillText("Make sure to shake it well!.", 240, 127)
        ctx.fillText("(click the water then the powdered drink)", 290, 145)//add button counter under water, if water clicked added 1 to counter, if powerdered drink clicked and another 1. if counter = 2, switch screen eat_in_space_2
        fade_in(700)
        const water = document.getElementById('water');
        ctx.drawImage(water, 180, 200, 100, 150)
        fade_out(200)

      const bottel_press = new AbortController();
      canvas.addEventListener('click', async(e) => {
        let coords=canvas_click(canvas, e)


        if(!(coords.x <= 52.1 && coords.x >= 41.9 && coords.y <= 66.8 && coords.y >= 48.8)){
          return undefined
        }
        bottel_press.abort()

        const water_press_again = new AbortController();
        canvas.addEventListener('click', async(e) => {
          let coords=canvas_click(canvas, e)


          if(!(coords.x <= 82.1 && coords.x >= 61.9 && coords.y <= 80.6 && coords.y >= 57.2)){
            return undefined
          }
          water_press_again.abort()
          fade_in(700)
          eat_in_space_2()
          fade_out(200)
        }, {signal: water_press_again.signal});
      }, {signal: bottel_press.signal});


      }, {signal: water_press_abort.signal});
     }

     async function eat_in_space_2(){
      const eat = document.getElementById('eat');
      ctx.drawImage(eat, 0, 0, canvas.width*1, canvas.height*1)
      const eat_npc = document.getElementById('eat_npc')
      ctx.drawImage(eat_npc, -30 ,190, 250, 300)
      const text_bubble = document.getElementById('flip-text-bubble');
      ctx.drawImage(text_bubble, 130, 30, 340, 240)
      const food_ready = document.getElementById('food_ready') //
      ctx.drawImage(food_ready, 200,150,300,300) //
      ctx.fillText("Great, drink it by double clicking it", 285, 90); 

      const ready_press = new AbortController();
      canvas.addEventListener('click', async(e)=>{
        let coords=canvas_click(canvas,e)
        if(!(coords.x <= 82.1 && coords.x >= 61.9 && coords.y <= 80.6 && coords.y >= 57.2)){
          return undefined
        }
        ready_press.abort()

        const ready_press2=new AbortController();
        canvas.addEventListener('click', async(e)=>{
        if(!(coords.x <= 82.1 && coords.x >= 61.9 && coords.y <= 80.6 && coords.y >= 57.2)){
          return undefined
        }
        ready_press2.abort()

        const x = 140;
        const y = 65;
        const width = 300;
        const height = 30;
        clearText(ctx, x, y, width, height);
        confetti();

        ctx.fillText("Wow! You are a natural!", 285, 90); 
        ctx.fillText("Click the screen to pick your next journey", 295, 105); 
        {document.getElementById("food_ready").style.display="none";}


        canvas.addEventListener('click', async(e)=>{
          fade_in(700)
          third_screen()
          fade_out(200)
        },{once:true})
      },{signal:ready_press2.signal})
    },{signal:ready_press.signal})

    

    setTimeout(async function(){
      Choice_2.addEventListener('click', function() {
      fade_in(700);
      spacewalk()
      {document.getElementById("Choice_1").style.display="none";}
      {document.getElementById("Choice_2").style.display="none";}
      {document.getElementById("Choice_3").style.display="none";}
      fade_out(200); 
});
},delayInMilliseconds)

      setTimeout(async function(){
      Choice_3.addEventListener('click', function() {
      fade_in(700);
      planet()
      {document.getElementById("Choice_1").style.display="none";}
      {document.getElementById("Choice_2").style.display="none";}
      {document.getElementById("Choice_3").style.display="none";}
      fade_out(200); 
}); 
},delayInMilliseconds)


     }


     async function spacewalk (){
     
     }

     async function planet (){ //if you do skip u will explore the planets
      const intro_planets = document.getElementById('intro_planets');
      ctx.drawImage(intro_planets, 0, 0, canvas.width*1, canvas.height*1)

      const npc = document.getElementById('npc');
      ctx.drawImage(npc, 180, 100, 370, 400)

      const bubble = document.getElementById('text-bubble');
      ctx.drawImage(bubble,-10, -30, 400, 300)

      ctx.font = "15px Comic Sans MS";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText("You made a great choice!", 180, 43);
      ctx.fillText("(Click the button to enter the spaceship)", 180, 60);

      var clickMeButton = document.createElement('button');
      clickMeButton.id = 'Enter';
      clickMeButton.innerHTML = 'Enter Spaceship';
      clickMeButton.style.background = '#4FFF8F';
      clickMeButton.style.width = '150px'; // Set the width to 100 pixels
      clickMeButton.style.height = '50px'; // Set the height to 50 pixels
      clickMeButton.style.position = 'absolute'; // To position the button with top and left
      clickMeButton.style.top = '400px';
      clickMeButton.style.left = '500px';
      document.body.appendChild(clickMeButton);

      Enter.addEventListener('click', function() {
        fade_in(700);
        journey()
        {document.getElementById("Enter").style.display="none";}
        fade_out(200); 
      });

      
   
     }
async function journey(){
  const journey_screen = document.getElementById('journey_screen')
  ctx.drawImage(journey_screen, 0, 0, canvas.width*1, canvas.height*1)

  ctx.font = "20px Comic Sans MS";
  ctx.fillStyle = "white";
  ctx.fillText("CLICK SCREEN TO TRAVEL",260,470);

  canvas.addEventListener('click', function(){
    fade_in(700)
    mercury()
    fade_out(200)
  }, { once: true });  
} 
async function mercury(){

  ctx.font = "15px Comic Sans MS";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";

  const space = document.getElementById('space');
  ctx.drawImage(space, 0, 0, canvas.width*1, canvas.height*1)

  const mercury=document.getElementById('mercury');
  ctx.drawImage(mercury, 230, 230, 330,330)

  const eat_npc = document.getElementById('eat_npc')
  ctx.drawImage(eat_npc, -30 ,190, 250, 300)
  const text_bubble = document.getElementById('flip-text-bubble');
  ctx.drawImage(text_bubble, 130, 30, 340, 240)
  ctx.fillText("This is Mercury. The closes planet to", 275, 75); 
  ctx.fillText("the sun. There is no water or life here.", 280, 90); 
  ctx.fillText("It is also the smallest planet in our", 280, 110); 
  ctx.fillText("Solar system. Also, unlike like our earth", 285, 125); 
  ctx.fillText("Mercury doesn't have a moon.", 270, 145); 
  ctx.fillText("Hmm, I think someone is watching us...", 285, 160); 
  ctx.fillText("Click the alien to scare them off", 280, 175); 

  const ufo = document.getElementById('ufo');
  ctx.drawImage(ufo,-50,-30,100,100)

  const ufo_click = new AbortController();
  canvas.addEventListener('click', async(e) => {
    let coords=canvas_click(canvas, e)


    if(!(coords.x >= 0 && coords.x <= 13 && coords.y >= 0 && coords.y <= 14)){
      return undefined
    }
    ufo_click.abort()
    fade_in(700);
    venus()
    fade_out(200);
  }, {signal: ufo_click.signal});


}

async function venus(){
  const space = document.getElementById('space');
  ctx.drawImage(space, 0, 0, canvas.width*1, canvas.height*1)
  
  const redBox = document.getElementById('redBox');
redBox.style.width = '500px'; 
redBox.style.height = '500px';
redBox.style.position = 'absolute';
redBox.style.top='85px'
redBox.style.left='470px'


redBox.style.backgroundColor = 'rgba(255, 0, 0, 0.2)'; 

  const venus=document.getElementById('venus');
 ctx.drawImage(venus,-10,230,330,330)
 const npc = document.getElementById('npc');
 ctx.drawImage(npc, 180, 100, 370, 400)
 const text=document.getElementById('text-bubble');
ctx.drawImage(text,-10,-10,380,330)

ctx.font = "15px Comic Sans MS";
ctx.fillStyle = "black";
ctx.textAlign = "center";
ctx.fillText("And this here is Venus,", 120,60);
ctx.fillText("the hottest planet in our solar system!", 168, 80); 
ctx.fillText("It also has a very thick atmosphere,", 170, 100); 
ctx.fillText("which is the reason for this red hue.", 165, 120); 
ctx.fillText("To go to the next planet,", 168, 140); 
ctx.fillText("click on my remote.", 168, 160); 

setTimeout(async function(){
const remote=document.getElementById('remote')
ctx.drawImage(remote, 410, 340, 85, 85)
},button_hold)

const controller_click=new AbortController
redBox.addEventListener('click', async(e) => {
  let coords=canvas_click(canvas, e)

  if(!(coords.x <= 97.3 && coords.x >= 87.1 && coords.y >= 75.8 && coords.y <= 78.4)){
    return undefined
  }
  controller_click.abort()
  fade_in(700);
  {document.getElementById("redBox").style.display="none";}

  mars()
  fade_out(200);
}, {signal: controller_click.signal});


}


async function mars(){
  const space = document.getElementById('space');
  ctx.drawImage(space, 0, 0, canvas.width*1, canvas.height*1)
  const mars=document.getElementById('mars');
  ctx.drawImage(mars,-10,230,330,330)

  const npc=document.getElementById('npc');
  ctx.drawImage(npc, 200,150, 360,390);
  const text=document.getElementById('text-bubble')
  ctx.drawImage(text,-50, -30,460,380)
  const earth=document.getElementById('earth_full')
  ctx.drawImage(earth,410,-8,120,120)

  ctx.font = "15px Comic Sans MS";
ctx.fillStyle = "black";
ctx.textAlign = "center";
ctx.fillText("Wow, we skipped earth and went to mars", 188,70);
ctx.fillText("This shouldn't have happened", 170,90);
ctx.fillText("Oh well, we can always go back later", 170,110);
ctx.fillText("(Click screen to learn about mars)", 170,130);

canvas.addEventListener('click',async(e)=>{
  const x = 43;
  const y = 50;
  const width = 295;
  const height = 120;
  clearText(ctx, x, y, width, height);
  ctx.fillText("Mars is the closest planet to earth.", 188,70);
ctx.fillText("It is also a planet that we might potentially live on.", 182,90);
ctx.fillText("The reason it looks red, is due to the large", 170, 110);
ctx.fillText("amount of iron in the planets crust :)", 170,130);
ctx.fillText("And due to its lack of atmosphere...its pretty cold.", 182,150);
ctx.fillText("If you want to go to the next planet,", 170,170);
ctx.fillText("click on the large bright star above me", 170,190);
},{ once: true });  

const star_click=new AbortController
canvas.addEventListener('click',async(e)=>{
  let coords=canvas_click(canvas, e)
  if(!(coords.x <= 83.1 && coords.x >= 77.5 && coords.y <= 17 && coords.y >= 8.6)){
    return undefined
  }
  star_click.abort()
  fade_in(700);
  jupiter()
  fade_out(200);
  
},{signal:star_click.signal})


async function jupiter(){
  const space = document.getElementById('space');
  ctx.drawImage(space, 0, 0, canvas.width*1, canvas.height*1)
}


}



    welcome()
});

   