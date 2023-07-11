export class background {
    constructor(game){
        this.game = game;
        this.width = 500;
        this.height = 500;
        this.x = 100;
        this.y = this.game.height - this.height;
        this.image = document.getElementById('space-background.jpg');
    }

    update(){
        this.x++;
    }     
}