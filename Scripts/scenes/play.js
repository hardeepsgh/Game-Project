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
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // constructor 
        function PlayScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        PlayScene.prototype._nextButtonClick = function () {
            objects.Game.currentScene = config.Scene.OVER;
        };
        PlayScene.prototype._backButtonClick = function () {
            objects.Game.currentScene = config.Scene.START;
        };
        PlayScene.prototype.Init = function () {
        };
        PlayScene.prototype.Start = function () {
            this._playLabel = new objects.Label("Game playing", '40px', "Consolas", "#000000", 220, 180);
            this._nextButton = new objects.Button(this.assetManager, "nextButton", 450, 240);
            this._backButton = new objects.Button(this.assetManager, "backButton", 100, 240);
            this.Main();
        };
        PlayScene.prototype.Main = function () {
            this.addChild(this._playLabel);
            this.addChild(this._nextButton);
            this.addChild(this._backButton);
            this._nextButton.on("click", this._nextButtonClick);
            this._backButton.on("click", this._backButtonClick);
        };
        PlayScene.prototype.Update = function () {
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map