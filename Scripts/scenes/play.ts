module scenes{
    export class PlayScene extends objects.Scene{
        // public 

        // private
        private _playLabel :objects.Label;
        private _nextButton :objects.Button;
        private _backButton :objects.Button;
        private _nextButtonClick() :void{
            objects.Game.currentScene =config.Scene.OVER;
        }
        private _backButtonClick() :void{
            objects.Game.currentScene =config.Scene.START;
        }


        // constructor 
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }

        public Init():void{
            
        }
        
        public Start():void{
            this._playLabel = new objects.Label("Game playing", '40px',"Consolas","#000000",220, 180);
            this._nextButton = new objects.Button(this.assetManager,"nextButton",450, 240);
            this._backButton = new objects.Button(this.assetManager,"backButton",100, 240);
            this.Main();

        }
        public Main():void{
            this.addChild(this._playLabel);   

            this.addChild(this._nextButton);
            this.addChild(this._backButton);
            this._nextButton.on("click",this._nextButtonClick);
            this._backButton.on("click",this._backButtonClick);
        }
        public Update():void{
           
        }
        //
    }
}