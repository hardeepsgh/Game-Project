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
            this._roadbloack = new objects.Roadblock(this.assetManager);
            this._scoreBoard = new managers.Scoreboard();
            objects.Game.scoreboard = this._scoreBoard;
            this.Main();
        };
        PlayScene.prototype.addObstacles = function () {
        };
        PlayScene.prototype.Main = function () {
            if ((this._barrel.x - this._roadbloack.x > -50 || this._barrel.x - this._roadbloack.x < 50) &&
                (this._barrel.y - this._roadbloack.y > -50 || this._barrel.y - this._roadbloack.y < 50)) {
                this._barrel.y = this._barrel.y - 100;
            }
            this.addChild(this._road);
            this.addChild(this._car);
            this.addChild(this._scoreBoard.LiveLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
            this.addChild(this._barrel);
            this.addChild(this._roadbloack);
        };
        PlayScene.prototype.Update = function () {
            this._road.Update();
            this._car.Update();
            this._barrel.Update();
            //check collision between car and barrel
            managers.Collision.Check(this._car, this._barrel);
            this._roadbloack.Update();
            //check collision between car and roadBlock
            managers.Collision.Check(this._car, this._roadbloack);
            if (this._scoreBoard.Lives <= 0) {
                objects.Game.currentScene = config.Scene.OVER;
            }
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map