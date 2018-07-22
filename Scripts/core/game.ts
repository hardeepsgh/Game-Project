(function(){

    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let helloLabel : createjs.Text;
    function Init(){
        console.log("initialization Started");
        Start();
        
    }
    function Start():void{
        console.log("Starting Application")
        stage =  new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60 ;
        createjs.Ticker.on("tick",Update);
        Main();
    }
    function Update():void{
        helloLabel.rotation -= 5;
        stage.update();
    }
    function Main():void{
        console.log("Game Starting ");
        helloLabel = new createjs.Text("hello,world", "40px Consolas", "#000000");
        helloLabel.x =  100;
        helloLabel.y =  100;
        stage.addChild(helloLabel);


    }
    window.onload = Init;
})();