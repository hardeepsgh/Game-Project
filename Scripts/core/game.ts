/// <reference path="_references.ts"/>

//iffi
(function(){

    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let helloLabel : objects.Label;
    let clickMeButton : objects.Button;
    let assetManager: createjs.LoadQueue;
    let assetManifest: any[] ;
    let currentScene:objects.Scene;
    let currentState : number;

    assetManifest =  [
        {
        id: "clickMeButton" ,src: "./Assets/images/clickMeButton.png"},
        {        id: "startButton" ,src: "./Assets/images/StartButton.png"},
        {        id: "backButton" ,src: "./Assets/images/BackButton.png"},
        {        id: "nextButton" ,src: "./Assets/images/NextButton.png"},
        {        id: "road" ,src: "./Assets/images/road.png"},
        {        id: "car" ,src: "./Assets/images/car1.png"},
        {        id: "car2" ,src: "./Assets/images/car2.png"},
        {        id: "car3" ,src: "./Assets/images/car3.png"},
        {        id: "car4" ,src: "./Assets/images/car4.png"},
        {        id: "car5" ,src: "./Assets/images/car5.png"},
        {        id: "car6" ,src: "./Assets/images/car6.png"},
        {        id: "barrel" ,src: "./Assets/images/barrel.png"},
        {        id: "roadblock" ,src: "./Assets/images/roadblock.png"}
        
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

        objects.Game.stage = stage;
        objects.Game.currentScene = config.Scene.START;
        currentState =config.Scene.START;
        objects.Game.assetManager = assetManager;
        Main();
    }
    function Update():void{
        // helloLabel.rotation -= 5;

        if(currentState != objects.Game.currentScene){
  
            Main();
        }
        currentScene.Update();
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
        stage.removeAllChildren();
        switch(objects.Game.currentScene){
          

            case config.Scene.START:
            {
                
                currentScene = new scenes.StartScene(assetManager);
               
            }
            break;
            case config.Scene.PLAY:
                currentScene = new scenes.PlayScene(assetManager);
            break;
            case config.Scene.OVER:
                currentScene = new scenes.OverScene(assetManager);
            break;

        }
        currentState= objects.Game.currentScene;
        stage.addChild(currentScene);

        // console.log("Game Starting ");
        // helloLabel = new objects.Label("Hello,World " , "40px", "Consolas" , "#000000", 320,240,true);
        
        // console.log(helloLabel);
        // stage.addChild(helloLabel);
        // clickMeButton = new objects.Button(assetManager,"clickMeButton",320,340);
        // stage.addChild(clickMeButton);
        // clickMeButton.on("click" , clickMeButtonMouseClick);



        // helloLabel.x =  200;
        // helloLabel.y =  200;
        // helloLabel.regX = helloLabel.getMeasuredWidth() *0.5;
        // helloLabel.regY = helloLabel.getMeasuredHeight() *0.5;
     
        // clickMeButton.regX  = clickMeButton.getBounds().width * 0.5;
        // clickMeButton.regY  = clickMeButton.getBounds().height * 0.5;
      
        // clickMeButton.x = 320 ;
        // clickMeButton.y = 340 ;
        // clickMeButton.on("mouseover" , clickMeButtonMouseOver);
        // clickMeButton.on("mouseout" , clickMeButtonMouseOut);


    }
    window.onload = Init;
})();