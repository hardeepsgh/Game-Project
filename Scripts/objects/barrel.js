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
    var Barrel = /** @class */ (function (_super) {
        __extends(Barrel, _super);
        // private
        // public
        function Barrel(assetManager) {
            var _this = _super.call(this, assetManager, "barrel") || this;
            _this.Start();
            _this.y = 530;
            _this.scaleX = 0.5;
            _this.scaleY = 0.5;
            return _this;
        }
        // recet object location
        Barrel.prototype.Reset = function () {
            this.x = Math.floor((Math.random() * (840 - this.width)) + this.halfWidth);
            this.y = -this.height;
        };
        //move objects
        Barrel.prototype.Move = function () {
            this.y += this._dy;
        };
        Barrel.prototype.CheckBounds = function () {
            if (this.y >= 700 - this.height) {
                this.Reset();
            }
            if (this.x <= this.halfWidth + 145) {
                this.x = 145 + this.halfWidth;
            }
        };
        //init var create new object
        Barrel.prototype.Start = function () {
            this._dy = 5;
        };
        Barrel.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        return Barrel;
    }(objects.GameObject));
    objects.Barrel = Barrel;
})(objects || (objects = {}));
//# sourceMappingURL=barrel.js.map