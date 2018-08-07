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
    var Instructions = /** @class */ (function (_super) {
        __extends(Instructions, _super);
        // constructors
        function Instructions(assetManager) {
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
        Instructions.prototype.Start = function () {
            this._gameNameLabel = new objects.Label("Instructions For Lane Steer(Single Level Game)", "30px", "Arial", "#FFF000", 400, 30, true);
            this._backButton = new objects.Button(this.assetManager, "backButton", 300, 520);
            this._instructions = "A. How to Play\n\n";
            this._instructions += "1. Controls\n\n \t\to A(MoveLeft) or Left Arrow Key\n\n \t\to D(MoveRight) or Right Arrow Key\n\n";
            this._instructions += "2. Score\n\n";
            this._instructions += "\t\t\to 100 Points when player eats every single food item(Apple, Grape or Watermelon)\n\n";
            this._instructions += "3. Live(s)\n\n";
            this._instructions += "\t\t\to Total 5 lives, one life reduced when player eats mushroom food item\n\n";
            this._instructions += "\t\t\to When there is no life left, GAME OVER\n\n";
            this._instructionText = new objects.Label(this._instructions, "20px", "Arial", "#FFF000", 400, 280, true);
            this._instructionText.textBaseline = "alphabetic";
            this.Main();
        };
        /**
         *Update method is called when stage of scene is updated.
         *
         * @memberof Instructions
         */
        Instructions.prototype.Update = function () {
            // this._background.Update();
        };
        /**
         *Reset method is called while restarting the state of scene
         *
         * @memberof Instructions
         */
        Instructions.prototype.Reset = function () {
        };
        /**
         *Destroy method is called while scene is destroyed
         *
         * @memberof Instructions
         */
        Instructions.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        /**
         *All the objects used in this scene are added in this method to scene.
         *This is the main method of class.
         *
         * @memberof Instructions
         */
        Instructions.prototype.Main = function () {
            console.log("Starting - START SCENE");
            //this.addChild(this._ocean);
            this.addChild(this._gameNameLabel);
            this.addChild(this._instructionText);
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                objects.Game.currentScene = config.Scene.START;
            }, this);
        };
        return Instructions;
    }(objects.Scene));
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
//# sourceMappingURL=instructions.js.map