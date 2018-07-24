module objects{
    export class Road extends createjs.Bitmap{
        // private
        private _dy:number ;
        // public

        constructor( assetManager:createjs.LoadQueue ){
            super(assetManager.getResult( "road"));
            this.Start();
        
           }
           // recet object location
           private _reset():void{
               this.y  = -1452;
           }
           //move objects
           public _move():void{
            this.y += this._dy;

           }
           public _checkBounds():void{
                if (this.y >= 0){
                    this._reset();
                }
           }
           //init var create new object
           public Start():void{
            this._dy = 2;
            this._reset();
           }
           public Update():void{
            this._move();
            this._checkBounds();
           }
    }
}