var managers;
(function (managers) {
    var Scoreboard = /** @class */ (function () {
        //constructor
        function Scoreboard() {
            this._initialize();
        }
        Object.defineProperty(Scoreboard.prototype, "Lives", {
            //public properties
            get: function () {
                return this._lives;
            },
            set: function (newLives) {
                this._lives = newLives;
                this.LiveLabel.text = "Lives :" + this._lives;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scoreboard.prototype, "Score", {
            get: function () {
                return this._scores;
            },
            set: function (newScore) {
                this._scores = newScore;
                this.ScoreLabel.text = "Lives :" + this._scores;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scoreboard.prototype, "HighScore", {
            get: function () {
                return this._highScore;
            },
            set: function (newHighScore) {
                this._highScore = newHighScore;
                this.HighScoreLabel.text = "High Score :" + this._highScore;
            },
            enumerable: true,
            configurable: true
        });
        Scoreboard.prototype._initialize = function () {
            this.LiveLabel = new objects.Label("Lives : 0", "20px", "Consolas", "#FFFF00", 10, 10, false);
            this.ScoreLabel = new objects.Label("Score : 99999", "20px", "Consolas", "#FFFF00", 500, 10, false);
            this.HighScoreLabel = new objects.Label("High Score : 99999", "40px", "Consolas", "#FFFF00", 320, 240, false);
        };
        return Scoreboard;
    }());
    managers.Scoreboard = Scoreboard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map