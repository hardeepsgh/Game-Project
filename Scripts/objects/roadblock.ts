module objects {
    export class Roadblock extends objects.GameObject {
        // private
        // public

        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager, "roadblock");
            this.Start();
            this.y = 600;
            this.scaleX = 0.7;
            this.scaleY = 0.3;
        }
        // recet object location
        public Reset(): void {
            // this.x = Math.floor((Math.random()* (840-this.width))+this.halfWidth);
            this.y = -this.height;

            this.x = (this.randomInt(0, 3) * 125) + 230;
        }
        private randomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        /**
         *
         *
         * @memberof Roadblock
         */
        public Move(): void {
            this.y += this._dy;


        }
        /**
         *
         *
         * @memberof Roadblock
         */
        public CheckBounds(): void {
            if (this.y >= 700 - this.height) {
                this.Reset();
            }

            if (this.x <= this.halfWidth + 145) {
                this.x = 145 + this.halfWidth;
            }
        }
        //init var create new object
        public Start(): void {
            this._dy = 2;
        }
        public Update(): void {
            this.Move();
            this.CheckBounds();
        }
    }
}