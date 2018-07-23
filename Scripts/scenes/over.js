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
    var OverScene = /** @class */ (function (_super) {
        __extends(OverScene, _super);
        // constructor 
        function OverScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        OverScene.prototype._backButtonClick = function () {
            objects.Game.currentScene = config.Scene.PLAY;
        };
        OverScene.prototype.Init = function () {
        };
        OverScene.prototype.Start = function () {
            this._overLabel = new objects.Label("Game over", '40px', "Consolas", "#000000", 220, 180);
            this._backButton = new objects.Button(this.assetManager, "backButton", 270, 300);
            this.Main();
        };
        OverScene.prototype.Main = function () {
            this.addChild(this._overLabel);
            this.addChild(this._backButton);
            this._backButton.on("click", this._backButtonClick);
        };
        OverScene.prototype.Update = function () {
        };
        return OverScene;
    }(objects.Scene));
    scenes.OverScene = OverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map