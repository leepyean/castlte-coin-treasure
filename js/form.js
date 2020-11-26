class Form{
    constructor(){
        this.button = createButton('S T A R T');
    }
    hide(){
        this.button.hide();
    }
    display(){
        this.button.position(displayWidth/2-50, displayHeight/2-50);
        this.button.style('width','200px');
        this.button.style('height','40px');
        this.button.style('background','orange');

        //this.b/utton.style.width="200px";*/
        this.button.mousePressed(()=>{
            this.button.hide();
            gameState = 1;
        })   
    }
}