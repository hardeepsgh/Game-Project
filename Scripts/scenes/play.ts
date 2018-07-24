module scenes{
    export class PlayScene extends objects.Scene{
        // public 
        private _road : objects.Road
        private _car : objects.Car;
        private _barrel : objects.Barrel;
        private _barrel1 : objects.Barrel;
        private _roadbloack : objects.Roadblock;
        private _roadbloack1 : objects.Roadblock;
        // private
       
        private _scoreBoard:managers.Scoreboard;



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
           this._barrel1 = new objects.Barrel(this.assetManager);
           this._roadbloack = new objects.Roadblock(this.assetManager);
           this._roadbloack1 = new objects.Roadblock(this.assetManager);
           
           objects.Game.scoreboard=new managers.Scoreboard();

           this.Main();

        }
        public Main():void{
            if(Math.abs(this._barrel.x - this._roadbloack.x) < 50   ) {

               this._barrel.y = this._barrel.y - 150;
                }        

                this._barrel.y = this._barrel1.y-300;
                this._roadbloack1.y = this._roadbloack.y-200;
            
            
           this.addChild(this._road)
           this.addChild(this._barrel);
           this.addChild(this._barrel1);
           this.addChild(this._roadbloack);
           this.addChild(this._roadbloack1);
           this.addChild(this._car)
        }
        public Update():void{
           this._road.Update()
           this._car.Update()
           this._barrel.Update()
           this._barrel1.Update()
           this._roadbloack.Update()
           this._roadbloack1.Update()
        }
        //
    }
}