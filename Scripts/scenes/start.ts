module scenes{
    export class StartScene extends objects.Scene{
        // public 

        // private
        private _welcomeLabel :objects.Label;
        private _startButton :objects.Button;
        private _welcomeImage: createjs.Bitmap;
        private _instructionButton:objects.Button;


        private _startButtonClick() :void{
            objects.Game.currentScene =config.Scene.PLAY;
        }


        // constructor 
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }

        public Init():void{
            
        }
        
        public Start():void{
            this._welcomeLabel = new objects.Label("Lane Steer", '70px',"Consolas","#FF0000",200, 70);
            this._startButton = new objects.Button(this.assetManager,"startButton",650, 100);
            this._welcomeImage=new createjs.Bitmap(this.assetManager.getResult("welcomeImage"));  
            
           // this._welcomeImage.scaleX=1.4;
           // this._welcomeImage.scaleY=1.5;
           this._welcomeImage.scaleX=0.68;
           this._welcomeImage.scaleY=0.8;
           
            this._instructionButton=new objects.Button(this.assetManager,"InstructionButton",650,200);

            this.Main();

        }
        public Main():void{
            this.addChild(this._welcomeImage);
            this.addChild(this._welcomeLabel);   

            this.addChild(this._startButton);
            this.addChild(this._instructionButton);
            this._startButton.on("click",this._startButtonClick);
            this._instructionButton.on("click", function(){
                objects.Game.currentScene =config.Scene.INSTRUCTION;
            }, this);
        }
        public Update():void{
           
        }
        //
    }
}