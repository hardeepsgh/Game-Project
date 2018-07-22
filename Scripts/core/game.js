(function () {
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    var clickMeButton;
    function Init() {
        console.log("initialization Started");
        Start();
    }
    function Start() {
        console.log("Starting Application");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        // helloLabel.rotation -= 5;
        stage.update();
    }
    function clickMeButtonMouseOver() {
        clickMeButton.alpha = 0.7;
    }
    function clickMeButtonMouseOut() {
        clickMeButton.alpha = 1.0;
    }
    function clickMeButtonMouseClick() {
        helloLabel.text = "Clicked";
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        clickMeButton.alpha = 1.0;
    }
    function Main() {
        console.log("Game Starting ");
        helloLabel = new objects.Label("Hello,World ", "40px", "Consolas", "#000000", 320, 240, true);
        console.log(helloLabel);
        // helloLabel.x =  200;
        // helloLabel.y =  200;
        // helloLabel.regX = helloLabel.getMeasuredWidth() *0.5;
        // helloLabel.regY = helloLabel.getMeasuredHeight() *0.5;
        stage.addChild(helloLabel);
        clickMeButton = new createjs.Bitmap("./Assets/images/clickMeButton.png");
        clickMeButton.regX = 50;
        clickMeButton.regY = 50;
        clickMeButton.x = 320;
        clickMeButton.y = 340;
        stage.addChild(clickMeButton);
        clickMeButton.on("mouseover", clickMeButtonMouseOver);
        clickMeButton.on("mouseout", clickMeButtonMouseOut);
        clickMeButton.on("click", clickMeButtonMouseClick);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map