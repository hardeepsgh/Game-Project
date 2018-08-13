

module managers {
    export class Collision {
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
        public static Check(roadObject:objects.Road,object1: objects.GameObject, object2: objects.GameObject,currentScene: objects.Scene) {
            let P1: math.Vec2 = new math.Vec2(object1.x, object1.y);
            let P2: math.Vec2 = new math.Vec2(object2.x, object2.y);


            if (math.Vec2.Distance(P1, P2) < (object1.halfWidth + object2.halfWidth)) {

                if (!object2.isColliding) {
                    let sign;
                    console.log("collision" + object2.name);
                    object2.isColliding = true;

                    switch (object2.name) {
                        case "roadblock":
                            console.log("inside road block ");
                            objects.Game.scoreboard.Score -= 10;
                            objects.Game.scoreboard.Lives -= 1;
                            let explosion=new objects.Explosion(currentScene.assetManager);
                            explosion.x=object1.x;
                            explosion.y=object1.y-object1.halfHeight;
                            explosion.regX = explosion.getBounds().width/2;
                            explosion.regY = explosion.getBounds().height/2;
                            currentScene.addChild(explosion);
                            object2._dy=(object2._dy*-1);  
                             sign =  (( object2.x-object1.x)/Math.abs( object2.x-object1.x));  
                             object2._dx= 2*sign;
                            object2._dr = 2*sign;
                            setTimeout(function(){
                                object2.Reset();
                            },500);  

                            break;
                        case "barrel":
                            console.log("inside barel ");
                            objects.Game.scoreboard.Score -= 10;
                            objects.Game.scoreboard.Lives -= 1;
                            
                            let explosion1=new objects.Explosion(currentScene.assetManager);
                            explosion1.x=object1.x;
                            explosion1.y=object1.y-object1.halfHeight;

                            explosion1.regX = explosion1.getBounds().width/2;
                            explosion1.regY = explosion1.getBounds().height/2;
                            currentScene.addChild(explosion1);                            
                            object2._dy=(object2._dy*-1);
                             sign =  (( object2.x-object1.x)/Math.abs( object2.x-object1.x));  
                             object2._dx= 2*sign;
                            object2._dr = 2*sign;
                         

                            setTimeout(function(){
                                object2.Reset();
                            },500);                            
                            
                            break;
                    }
                }
            }
            else {
                object2.isColliding = false;
            }
        }
    }
}



