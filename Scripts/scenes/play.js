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
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        /**
         *Creates an instance of PlayScene.
         * @param {createjs.LoadQueue} assetManager
         * @memberof PlayScene
         */
        function PlayScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        /**
         *
         *
         * @memberof PlayScene
         */
        PlayScene.prototype.Init = function () {
        };
        /**
         *
         *
         * @memberof PlayScene
         */
        PlayScene.prototype.Start = function () {
            this._road = new objects.Road(this.assetManager);
            this._car = new objects.Car(this.assetManager);
            this._barrel = new objects.Barrel(this.assetManager);
            this._roadblock = new objects.Roadblock(this.assetManager);
            this._barrel1 = new objects.Barrel(this.assetManager);
            this._roadblock1 = new objects.Roadblock(this.assetManager);
            this._barrel2 = new objects.Barrel(this.assetManager);
            this._roadblock2 = new objects.Roadblock(this.assetManager);
            this._scoreBoard = new managers.Scoreboard();
            objects.Game.scoreboard = this._scoreBoard;
            this.Main();
        };
        /**
         *
         *
         * @memberof PlayScene
         */
        PlayScene.prototype.addObstacles = function () {
        };
        /**
         *
         *
         * @memberof PlayScene
         */
        PlayScene.prototype.Main = function () {
            if ((this._barrel.x - this._roadblock.x > -50 || this._barrel.x - this._roadblock.x < 50) &&
                (this._barrel.y - this._roadblock.y > -50 || this._barrel.y - this._roadblock.y < 50)) {
                this._barrel.y = this._barrel.y - 100;
            }
            this._barrel1.y = this._barrel.y - 150;
            this._roadblock1.y = this._barrel.y - 150;
            this._barrel2.y = this._barrel1.y - 150;
            this._roadblock2.y = this._barrel1.y - 150;
            if ((this._barrel1.x - this._roadblock1.x > -50 || this._barrel1.x - this._roadblock1.x < 50) &&
                (this._barrel1.y - this._roadblock1.y > -50 || this._barrel1.y - this._roadblock1.y < 50)) {
                this._barrel1.y = this._barrel1.y - 100;
            }
            if ((this._barrel2.x - this._roadblock2.x > -50 || this._barrel2.x - this._roadblock2.x < 50) &&
                (this._barrel2.y - this._roadblock2.y > -50 || this._barrel2.y - this._roadblock2.y < 50)) {
                this._barrel2.y = this._barrel2.y - 100;
            }
            this.addChild(this._road);
            this.addChild(this._car);
            this.addChild(this._scoreBoard.LiveLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
            var that = this;
            setTimeout(function () {
                that.addChild(that._barrel);
                that.addChild(that._roadblock);
                that.addChild(that._barrel1);
                that.addChild(that._roadblock1);
                that.addChild(that._barrel2);
                that.addChild(that._roadblock2);
            }, 1000);
        };
        /**
         *
         *
         * @memberof PlayScene
         */
        PlayScene.prototype.Update = function () {
            this._road.Update();
            this._car.Update();
            var that = this;
            setTimeout(function () {
                that._barrel.Update();
                that._barrel1.Update();
                that._barrel2.Update();
                //check collision between car and barrel
                managers.Collision.Check(that._road, that._car, that._barrel, that);
                managers.Collision.Check(that._road, that._car, that._barrel1, that);
                managers.Collision.Check(that._road, that._car, that._barrel2, that);
                that._roadblock.Update();
                that._roadblock1.Update();
                that._roadblock2.Update();
                //check collision between car and roadBlock
                managers.Collision.Check(that._road, that._car, that._roadblock, that);
                managers.Collision.Check(that._road, that._car, that._roadblock1, that);
                managers.Collision.Check(that._road, that._car, that._roadblock2, that);
            }, 1000);
            if (this._scoreBoard.Lives <= 0) {
                objects.Game.currentScene = config.Scene.OVER;
            }
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map