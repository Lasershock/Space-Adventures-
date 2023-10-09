
var delayInMilliseconds = 0; //1000 = 1 second (final game will have 3000 (3 sec))
var button_hold=7000;
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

    function width(x){
      return x*canvas.width/100
    }
    function height(y){
      return y*canvas.height/100
    }

    const overlay = document.getElementById('canvas-overlay');
    const ctx = canvas.getContext('2d');

    //fix the resolution of the canvas
    const dpr = window.devicePixelRatio || 1;

const displaywidth = canvas.getBoundingClientRect().width;

const displayheight = canvas.getBoundingClientRect().height;

canvas.width = dpr * displaywidth;

canvas.height = dpr * displayheight;


    //

    canvas.addEventListener("click", (e) =>{
    let coords=canvas_click(canvas, e)
    console.log(`x: ${coords.x}`)
    console.log(`Y: ${coords.y}`)
  })

    async function welcome() {
      const intro = document.getElementById('intro');
      ctx.drawImage(intro, 0, 0, width(100), height(100))
      var clickMeButton = document.createElement('button');
        clickMeButton.id = 'play';
        clickMeButton.innerHTML = 'Play';
        clickMeButton.style.background = '#4FFF8F';
        clickMeButton.style.width = '11%'; // Set the width to 100 pixels
        clickMeButton.style.height = '9%'; // Set the height to 50 pixels
        clickMeButton.style.position = 'absolute'; // To position the button with top and left
        clickMeButton.style.top = '70%';
        clickMeButton.style.left = '45%';
        document.body.appendChild(clickMeButton);

        ctx.font = "160px Comic Sans MS";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Space", 650, 150);
        ctx.fillText("Adventures", 650, 400);

        setTimeout(async function(){
          play.addEventListener('click', function() {
          fade_in(700);

          var audio = new Audio('imgs/Transition_1.MP3');
          audio.play();

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
        ctx.drawImage(moon, -30, 800, 700, 700)

        const earth = document.getElementById('earth');
        ctx.drawImage(earth, 0, 300, 1100, 1100)
        
        const npc = document.getElementById('hand_npc');
        ctx.drawImage(npc, 520, 420, 1070, 1000)

        const bubble = document.getElementById('text-bubble');
        ctx.drawImage(bubble,160, -30, 900, 800) 

        

        ctx.font = "38px Comic Sans MS";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText("Welcome, new recruit. I am glad that", 610, 183);
        ctx.fillText("you could make it here safely. And by", 607, 220);
        ctx.fillText("here... I mean the ISS space station,", 615, 260);
        ctx.fillText("of course. (Click on screen :)", 570, 300); 

        setTimeout(async function(){

            canvas.addEventListener("click", async(e) => {  
                fade_in(700); 
                //await sleep(2000); 
                var audio1 = new Audio('imgs/Transition_2.MP3');
                audio1.play();
                second_screen() 
                fade_out(200); 
            }, { once: true });  


        },delayInMilliseconds)

      }
      



    async function second_screen (){
        const space = document.getElementById('space');
        ctx.drawImage(space, 0, 0, canvas.width*1, canvas.height*1)

        const npc = document.getElementById('npc');
        ctx.drawImage(npc, 500, 300, 1070, 1000)

        const iss = document. getElementById('iss');
        ctx.drawImage(iss, -20, 75, 1000, 1000)

        const rev_bubble = document.getElementById('rev-text-bubble');
        ctx.drawImage(rev_bubble,0, 670, 900, 800) 

        const moon = document.getElementById('moon');
        ctx.drawImage(moon, 850, -290, 700, 700)

        ctx.font = "35px Comic Sans MS";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText("The ISS is the largest spaces station in ", 440, 1020);
        ctx.fillText("the world...well outside of it, technically.", 440, 1065);
        ctx.fillText("Here, let me give you a tour-", 370,1115)

        
        setTimeout(function(){

            canvas.addEventListener("click", async(e) => {  
                fade_in(700); 
                var audio3 = new Audio('imgs/Transition_3.MP3');
                audio3.play();
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
        clickMeButton.style.width = '11%'; // Set the width to 100 pixels
        clickMeButton.style.height = '9%'; // Set the height to 50 pixels
        clickMeButton.style.position = 'absolute'; // To position the button with top and left
        clickMeButton.style.top = '74%';
        clickMeButton.style.left = '32%';
        document.body.appendChild(clickMeButton);

        

        var clickMeButton3 = document.createElement('button');
        clickMeButton3.id = 'Choice_3';
        clickMeButton3.innerHTML = 'Planets';
        clickMeButton3.style.background = '#4FFF8F';
        clickMeButton3.style.width = '11%'; // Set the width to 100 pixels
        clickMeButton3.style.height = '9%'; // Set the height to 50 pixels
        clickMeButton3.style.position = 'absolute'; // To position the button with top and left
        clickMeButton3.style.top = '74%';
        clickMeButton3.style.left = '58%';
        document.body.appendChild(clickMeButton3);

        const npc = document.getElementById('eat_npc');
        ctx.drawImage(npc, 170, 300, 1070, 1000)

        const moon = document.getElementById('moon');
        ctx.drawImage(moon, 900, -60, 700, 700)

        const bubble = document.getElementById('text-bubble');
        ctx.drawImage(bubble,230, -100, 900, 780)
        
        ctx.font = "50px Comic Sans MS";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText("PICK   YOUR   JOURNEY ", 670, 120);
        ctx.font = "38px Comic Sans MS";
        ctx.fillText("Where would you like to go?", 670, 190);

        
        clickMeButton.addEventListener('click', function() {
          fade_in(700);
          eat_in_space()
          var audio4 = new Audio('imgs/Transition_1.MP3');
          audio4.play();
          document.body.removeChild(clickMeButton)
          document.body.removeChild(clickMeButton3)
          fade_out(200); 
      });

          
          clickMeButton3.addEventListener('click', function() {
          fade_in(700);
          planet()
          var audio6 = new Audio('imgs/Transition_1.MP3');
          audio6.play();
          document.body.removeChild(clickMeButton)
          document.body.removeChild(clickMeButton3)
          fade_out(200); 
}); 
   
   }
      

    async function eat_in_space (){
      const eat = document.getElementById('eat');
      ctx.drawImage(eat, 0, 0, canvas.width*1, canvas.height*1)
      const eat_npc = document.getElementById('npc')
      ctx.drawImage(eat_npc, -255 ,390, 1070, 1000)
      const text_bubble = document.getElementById('flip-text-bubble');
      ctx.drawImage(text_bubble, 270, 30, 750,600)
      ctx.font = "36px Comic Sans MS";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText("Welcome to the Snack Shack. Here grab", 635, 200); 
      ctx.fillText("this powdered bevarage by clicking it.", 630, 240)
      
      

      const food = document.getElementById('food');
      ctx.drawImage(food, 500,450,800,800) 
      
      const water_press_abort = new AbortController();

      canvas.addEventListener("click", async(e) => {  //put in click img function
        let coords=canvas_click(canvas, e)


        
        if(!(coords.x <= 37.48 && coords.x >= 29.73 && coords.y <= 38.23 && coords.y >= 26.23)){
          return undefined
        }
        water_press_abort.abort()

        const x = 295;
        const y = 90;
        const width = 700;
        const height = 330;

        ctx.font = "36px Comic Sans MS";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";

        clearText(ctx, x, y, width, height);
        ctx.fillText("Nice, now try adding some water.", 600, 180); 
        ctx.fillText("Make sure to shake it well!.", 600, 220)
        ctx.fillText("(click the water then the powdered drink)", 640, 260)//add button counter under water, if water clicked added 1 to counter, if powerdered drink clicked and another 1. if counter = 2, switch screen eat_in_space_2
        //fade_in(700)
        const water = document.getElementById('water');
        ctx.drawImage(water, 390, 500, 530, 530)
        //fade_out(200)

      const bottel_press = new AbortController();
      canvas.addEventListener('click', async(e) => {
        let coords=canvas_click(canvas, e)


        if(!(coords.x <= 26.67 && coords.x >= 22. && coords.y <= 32.86 && coords.y >= 25.10)){
          return undefined
        }
        bottel_press.abort()

        const water_press_again = new AbortController();
        canvas.addEventListener('click', async(e) => {
          let coords=canvas_click(canvas, e)


          if(!(coords.x <= 37.48 && coords.x >= 29.73 && coords.y <= 38.23 && coords.y >= 26.23)){
            return undefined
          }
          water_press_again.abort()
          //fade_in(700)
          eat_in_space_2()
          //fade_out(200)
        }, {signal: water_press_again.signal});
      }, {signal: bottel_press.signal});


      }, {signal: water_press_abort.signal});
     }

     async function eat_in_space_2(){
      const eat = document.getElementById('eat');
      ctx.drawImage(eat, 0, 0, canvas.width*1, canvas.height*1)
      const eat_npc = document.getElementById('hand_npc')
      ctx.drawImage(eat_npc, -150 ,490, 1070, 1000)
      const text_bubble = document.getElementById('flip-text-bubble');
      ctx.drawImage(text_bubble, 230, 30, 750,600)
      const food_ready = document.getElementById('food_ready') //
      ctx.drawImage(food_ready, 600,500,600,600) //
      ctx.fillText("Great, drink it by double clicking it", 585, 230); 

      const ready_press = new AbortController();
      canvas.addEventListener('click', async(e)=>{
        let coords=canvas_click(canvas,e)
        if(!(coords.x <= 38.23 && coords.x >= 30.84 && coords.y <= 36.09 && coords.y >= 27.23)){
          return undefined
        }
        ready_press.abort()

        const ready_press2=new AbortController();
        canvas.addEventListener('click', async(e)=>{
        if(!(coords.x <= 38.23 && coords.x >= 30.84 && coords.y <= 36.09 && coords.y >= 27.23)){
          return undefined
        }
        ready_press2.abort()

        const x = 250;
        const y = 200;
        const width = 700;
        const height = 65;
        clearText(ctx, x, y, width, height);
        ctx.font = "36px Comic Sans MS";


        ctx.fillText("Wow! You are a natural!", 550, 135); 
        ctx.fillText("Click the screen to take a recap quiz", 575, 180); 
        ctx.fillText("Or click skip to not take the quiz :)", 570, 225)
        {document.getElementById("food_ready").style.display="none";}

        var clickMeButton9 = document.createElement('button');
        clickMeButton9.id = 'skip';
        clickMeButton9.innerHTML = 'Skip';
        clickMeButton9.style.background = '#4FFF8F';
        clickMeButton9.style.width = '11%'; // Set the width to 100 pixels
        clickMeButton9.style.height = '9%'; // Set the height to 50 pixels
        clickMeButton9.style.position = 'absolute'; // To position the button with top and left
        clickMeButton9.style.top = '77%';
        clickMeButton9.style.left = '53%';
        document.body.appendChild(clickMeButton9);

        clickMeButton9.addEventListener('click', function() {
          fade_in(700);
          third_screen()
          var audio6 = new Audio('imgs/Transition_1.MP3');
          document.body.removeChild(clickMeButton9)
          audio6.play();
          fade_out(200); 
});


        canvas.addEventListener('click', async(e)=>{
          fade_in(700)
          var audio14 = new Audio('imgs/Transition_2.MP3');
          audio14.play();
          document.body.removeChild(clickMeButton9)
          test_eat()
          fade_out(200)
        },{once:true})
      },{signal:ready_press2.signal})
    },{signal:ready_press.signal})

    

     }

     async function test_eat(){
      const space = document.getElementById('space');
      ctx.drawImage(space, 0, 0, canvas.width*1, canvas.height*1)
      const npc = document.getElementById('npc');
        ctx.drawImage(npc, 420, 340, 1070, 1000)
      const bubble = document.getElementById('text-bubble');
      ctx.drawImage(bubble,240, 10, 800, 700)


      //buttton decelrations 
      var clickMeButton = document.createElement('button');
        clickMeButton.id = 'Choice_1';
        clickMeButton.innerHTML = 'Snackery';
        clickMeButton.style.background = '#4FFF8F';
        clickMeButton.style.width = '11%'; // Set the width to 100 pixels
        clickMeButton.style.height = '9%'; // Set the height to 50 pixels
        clickMeButton.style.position = 'absolute'; // To position the button with top and left
        clickMeButton.style.top = '55%';
        clickMeButton.style.left = '35%';
        document.body.appendChild(clickMeButton);

        var clickMeButton2 = document.createElement('button');
        clickMeButton2.id = 'Choice_2';
        clickMeButton2.innerHTML = 'Food Palace';
        clickMeButton2.style.background = '#4FFF8F';
        clickMeButton2.style.width = '11%'; // Set the width to 100 pixels
        clickMeButton2.style.height = '9%'; // Set the height to 50 pixels
        clickMeButton2.style.position = 'absolute'; // To position the button with top and left
        clickMeButton2.style.top = '65%';
        clickMeButton2.style.left = '35%';
        document.body.appendChild(clickMeButton2);

        var clickMeButton3 = document.createElement('button');
        clickMeButton3.id = 'Choice_3';
        clickMeButton3.innerHTML = 'Snack Shack';
        clickMeButton3.style.background = '#4FFF8F';
        clickMeButton3.style.width = '11%'; // Set the width to 100 pixels
        clickMeButton3.style.height = '9%'; // Set the height to 50 pixels
        clickMeButton3.style.position = 'absolute'; // To position the button with top and left
        clickMeButton3.style.top = '75%';
        clickMeButton3.style.left = '35%';
        document.body.appendChild(clickMeButton3);

        ctx.font = "38px Comic Sans MS";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText("WOW, you must be confident!", 630, 158);
      ctx.fillText("The first question is:", 630, 198);
      ctx.fillText("What was the name of the place",630,238);
      ctx.fillText("where we just ate?",630,288);


        //calling the buttons
        clickMeButton.addEventListener('click', function() {
          ctx.fillText("Try again",630,400);
      });
    
        
          
          clickMeButton2.addEventListener('click', function() {
          ctx.fillText("Try again",630,400);
  });
    

          
          clickMeButton3.addEventListener('click', function() {
          fade_in(700);
          question2_eat()
          var audio6 = new Audio('imgs/Transition_3.MP3');
          audio6.play();
          document.body.removeChild(clickMeButton)
          document.body.removeChild(clickMeButton2)
          document.body.removeChild(clickMeButton3)
          fade_out(200); 
}); 


     }

     async function question2_eat(){
      const space = document.getElementById('space');
      ctx.drawImage(space, 0, 0, canvas.width*1, canvas.height*1)
      const npc = document.getElementById('eat_npc');
        ctx.drawImage(npc, 420, 340, 1070, 1000)
      const bubble = document.getElementById('text-bubble');
      ctx.drawImage(bubble,240, 10, 800, 700)


      //buttton decelrations 
      var clickMeButton = document.createElement('button');
        clickMeButton.id = 'Choice_1';
        clickMeButton.innerHTML = 'Water';
        clickMeButton.style.background = '#4FFF8F';
        clickMeButton.style.width = '11%'; // Set the width to 100 pixels
        clickMeButton.style.height = '9%'; // Set the height to 50 pixels
        clickMeButton.style.position = 'absolute'; // To position the button with top and left
        clickMeButton.style.top = '55%';
        clickMeButton.style.left = '35%';
        document.body.appendChild(clickMeButton);

        var clickMeButton2 = document.createElement('button');
        clickMeButton2.id = 'Juice';
        clickMeButton2.innerHTML = 'Juice';
        clickMeButton2.style.background = '#4FFF8F';
        clickMeButton2.style.width = '11%'; // Set the width to 100 pixels
        clickMeButton2.style.height = '9%'; // Set the height to 50 pixels
        clickMeButton2.style.position = 'absolute'; // To position the button with top and left
        clickMeButton2.style.top = '65%';
        clickMeButton2.style.left = '35%';
        document.body.appendChild(clickMeButton2);

        var clickMeButton3 = document.createElement('button');
        clickMeButton3.id = 'Nothing';
        clickMeButton3.innerHTML = 'Nothing';
        clickMeButton3.style.background = '#4FFF8F';
        clickMeButton3.style.width = '11%'; // Set the width to 100 pixels
        clickMeButton3.style.height = '9%'; // Set the height to 50 pixels
        clickMeButton3.style.position = 'absolute'; // To position the button with top and left
        clickMeButton3.style.top = '75%';
        clickMeButton3.style.left = '35%';
        document.body.appendChild(clickMeButton3);

        ctx.font = "36px Comic Sans MS";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText("Alright alright...good job", 630, 158);
      ctx.fillText("Now the scond question is:", 630, 198);
      ctx.fillText("What do we add to the dry mixture?",637,238);


        //calling the buttons
        clickMeButton.addEventListener('click', function() {
          fade_in(700);
          question3_eat()
          var audio6 = new Audio('imgs/Transition_1.MP3');
          audio6.play();
          document.body.removeChild(clickMeButton)
          document.body.removeChild(clickMeButton2)
          document.body.removeChild(clickMeButton3)
          fade_out(200); 
      });
    
        
          
          clickMeButton2.addEventListener('click', function() {
          ctx.fillText("Try again",630,400);
  });
    

          
          clickMeButton3.addEventListener('click', function() {
          ctx.fillText("Try again",630,400);
}); 

      
     }

     async function question3_eat(){
      const space = document.getElementById('space');
      ctx.drawImage(space, 0, 0, canvas.width*1, canvas.height*1)
      const npc = document.getElementById('hand_npc');
      ctx.drawImage(npc, 420, 340, 1070, 1000)
    const bubble = document.getElementById('text-bubble');
    ctx.drawImage(bubble,240, 10, 800, 700)


    //buttton decelrations 
    var clickMeButton = document.createElement('button');
      clickMeButton.id = 'Choice_1';
      clickMeButton.innerHTML = 'The ISS';
      clickMeButton.style.background = '#4FFF8F';
      clickMeButton.style.width = '11%'; // Set the width to 100 pixels
      clickMeButton.style.height = '9%'; // Set the height to 50 pixels
      clickMeButton.style.position = 'absolute'; // To position the button with top and left
      clickMeButton.style.top = '55%';
      clickMeButton.style.left = '35%';
      document.body.appendChild(clickMeButton);

      var clickMeButton2 = document.createElement('button');
      clickMeButton2.id = 'Apollo 11';
      clickMeButton2.innerHTML = 'Apollo 11';
      clickMeButton2.style.background = '#4FFF8F';
      clickMeButton2.style.width = '11%'; // Set the width to 100 pixels
      clickMeButton2.style.height = '9%'; // Set the height to 50 pixels
      clickMeButton2.style.position = 'absolute'; // To position the button with top and left
      clickMeButton2.style.top = '65%';
      clickMeButton2.style.left = '35%';
      document.body.appendChild(clickMeButton2);

      var clickMeButton3 = document.createElement('button');
      clickMeButton3.id = 'Spacecraft';
      clickMeButton3.innerHTML = 'Spacecraft :)';
      clickMeButton3.style.background = '#4FFF8F';
      clickMeButton3.style.width = '11%'; // Set the width to 100 pixels
      clickMeButton3.style.height = '9%'; // Set the height to 50 pixels
      clickMeButton3.style.position = 'absolute'; // To position the button with top and left
      clickMeButton3.style.top = '75%';
      clickMeButton3.style.left = '35%';
      document.body.appendChild(clickMeButton3);

      ctx.font = "36px Comic Sans MS";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("GREAT JOB ", 630, 153);
    ctx.fillText("Alright, last question", 630, 198);
    ctx.fillText("What is the name of the ",630,238);
    ctx.fillText("spacestation we are in?",630,288);

    clickMeButton2.addEventListener('click', function() {
      ctx.fillText("Try again",630,400);
});


      
      clickMeButton3.addEventListener('click', function() {
      ctx.fillText("Try again",630,400);
}); 



      //calling the buttons
      clickMeButton.addEventListener('click', function() {
        confetti();
        confetti();
        confetti();
        confetti();
        confetti();
        confetti();
        confetti();
        confetti();

        document.body.removeChild(clickMeButton)
          document.body.removeChild(clickMeButton2)
          document.body.removeChild(clickMeButton3)

        const x = 420;
        const y = 124;
        const width = 420;
        const height = 220;
        clearText(ctx, x, y, width, height);
        
        ctx.fillText("AMAZING JOB!",630,158);
        ctx.fillText("Click the screen to pick",630,198);
        ctx.fillText("your next journey",630,238);
        
        canvas.addEventListener("click", async(e) => {  
          fade_in(700); 
          //await sleep(2000); 
          var audio1 = new Audio('imgs/Transition_2.MP3');
          audio1.play();
          third_screen() 
          fade_out(200); 
          document.body.removeChild(clickMeButton)
          document.body.removeChild(clickMeButton2)
          document.body.removeChild(clickMeButton3)

          
      }, { once: true });  


    });

     }



     async function planet (){ 
      const intro_planets = document.getElementById('intro_planets');
      ctx.drawImage(intro_planets, 0, 0, canvas.width*1, canvas.height*1)

      

      const npc = document.getElementById('npc');
      ctx.drawImage(npc, 480, 350, 1070, 1000)

      const bubble = document.getElementById('text-bubble');
      ctx.drawImage(bubble,160, -20,950, 700 )

      ctx.font = "38px Comic Sans MS";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText("You made a great choice!", 590, 143);
      ctx.fillText("(Click the button to enter the spaceship)", 635, 200);

      var clickMeButton4 = document.createElement('button');
      clickMeButton4.id = 'Enter';
      clickMeButton4.innerHTML = 'Enter Spaceship';
      clickMeButton4.style.background = '#4FFF8F';
      clickMeButton4.style.width = '11%'; // Set the width to 100 pixels
      clickMeButton4.style.height = '9%'; // Set the height to 50 pixels
      clickMeButton4.style.position = 'absolute'; // To position the button with top and left
      clickMeButton4.style.top = '80%';
      clickMeButton4.style.left = '30%';
      document.body.appendChild(clickMeButton4);

      Enter.addEventListener('click', function() {
        fade_in(700);
        var audio8 = new Audio('imgs/Transition_3.MP3');
          audio8.play();
        journey()
        {document.getElementById("Enter").style.display="none";}
        fade_out(200); 
      });

      
   
     }
async function journey(){
  const journey_screen = document.getElementById('journey_screen')
  ctx.drawImage(journey_screen, 0, 0, canvas.width*1, canvas.height*1)

  ctx.font = "48px Comic Sans MS";
  ctx.fillStyle = "white";

  ctx.fillText("CLICK SCREEN TO TRAVEL :)",760,1170);

  canvas.addEventListener('click', function(){
    fade_in(700)
    var audio9 = new Audio('imgs/Large_Transition.MP3');
          audio9.play();
    mercury()
    fade_out(200)
  }, { once: true });  
} 
async function mercury(){

  ctx.font = "38px Comic Sans MS";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";

  const space = document.getElementById('space');
  ctx.drawImage(space, 0, 0, canvas.width*1, canvas.height*1)

  const mercury=document.getElementById('mercury');
  ctx.drawImage(mercury, 570, 530, 690,690)

  const eat_npc = document.getElementById('eat_npc')
  ctx.drawImage(eat_npc, -200, 390, 1070, 1000)
  const text_bubble = document.getElementById('flip-text-bubble');
  ctx.drawImage(text_bubble, 160, -20,900, 700)
  ctx.fillText("This is Mercury. The closes planet to", 575, 75); 
  ctx.fillText("the sun. There is no water or life here.", 580, 120); 
  ctx.fillText("It is also the smallest planet in our", 580, 158); 
  ctx.fillText("Solar system. Also, unlike like our earth", 585, 198); 
  ctx.fillText("Mercury doesn't have a moon.", 570, 237); 
  ctx.fillText("Hmm, I think someone is watching us...", 585, 273); 
  ctx.fillText("Click the alien to scare them off", 580, 315); 

  const ufo = document.getElementById('ufo');
  ctx.drawImage(ufo,-110,-70,250,250)

  const ufo_click = new AbortController();
  canvas.addEventListener('click', async(e) => {
    let coords=canvas_click(canvas, e)


    if(!(coords.x <= 3.72 && coords.x >=0 && coords.y <= 3.72 && coords.y >= 0)){
      return undefined
    }
    ufo_click.abort()
    fade_in(700);
    var audio10 = new Audio('imgs/Transition_3.MP3');
          audio10.play();
    venus()
    fade_out(200);
  }, {signal: ufo_click.signal});


}

async function venus(){
  const space = document.getElementById('space');
  ctx.drawImage(space, 0, 0, canvas.width*1, canvas.height*1)
  
  const redBox = document.getElementById('redBox');
redBox.style.width = '46.4%'; 
redBox.style.height = '100%';
redBox.style.position = 'absolute';
redBox.style.top='0%'
redBox.style.left='26.7%'


redBox.style.backgroundColor = 'rgba(255, 0, 0, 0.2)'; 

  const venus=document.getElementById('venus');
 ctx.drawImage(venus,-10,630,690,690)
 const npc = document.getElementById('npc');
 ctx.drawImage(npc, 580, 470, 1070, 1000)
 const text=document.getElementById('text-bubble');
ctx.drawImage(text,200,-10,1000,900)

ctx.font = "38px Comic Sans MS";
ctx.fillStyle = "black";
ctx.textAlign = "center";
ctx.fillText("And this here is Venus,", 620,200);
ctx.fillText("the hottest planet in our solar system!", 668, 240); 
ctx.fillText("It also has a very thick atmosphere,",670, 280); 
ctx.fillText("which is the reason for this red hue.", 665, 320); 
ctx.fillText("To go to the next planet,", 668, 358); 
ctx.fillText("click on my remote.", 668, 395); 

setTimeout(async function(){
const remote=document.getElementById('remote')
ctx.drawImage(remote, 1100, 985, 245, 245)
},button_hold)

const controller_click=new AbortController
redBox.addEventListener('click', async(e) => {
  let coords=canvas_click(canvas, e)

 if(!(coords.x <= 48.8 && coords.x >= 42.8 && coords.y >= 38.45 && coords.y <= 44.56)){
    return undefined
  }
  controller_click.abort()
  fade_in(700);
  {document.getElementById("redBox").style.display="none";}
  var audio11 = new Audio('imgs/Transition_1.MP3');
  audio11.play();
  mars()
  fade_out(200);
}, {signal: controller_click.signal});


}


async function mars(){
  const space = document.getElementById('space');
  ctx.drawImage(space, 0, 0, canvas.width*1, canvas.height*1)
  const mars=document.getElementById('mars');
  ctx.drawImage(mars,110,650,580,580)

  const npc=document.getElementById('npc');
  ctx.drawImage(npc, 580, 470, 1070, 1000);
  const text=document.getElementById('text-bubble')
  ctx.drawImage(text,80,-10,1180,900)
  const earth=document.getElementById('earth_full')
  ctx.drawImage(earth,1110,-18,360,360)
  const star=document.getElementById('star')
  ctx.drawImage(star, -20,-10,200,200)

  ctx.font = "38px Comic Sans MS";
ctx.fillStyle = "black";
ctx.textAlign = "center";
ctx.fillText("Wow, we skipped earth and went to mars", 675,270);
ctx.fillText("This shouldn't have happened", 670,310);
ctx.fillText("Oh well, we can always go back later", 670,343);
ctx.fillText("(Click screen to learn about mars ", 670,385);

canvas.addEventListener('click',async(e)=>{
  const x = 314;
  const y = 170;
  const width = 740;
  const height = 380;
  clearText(ctx, x, y, width, height);
  ctx.fillText("Mars is the closest planet to earth.", 675,250);
ctx.fillText("It is also a planet that we might potentially live on.", 675,290);
ctx.fillText("The reason it looks red, is due to the large", 675, 323);
ctx.fillText("amount of iron in the planets crust :)", 675,365);
ctx.fillText("And due to its lack of atmosphere...its pretty cold.", 675,405);
ctx.fillText("If you want to go to the next planet,", 675,445);
ctx.fillText("click on the large bright star, polaris", 675,485);
},{ once: true });  

const star_click=new AbortController    // fix click event
canvas.addEventListener('click',async(e)=>{
  let coords=canvas_click(canvas, e)
  if(!(coords.x <= 3.2 && coords.x >= 2.6 && coords.y <= 4.2 && coords.y >= 2.2)){
    return undefined
  }
  star_click.abort()
  fade_in(700);
  var audio12 = new Audio('imgs/Transition_2.MP3');
      audio12.play();
  jupiter()
  fade_out(200);
  
},{signal:star_click.signal})


async function jupiter(){
  const space = document.getElementById('space');
  ctx.drawImage(space, 0, 0, canvas.width*1, canvas.height*1)
  const jupiter = document.getElementById('jupiter');
  ctx.drawImage(jupiter, 500,460,870,860)
  const eat_npc = document.getElementById('npc')
  ctx.drawImage(eat_npc, -300 ,400, 1070, 1000)
  const text_bubble = document.getElementById('flip-text-bubble');
  ctx.drawImage(text_bubble, 285, 20, 900, 700)
  const meteor=document.getElementById('meteor')
  ctx.drawImage(meteor, 50,-110,380,430)

  ctx.font = "38px Comic Sans MS";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";


  ctx.fillText("Welcome to Jupiter, the largest planet", 685, 180); 
  ctx.fillText("in our solar system. A few fun facts are:", 685, 220); 
  ctx.fillText("Jupiter has 95 moons and Jupiter is a gas", 690, 260); 
  ctx.fillText("giant. That means the entire planet is only", 690, 300); 
  ctx.fillText("gas...pretty cool right?", 685, 340); 
  ctx.fillText("(Click on the red hurrican at the bottom", 685, 380); 
  ctx.fillText("of the planet to move on <3", 685, 420); 

  const red_click=new AbortController

  canvas.addEventListener('click',async(e)=>{
    let coords=canvas_click(canvas, e)
    if(!(coords.x <= 26.97 && coords.x >= 25.18 && coords.y <= 37.85 && coords.y >= 36.66)){
      return undefined
    }
    red_click.abort()
    fade_in(700);
    var audio13 = new Audio('imgs/Transition_3.MP3');
          audio13.play();
    saturn()
    fade_out(200);
    
  },{signal:red_click.signal})

}


async function saturn (){
  const space = document.getElementById('space');
  ctx.drawImage(space, 0, 0, canvas.width*1, canvas.height*1)
  const saturn = document.getElementById('saturn');
  ctx.drawImage(saturn, -10,550,860,880)
  const npc=document.getElementById('npc');
  ctx.drawImage(npc, 580, 470, 1070, 1000)
 const text=document.getElementById('text-bubble');
ctx.drawImage(text,137,-10,1070,900)
  const uranus = document.getElementById('uranus')
  ctx.drawImage(uranus, 1120,-30,240,230)
  ctx.font = "38px Comic Sans MS";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.fillText("Ah, and here is saturn,", 620, 180); 
  ctx.fillText("considered the prettiest planet by many.", 677, 220); 
  ctx.fillText("Its rings are 170,000 MILES WIDE!", 670, 260); 
  ctx.fillText("Thats insane to even think about, right?", 670, 300); 
  ctx.fillText("The rings are mainly made of dust and deberis", 670, 340); 
  ctx.fillText("yet they are so captivating...", 670, 380); 
  ctx.fillText("Speaking of captivating...click on the big ", 670, 420); 
  ctx.fillText("navy blue planet in the top corner to move on.", 670, 460); 

  const planet=new AbortController

  canvas.addEventListener('click',async(e)=>{
    let coords=canvas_click(canvas, e)
    if(!(coords.x <= 47.76 && coords.x >= 44.56 && coords.y <= 6.18 && coords.y >=0.07)){
      return undefined
    }
    planet.abort()
    fade_in(700);
    var audio13 = new Audio('imgs/Transition_1.MP3');
          audio13.play();
    uranas()
    fade_out(200);
    
  },{signal:planet.signal})


}

async function uranas(){
  const space = document.getElementById('space');
  ctx.drawImage(space, 0, 0, canvas.width*1, canvas.height*1);
  const uranas = document.getElementById('uranus');
  ctx.drawImage(uranas,500,600,765,650);


  const eat_npc = document.getElementById('npc');
  ctx.drawImage(eat_npc, -300 ,530, 1070, 1000);
  const text_bubble = document.getElementById('flip-text-bubble');
  ctx.drawImage(text_bubble, 285, 20, 900, 700);
  const ufo = document.getElementById('ufo');
  ctx.drawImage(ufo,1110,1230,250,250)

  ctx.font = "38px Comic Sans MS";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.fillText("Now we are on Urunas, the first planet",702,140);
  ctx.fillText("To be discovered through a telescope.", 702,180);
  ctx.fillText("The planets nick name is the 'Ice Giant'",702,220);
  ctx.fillText("...I'm sure you can imagine why :)",702,260);
  ctx.fillText("Unlike our eart, Urunas spins on its side",702,300);
  ctx.fillText("not on an axis. Ha...looks like",702,340);
  ctx.fillText("our alien friend is back. Make sure he doesnt",722,380);
  ctx.fillText("follow us to Neptune, okay?",702,420);


const alien=new AbortController

  canvas.addEventListener('click',async(e)=>{
    let coords=canvas_click(canvas, e)
    if(!(coords.x <= 48.6 && coords.x >=44.7 && coords.y <= 49.4 && coords.y >=45.8)){
      return undefined
    }
    alien.abort()
    fade_in(700);
    var audio13 = new Audio('imgs/Transition_3.MP3');
          audio13.play();
    neptune()
    fade_out(200);
    
  },{signal:alien.signal})


}

async function neptune(){
  const space = document.getElementById('space');
  ctx.drawImage(space, 0, 0, canvas.width*1, canvas.height*1);
  const npc=document.getElementById('npc');
  ctx.drawImage(npc, 580, 470, 1070, 1000)
  const text=document.getElementById('text-bubble');
 ctx.drawImage(text,137,-10,1070,900)
const neptune=document.getElementById('neptune')
ctx.drawImage(neptune,190,630,630,630)
ctx.fillText("Welcome to the last planet in our", 620, 180); 
ctx.fillText("solar system, Neptune.", 677, 220); 
ctx.fillText("It is so far away, that even now we do", 670, 260); 
ctx.fillText("not have many great pictures of it.", 670, 300); 
ctx.fillText("However, we do know that facts.", 670, 340); 
ctx.fillText("1 single year on Neptune is 165 Earth years", 670, 380); 
ctx.fillText("and just like Uranus, it is completely made of", 670, 420); 
ctx.fillText("ice. Well thats it for our journey, click the", 670, 460); 
ctx.fillText("control panel on my chest to return home",670,500);


const control=new AbortController

  canvas.addEventListener('click',async(e)=>{
    let coords=canvas_click(canvas, e)
    if(!(coords.x <= 43.9 && coords.x >=39.64 && coords.y <= 35.3 && coords.y >=32)){
      return undefined
    }
    control.abort()
    fade_in(700);
    var audio13 = new Audio('imgs/Transition_2.MP3');
          audio13.play();
    home()
    fade_out(200);
    
  },{signal:control.signal})
}


async function home(){
  const space = document.getElementById('space');
  ctx.drawImage(space, 0, 0, canvas.width*1, canvas.height*1);
}


}



    welcome()
});

   