var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        // constructor 
        function StartScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        StartScene.prototype._startButtonClick = function () {
            objects.Game.currentScene = config.Scene.PLAY;
        };
        StartScene.prototype.Init = function () {
        };
        StartScene.prototype.Start = function () {
            this._welcomeLabel = new objects.Label("Lane Steer", '70px', "Consolas", "#FF0000", 200, 70);
            this._startButton = new objects.Button(this.assetManager, "startButton", 650, 100);
            this._welcomeImage = new createjs.Bitmap(this.assetManager.getResult("welcomeImage"));
            // this._welcomeImage.scaleX=1.4;
            // this._welcomeImage.scaleY=1.5;
            this._welcomeImage.scaleX = 0.68;
            this._welcomeImage.scaleY = 0.8;
            this._instructionButton = new objects.Button(this.assetManager, "InstructionButton", 650, 200);
            this.Main();
        };
        StartScene.prototype.Main = function () {
            this.addChild(this._welcomeImage);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this.addChild(this._instructionButton);
            this._startButton.on("click", this._startButtonClick);
            this._instructionButton.on("click", function () {
                objects.Game.currentScene = config.Scene.INSTRUCTION;
            }, this);
        };
        StartScene.prototype.Update = function () {
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map