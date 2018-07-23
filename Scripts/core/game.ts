/// <reference path="_references.ts"/>

//iffi
(function(){

    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let helloLabel : objects.Label;
    let clickMeButton : objects.Button;
    let assetManager: createjs.LoadQueue;
    let assetManifest: any[] ;

    assetManifest =  [
        {
        id: "clickMeButton" ,src: "./Assets/images/clickMeButton.png"
    }
    ]
    function Init(){
        console.log("initialization Started");
        assetManager  =  new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete",Start,this);
        Start();
        
    }
    function Start():void{
        console.log("Starting Application");
        stage =  new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60 ;
        createjs.Ticker.on("tick",Update);
        Main();
    }
    function Update():void{
        // helloLabel.rotation -= 5;
        stage.update();
    }

    // function clickMeButtonMouseOver():void{
    //     clickMeButton.alpha = 0.7;

    // }
    // function clickMeButtonMouseOut():void{
    //     clickMeButton.alpha = 1.0;

    // }
    function clickMeButtonMouseClick():void{
        helloLabel.text = "Clicked";
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5 ;
        helloLabel.regY= helloLabel.getMeasuredHeight() * 0.5 ;

        clickMeButton.alpha = 1.0;

    }
    function Main():void{
        console.log("Game Starting ");
        helloLabel = new objects.Label("Hello,World " , "40px", "Consolas" , "#000000", 320,240,true);
        
        console.log(helloLabel);
        // helloLabel.x =  200;
        // helloLabel.y =  200;
        // helloLabel.regX = helloLabel.getMeasuredWidth() *0.5;
        // helloLabel.regY = helloLabel.getMeasuredHeight() *0.5;
        stage.addChild(helloLabel);
        clickMeButton = new objects.Button(assetManager,"clickMeButton",320,340);
     
        // clickMeButton.regX  = clickMeButton.getBounds().width * 0.5;
        // clickMeButton.regY  = clickMeButton.getBounds().height * 0.5;
      
        // clickMeButton.x = 320 ;
        // clickMeButton.y = 340 ;
        stage.addChild(clickMeButton);
        // clickMeButton.on("mouseover" , clickMeButtonMouseOver);
        // clickMeButton.on("mouseout" , clickMeButtonMouseOut);
        clickMeButton.on("click" , clickMeButtonMouseClick);


    }
    window.onload = Init;
})();