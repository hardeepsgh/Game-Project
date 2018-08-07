module scenes{
    export class PlayScene extends objects.Scene{
        // public 
        private _road : objects.Road
        private _car : objects.Car;
        private _barrel : objects.Barrel;
        private _roadblock : objects.Roadblock;
        private _barrel1 : objects.Barrel;
        private _roadblock1 : objects.Roadblock;
        private _barrel2 : objects.Barrel;
        private _roadblock2 : objects.Roadblock;
        
        // private
       
        private _scoreBoard:managers.Scoreboard;



        /**
         *Creates an instance of PlayScene.
         * @param {createjs.LoadQueue} assetManager
         * @memberof PlayScene
         */
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }
/**
 *
 *
 * @memberof PlayScene
 */
public Init():void{
            
        }
        /**
         *
         *
         * @memberof PlayScene
         */
        public Start():void{
           this._road = new objects.Road(this.assetManager);
           this._car = new objects.Car(this.assetManager);
           this._barrel = new objects.Barrel(this.assetManager);
           this._roadblock = new objects.Roadblock(this.assetManager);

           this._barrel1 = new objects.Barrel(this.assetManager);
           this._roadblock1 = new objects.Roadblock(this.assetManager);
           this._barrel2 = new objects.Barrel(this.assetManager);
           this._roadblock2 = new objects.Roadblock(this.assetManager);

           this._scoreBoard=new managers.Scoreboard();
           objects.Game.scoreboard=this._scoreBoard;

           this.Main();

        }
        /**
         *
         *
         * @memberof PlayScene
         */
        public addObstacles():void
        {

        }
        /**
         *
         *
         * @memberof PlayScene
         */
        public Main():void{
            if((this._barrel.x - this._roadblock.x > -50 || this._barrel.x - this._roadblock.x < 50 )&&
                (this._barrel.y - this._roadblock.y > -50 || this._barrel.y - this._roadblock.y < 50)) {

               this._barrel.y = this._barrel.y - 100;
                }        
                
                this._barrel1.y = this._barrel.y -150 ;
                this._roadblock1.y = this._barrel.y -150 ;
                
                this._barrel2.y = this._barrel1.y -150 ;
                this._roadblock2.y = this._barrel1.y -150 ;

                if((this._barrel1.x - this._roadblock1.x > -50 || this._barrel1.x - this._roadblock1.x < 50 )&&
                (this._barrel1.y - this._roadblock1.y > -50 || this._barrel1.y - this._roadblock1.y < 50)) {

               this._barrel1.y = this._barrel1.y - 100;
                }    
            
                if((this._barrel2.x - this._roadblock2.x > -50 || this._barrel2.x - this._roadblock2.x < 50 )&&
                (this._barrel2.y - this._roadblock2.y > -50 || this._barrel2.y - this._roadblock2.y < 50)) {

               this._barrel2.y = this._barrel2.y - 100;
                }  


           this.addChild(this._road)

           this.addChild(this._car);

           this.addChild(this._scoreBoard.LiveLabel);
           this.addChild(this._scoreBoard.ScoreLabel);

           this.addChild(this._barrel);
           this.addChild(this._roadblock);


           this.addChild(this._barrel1);
           this.addChild(this._roadblock1);

           this.addChild(this._barrel2);
           this.addChild(this._roadblock2);


        }
        /**
         *
         *
         * @memberof PlayScene
         */
        public Update():void{
           this._road.Update()
           this._car.Update()

           this._barrel.Update()
           this._barrel1.Update()
           this._barrel2.Update()
           //check collision between car and barrel
           managers.Collision.Check(this._car,this._barrel);
           managers.Collision.Check(this._car,this._barrel1);
           managers.Collision.Check(this._car,this._barrel2);

           this._roadblock.Update()
           this._roadblock1.Update()
           this._roadblock2.Update()
           //check collision between car and roadBlock
           managers.Collision.Check(this._car,this._roadblock);
           managers.Collision.Check(this._car,this._roadblock1);
           managers.Collision.Check(this._car,this._roadblock2);
           
           if(this._scoreBoard.Lives<=0)
           {
               objects.Game.currentScene=config.Scene.OVER;
           }

        }
    }
}
