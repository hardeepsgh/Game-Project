var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        /**
         *
         *
         * @static
         * @param {objects.GameObject} object1
         * @param {objects.GameObject} object2
         * @memberof Collision
        /**
         *
         *
         * @static
         * @param {objects.GameObject} object1
         * @param {objects.GameObject} object2
         * @memberof Collision
         */
        Collision.Check = function (object1, object2) {
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            if (math.Vec2.Distance(P1, P2) < (object1.halfHeight + object2.halfHeight)) {
                if (!object2.isColliding) {
                    console.log("collision" + object2.name);
                    object2.isColliding = true;
                    switch (object2.name) {
                        case "roadblock":
                            console.log("inside road block ");
                            objects.Game.scoreboard.Score -= 10;
                            objects.Game.scoreboard.Lives -= 1;
                            break;
                        case "barrel":
                            console.log("inside barel ");
                            objects.Game.scoreboard.Score -= 10;
                            objects.Game.scoreboard.Lives -= 1;
                            break;
                    }
                }
            }
            else {
                object2.isColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map