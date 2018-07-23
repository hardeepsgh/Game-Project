module scenes{
    export class PlayScene extends objects.Scene{
        // public 
        private _road : objects.Road
        private _car : objects.Car;
        private _barrel : objects.Barrel;
        private _roadbloack : objects.Roadblock;
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
           this._roadbloack = new objects.Roadblock(this.assetManager);
            this.Main();

        }
        public Main():void{
            if((this._barrel.x - this._roadbloack.x > -50 || this._barrel.x - this._roadbloack.x < 50 )&&
                (this._barrel.y - this._roadbloack.y > -50 || this._barrel.y - this._roadbloack.y < 50)) {

                   let mean:any =  (this._barrel.x + this._roadbloack.x)/2;
                    if ( this._barrel.x < mean ){
                            this._barrel.x = this._barrel.x -50;

                    }      else{
                        this._barrel.x = this._barrel.x +50;
                    }
                    if ( this._roadbloack.x < mean ){
                        this._roadbloack.x = this._roadbloack.x -50;

                }      else{
                    this._roadbloack.x = this._roadbloack.x +50;
                }
                }        
            
            
           this.addChild(this._road)
           this.addChild(this._barrel);
           this.addChild(this._roadbloack);
           this.addChild(this._car)
        }
        public Update():void{
           this._road.Update()
           this._car.Update()
           this._barrel.Update()
           this._roadbloack.Update()
        }
        //
    }
}