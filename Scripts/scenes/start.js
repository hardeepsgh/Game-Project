var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
        StartScene.prototype._startButotnClick = function () {
            objects.Game.currentScene = config.Scene.PLAY;
        };
        StartScene.prototype.Init = function () {
        };
        StartScene.prototype.Start = function () {
            this._welcomeLabel = new objects.Label("Welcome", '60px', "Consolas", "#000000", 220, 200);
            this._startButton = new objects.Button(this.assetManager, "startButton", 320, 300);
            this.Main();
        };
        StartScene.prototype.Main = function () {
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this._startButton.on("click", this._startButotnClick);
        };
        StartScene.prototype.Update = function () {
            return objects.Game.currentScene;
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map