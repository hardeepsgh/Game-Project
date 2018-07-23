module scenes{
    export class PlayScene extends objects.Scene{
        // public 
        private _road : objects.Road
        private _car : objects.Car;
        private _barrel : objects.Barrel;
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
           this._car = new objects.Car(this.assetManager);
           this._barrel = new objects.Barrel(this.assetManager);
            this.Main();

        }
        public Main():void{                 
           this.addChild(this._road)
           this.addChild(this._barrel);
           this.addChild(this._car)
        }
        public Update():void{
           this._road.Update()
           this._car.Update()
           this._barrel.Update()
        }
        //
    }
}