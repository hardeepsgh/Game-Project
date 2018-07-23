module objects{
    export class Car extends objects.GameObject{
        // private
        // public

        constructor( assetManager:createjs.LoadQueue ){
            super(assetManager, "car");
            this.Start();
            this.y = 430;
            this.scaleX = 0.5;
            this.scaleY = 0.5;
           }
           // recet object location
           public Reset():void{
            
           }
           //move objects
           public Move():void{
                this.x  = objects.Game.stage.mouseX;

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