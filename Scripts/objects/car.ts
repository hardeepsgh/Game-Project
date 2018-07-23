module objects{
    export class Car extends objects.GameObject{
        // private
        // public

        constructor( assetManager:createjs.LoadQueue ){
            super(assetManager, "car");
            this.Start();
            this.y = 430;
           }
           // recet object location
           public Reset():void{
            
           }
           //move objects
           public Move():void{
                this.x  = objects.Game.stage.mouseX;

           }
           public CheckBounds():void{
            
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