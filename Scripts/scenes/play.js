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
        PlayScene.prototype.Init = function () {
        };
        PlayScene.prototype.Start = function () {
            this._road = new objects.Road(this.assetManager);
            this._car = new objects.Car(this.assetManager);
            this._barrel = new objects.Barrel(this.assetManager);
            this._barrel1 = new objects.Barrel(this.assetManager);
            this._roadbloack = new objects.Roadblock(this.assetManager);
            this._roadbloack1 = new objects.Roadblock(this.assetManager);
            objects.Game.scoreboard = new managers.Scoreboard();
            this.Main();
        };
        PlayScene.prototype.Main = function () {
            if (Math.abs(this._barrel.x - this._roadbloack.x) < 50) {
                this._barrel.y = this._barrel.y - 150;
            }
            this._barrel.y = this._barrel1.y - 300;
            this._roadbloack1.y = this._roadbloack.y - 200;
            this.addChild(this._road);
            this.addChild(this._barrel);
            this.addChild(this._barrel1);
            this.addChild(this._roadbloack);
            this.addChild(this._roadbloack1);
            this.addChild(this._car);
        };
        PlayScene.prototype.Update = function () {
            this._road.Update();
            this._car.Update();
            this._barrel.Update();
            this._barrel1.Update();
            this._roadbloack.Update();
            this._roadbloack1.Update();
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map