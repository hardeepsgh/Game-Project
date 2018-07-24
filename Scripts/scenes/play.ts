module scenes{
    export class PlayScene extends objects.Scene{
        // public 
        private _road : objects.Road
        private _car : objects.Car;
        private _barrel : objects.Barrel;
        private _roadbloack : objects.Roadblock;
        
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
           this._roadbloack = new objects.Roadblock(this.assetManager);
           this._scoreBoard=new managers.Scoreboard();
           objects.Game.scoreboard=this._scoreBoard;

           this.Main();

        }
        public addObstacles():void
        {

        }
        public Main():void{
            if((this._barrel.x - this._roadbloack.x > -50 || this._barrel.x - this._roadbloack.x < 50 )&&
                (this._barrel.y - this._roadbloack.y > -50 || this._barrel.y - this._roadbloack.y < 50)) {

               this._barrel.y = this._barrel.y - 100;
                }        
            
            
           this.addChild(this._road)

           this.addChild(this._car);

           this.addChild(this._scoreBoard.LiveLabel);
           this.addChild(this._scoreBoard.ScoreLabel);

           this.addChild(this._barrel);
           this.addChild(this._roadbloack);


        }
        public Update():void{
           this._road.Update()
           this._car.Update()

           this._barrel.Update()
           //check collision between car and barrel
           managers.Collision.Check(this._car,this._barrel);

           this._roadbloack.Update()
           //check collision between car and roadBlock
           managers.Collision.Check(this._car,this._roadbloack);
           
           if(this._scoreBoard.Lives<=0)
           {
               objects.Game.currentScene=config.Scene.OVER;
           }

        }
    }
}
