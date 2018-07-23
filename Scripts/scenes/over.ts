module scenes{
    export class OverScene extends objects.Scene{
        // public 

        // private
        private _overLabel :objects.Label;
        private _backButton :objects.Button;
      
        private _backButtonClick() :void{
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
            this._overLabel = new objects.Label("Game over", '40px',"Consolas","#000000",220, 180);            
            this._backButton = new objects.Button(this.assetManager,"backButton",270, 300);
            this.Main();

        }
        public Main():void{
            this.addChild(this._overLabel);   

      
            this.addChild(this._backButton);
            this._backButton.on("click",this._backButtonClick);
        }
        public Update():void{
           
        }
        //
    }
}