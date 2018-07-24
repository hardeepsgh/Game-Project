module objects{
    export class Barrel extends objects.GameObject{
        // private
        // public

        constructor( assetManager:createjs.LoadQueue ){
            super(assetManager, "barrel");
            this.Start();
            this.y = 600;
            this.scaleX = 0.4;
            this.scaleY = 0.4;
           }
           // recet object location
           public Reset():void{
               this.x =  this.x  =  (this.randomInt(0,3)*125 )+230;
               this.y =-this.height;
           }

           private randomInt(min, max){
            return Math.floor(Math.random() * (max - min + 1)) + min;}
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
            this._dy = 2 ;
           }
           public Update():void{
            this.Move();
            this.CheckBounds();
           }
    }
}