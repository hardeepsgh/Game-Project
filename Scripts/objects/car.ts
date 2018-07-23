module objects{
    export class Car extends objects.GameObject{
        // private
        // public

        constructor( assetManager:createjs.LoadQueue ){
            super(assetManager, "car");
            this.Start();
            this.y = 540;
            this.scaleX = 0.4;
            this.scaleY = 0.4;
           }
           // recet object location
           public Reset():void{
            
           }
           //move objects
           public Move():void{
            //Mouse Controls  
            //  this.x  = objects.Game.stage.mouseX;

            
            console.log("move left : "+objects.Game.keyboardManager.moveLeft);
            
            //Keyboard Controls
            if(objects.Game.keyboardManager.moveLeft)
            {this.x-=5;}

            if(objects.Game.keyboardManager.moveRight)
            {this.x+=5;}


           }
           public CheckBounds():void{
                if(this.x >= 700 - this.halfWidth){
                    this.x = 700- this.halfWidth;
                }

                if(this.x <= this.halfWidth+145){
                        this.x = 145+this.halfWidth;
                }
           }
           //init var create new object
           public Start():void{
            
           }
           public Update():void{
            this.Move();
            this.CheckBounds();
           }
    }
}