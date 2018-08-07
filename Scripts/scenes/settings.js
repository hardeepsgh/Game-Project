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
    var Settings = /** @class */ (function (_super) {
        __extends(Settings, _super);
        // constructors
        function Settings(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        /**
         * Start method is called at the start of the class
         *
         * @memberof Instructions
         */
        Settings.prototype.Start = function () {
            this._welcomeImage = new createjs.Bitmap(this.assetManager.getResult("welcomeImage"));
            this._welcomeImage.scaleX = 0.68;
            this._welcomeImage.scaleY = 0.8;
            this._gameNameLabel = new objects.Label("Settings", "30px", "Arial", "#FFFF00", 400, 30, true);
            this._backButton = new objects.Button(this.assetManager, "backButton", 300, 520);
            this.Main();
        };
        /**
         *Update method is called when stage of scene is updated.
         *
         * @memberof Instructions
         */
        Settings.prototype.Update = function () {
            // this._background.Update();
        };
        /**
         *Reset method is called while restarting the state of scene
         *
         * @memberof Instructions
         */
        Settings.prototype.Reset = function () {
        };
        /**
         *Destroy method is called while scene is destroyed
         *
         * @memberof Instructions
         */
        Settings.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        /**
         *All the objects used in this scene are added in this method to scene.
         *This is the main method of class.
         *
         * @memberof Instructions
         */
        Settings.prototype.Main = function () {
            console.log("Starting - START SCENE");
            //this.addChild(this._ocean);
            this.addChild(this._welcomeImage);
            this.addChild(this._gameNameLabel);
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                objects.Game.currentScene = config.Scene.START;
            }, this);
        };
        return Settings;
    }(objects.Scene));
    scenes.Settings = Settings;
})(scenes || (scenes = {}));
//# sourceMappingURL=settings.js.map