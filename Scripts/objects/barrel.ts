module objects{
    export class Barrel extends objects.GameObject{
        // private
        // public

        constructor( assetManager:createjs.LoadQueue ){
            super(assetManager, "barrel");
            this.Start();
            this.y = 430;
            this.scaleX = 0.5;
            this.scaleY = 0.5;
           }
           // recet object location
           public Reset():void{
               this.x = Math.floor((Math.random()* (840-this.width))+this.halfWidth);
               this.y =-this.height;
           }
           //move objects
           public Move():void{
               this.y  +=  this._dy; 

           }
           public CheckBounds():void{
                if(this.y >= 700  - this.height){
                    this.Reset();  
                }

                if(this.x <= this.halfWidth+145){
                        this.x = 145+this.halfWidth;
                }
           }
           //init var create new object
           public Start():void{
            this._dy = 5 ;
           }
           public Update():void{
            this.Move();
            this.CheckBounds();
           }
    }
}