module scenes{
    export class PlayScene extends objects.Scene{
        // public 
        private _road : objects.Road
        // private
       
       


        // constructor 
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }

        public Init():void{
            
        }
        
        public Start():void{
           this._road = new objects.Road(this.assetManager);
            this.Main();

        }
        public Main():void{
           this.addChild(this._road)
        }
        public Update():void{
           this._road.Update()
        }
        //
    }
}