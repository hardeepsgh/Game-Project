module objects{
    export class Scene extends  createjs.Container{
        // instance var 
        // punlic var
        public assetManager;
        //private 
        constructor(assetManager:createjs.LoadQueue){
            super();
            this.assetManager = assetManager;
        }

        public Init():void{
            
        }
        public Main():void{

        }
        public Start():void{

        }
        public Update():number{
            return 0 ;
        }
       
    }
}