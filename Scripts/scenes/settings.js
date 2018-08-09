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
            this._selectCarLabel = new objects.Label("Choose your car :", "20px", "Arial", "#FF0000", 150, 100, true);
            this._selectCarImage1 = new createjs.Bitmap(this.assetManager.getResult("car"));
            this._selectCarImage1.x = 300;
            this._selectCarImage1.y = 100;
            this._selectCarImage1.rotation = 90;
            this._selectCarImage2 = new createjs.Bitmap(this.assetManager.getResult("car6"));
            this._selectCarImage2.x = 400;
            this._selectCarImage2.y = 100;
            this._selectCarImage2.rotation = 90;
            this._selectCarImage3 = new createjs.Bitmap(this.assetManager.getResult("car3"));
            this._selectCarImage3.x = 500;
            this._selectCarImage3.y = 100;
            this._selectCarImage3.rotation = 90;
            this._selectCarImage4 = new createjs.Bitmap(this.assetManager.getResult("car5"));
            this._selectCarImage4.x = 600;
            this._selectCarImage4.y = 100;
            this._selectCarImage4.rotation = 90;
            this._levelLabel = new objects.Label("Choose Level : \t\t\t\t\t\t\t\t Level 1 \t\t\t\t\t\t\t Level 2 \t\t\t\t\t\t\t Level 3", "20px", "Arial", "#FF0000", 335, 150, true);
            this.Main();
        };
        /**
         *Update method is called when stage of scene is updated.
         *
         * @memberof Instructions
         */
        Settings.prototype.Update = function () {
            // this._background.Update();
            var bounds = this._selectCarImage1.getBounds();
            this._selectCarImage1.regX = bounds.width / 2;
            this._selectCarImage1.regY = bounds.height / 2;
            bounds = this._selectCarImage2.getBounds();
            this._selectCarImage2.regX = bounds.width / 2;
            this._selectCarImage2.regY = bounds.height / 2;
            bounds = this._selectCarImage3.getBounds();
            this._selectCarImage3.regX = bounds.width / 2;
            this._selectCarImage3.regY = bounds.height / 2;
            bounds = this._selectCarImage4.getBounds();
            this._selectCarImage4.regX = bounds.width / 2;
            this._selectCarImage4.regY = bounds.height / 2;
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
            this.addChild(this._selectCarLabel);
            this.addChild(this._selectCarImage1);
            this.addChild(this._selectCarImage2);
            this.addChild(this._selectCarImage3);
            this.addChild(this._selectCarImage4);
            this.addChild(this._levelLabel);
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                objects.Game.currentScene = config.Scene.START;
            }, this);
            this._selectCarImage1.on("click", function () {
                // this.selectCar(this._selectCarImage1);
            }, this);
        };
        return Settings;
    }(objects.Scene));
    scenes.Settings = Settings;
})(scenes || (scenes = {}));
//# sourceMappingURL=settings.js.map