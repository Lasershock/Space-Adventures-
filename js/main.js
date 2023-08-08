var delayInMilliseconds = 1; //1000 = 1 second (final game will have 3000 (3 sec))




window.addEventListener('load',function(){

  async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function fade_in(fade_ms) {
   let overlay = document.getElementById("canvas-overlay");
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
  }

    const canvas =document.getElementById('canvas1');
    const overlay = document.getElementById('canvas-overlay');
    const ctx = canvas.getContext('2d');
    canvas.width =500;
    canvas.height =500;

    async function welcome() {
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
        ctx.fillText("of course.", 80, 130); 

        setTimeout(async function(){

            overlay.addEventListener("click", async(e) => {  
                fade_in(1000); 
                //await sleep(2000); 
                second_screen() 
                fade_out(300); 
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

            overlay.addEventListener("click", async(e) => {  
                fade_in(1000); 
                third_screen() 
                fade_out(300); 
 
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
        clickMeButton.innerHTML = 'Visit Cafe';
        clickMeButton.style.background = '#4FFF8F';
        clickMeButton.style.width = '150px'; // Set the width to 100 pixels
        clickMeButton.style.height = '50px'; // Set the height to 50 pixels
        clickMeButton.style.position = 'absolute'; // To position the button with top and left
        clickMeButton.style.top = '400px';
        clickMeButton.style.left = '500px';
        document.body.appendChild(clickMeButton);

        var clickMeButton = document.createElement('button');
        clickMeButton.id = 'Choice_2';
        clickMeButton.innerHTML = 'Visit Bathroom';
        clickMeButton.style.background = '#4FFF8F';
        clickMeButton.style.width = '150px'; // Set the width to 100 pixels
        clickMeButton.style.height = '50px'; // Set the height to 50 pixels
        clickMeButton.style.position = 'absolute'; // To position the button with top and left
        clickMeButton.style.top = '400px';
        clickMeButton.style.left = '800px';
        document.body.appendChild(clickMeButton);

        var clickMeButton = document.createElement('button');
        clickMeButton.id = 'Choice_3';
        clickMeButton.innerHTML = 'Visit Space Walk';
        clickMeButton.style.background = '#4FFF8F';
        clickMeButton.style.width = '150px'; // Set the width to 100 pixels
        clickMeButton.style.height = '50px'; // Set the height to 50 pixels
        clickMeButton.style.position = 'absolute'; // To position the button with top and left
        clickMeButton.style.top = '500px';
        clickMeButton.style.left = '500px';
        document.body.appendChild(clickMeButton);

        var clickMeButton = document.createElement('button');
        clickMeButton.id = 'Choice_4';
        clickMeButton.innerHTML = 'Skip';
        clickMeButton.style.background = '#4FFF8F';
        clickMeButton.style.width = '150px'; // Set the width to 100 pixels
        clickMeButton.style.height = '50px'; // Set the height to 50 pixels
        clickMeButton.style.position = 'absolute'; // To position the button with top and left
        clickMeButton.style.top = '500px';
        clickMeButton.style.left = '800px';
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
          fade_in(1000);
          visit_cafe()
          {document.getElementById("Choice_1").style.display="none";}
          {document.getElementById("Choice_2").style.display="none";}
          {document.getElementById("Choice_3").style.display="none";}
          {document.getElementById("Choice_4").style.display="none";}
          fade_out(300); 
      });
    },delayInMilliseconds)

        setTimeout(async function(){
        Choice_2.addEventListener('click', function() {
         fade_in(1000); 
         visit_bathroom()
         {document.getElementById("Choice_1").style.display="none";}
         {document.getElementById("Choice_2").style.display="none";}
         {document.getElementById("Choice_3").style.display="none";}
         {document.getElementById("Choice_4").style.display="none";}
         fade_out(300); 
    });
    },delayInMilliseconds)
        
          setTimeout(async function(){
          Choice_3.addEventListener('click', function() {
          fade_in(1000);
          spacewalk()
          {document.getElementById("Choice_1").style.display="none";}
          {document.getElementById("Choice_2").style.display="none";}
          {document.getElementById("Choice_3").style.display="none";}
          {document.getElementById("Choice_4").style.display="none";}
          fade_out(300); 
  });
    },delayInMilliseconds)

          setTimeout(async function(){
          Choice_4.addEventListener('click', function() {
          fade_in(1000);
          skip()
          {document.getElementById("Choice_1").style.display="none";}
          {document.getElementById("Choice_2").style.display="none";}
          {document.getElementById("Choice_3").style.display="none";}
          {document.getElementById("Choice_4").style.display="none";}
          fade_out(300); 
}); 
    },delayInMilliseconds)

   }
      
    

    async function visit_cafe (){
      const space = document.getElementById('space');
      ctx.drawImage(space, 0, 0, canvas.width*1, canvas.height*1)
     }

     async function visit_bathroom (){
      const space = document.getElementById('space');
      ctx.drawImage(space, 0, 0, canvas.width*1, canvas.height*1)
     }

     async function spacewalk (){
      const space = document.getElementById('space');
      ctx.drawImage(space, 0, 0, canvas.width*1, canvas.height*1)
     }

     async function skip (){ //if you do skip u will explore the planets
      const space = document.getElementById('space');
      ctx.drawImage(space, 0, 0, canvas.width*1, canvas.height*1)
     }


    welcome()
});


