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
var objects;
(function (objects) {
    var Car = /** @class */ (function (_super) {
        __extends(Car, _super);
        // private
        // public
        function Car(assetManager) {
            var _this = _super.call(this, assetManager, "car") || this;
            _this.Start();
            _this.y = 540;
            _this.scaleX = 0.4;
            _this.scaleY = 0.4;
            return _this;
        }
        // recet object location
        Car.prototype.Reset = function () {
        };
        //move objects
        Car.prototype.Move = function () {
            this.x = objects.Game.stage.mouseX;
        };
        Car.prototype.CheckBounds = function () {
            if (this.x >= 700 - this.halfWidth) {
                this.x = 700 - this.halfWidth;
            }
            if (this.x <= this.halfWidth + 145) {
                this.x = 145 + this.halfWidth;
            }
        };
        //init var create new object
        Car.prototype.Start = function () {
        };
        Car.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        return Car;
    }(objects.GameObject));
    objects.Car = Car;
})(objects || (objects = {}));
//# sourceMappingURL=car.js.map