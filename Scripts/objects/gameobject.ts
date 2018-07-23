 module objects{
     export  class GameObject extends createjs.Bitmap{
         // private
         protected _dx :number;
         protected _dy :number;

         // public
         public width :number;
         public height :number;
         public halfWidth:number;
         public halfHeight :number;
         

         // construct 
         constructor( assetManager:createjs.LoadQueue,  imageString : string ){
             super(assetManager.getResult( imageString));
             this.name  = imageString;
             this._initialize();
           //  this.regX = this.getBounds().width * 0.5
           //  this.regY = this.getBounds().height * 0.5
            
            
           }
         //private
         private _initialize():void{
                this.width = this.getBounds().width;
                this.height = this.getBounds().height;
                this.halfWidth = this.width * 0.5;
                this.halfHeight = this.height * 0.5;
                this.regX = this.halfWidth;
                this.regY = this.halfHeight;
         }
         // public
         public Start():void{

         }
         public Update():void{

         }
         public Reset():void{

         }
         public Move():void{

         }
         public CheckBounds():void{

         }

     }
 }